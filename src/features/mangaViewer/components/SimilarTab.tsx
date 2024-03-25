import { useQueries } from "@tanstack/react-query";
import { Recommendation } from "../../../models/mangaDetails";
import { getComicBySlug } from "../../../sharedAPI.ts/apiQueries";
import MangaCard from "../../../sharedComponents/MangaCard";

const SimilarTab = ({
  recommendations,
}: {
  recommendations: Recommendation[];
}) => {
  if (recommendations?.length === 0) {
    return (
      <h1 className="h-full flex items-center justify-center"> NO manga</h1>
    );
  }
  const queries = useQueries({
    queries: recommendations
      ? recommendations.slice(0, 6).map((comic) => {
          return {
            queryKey: ["comic", comic?.relates?.slug],
            queryFn: () => getComicBySlug(comic?.relates?.slug),
          };
        })
      : [],
  });

  const loadingQuery = queries.find((query) => query.isPending);
  const errorQuery = queries.find((query) => query.isError);

  if (loadingQuery) {
    return (
      <div className="flex justify-center items-center grow">
        <span className="loading loading-dots loading-lg text-secondary-color"></span>
      </div>
    );
  }

  if (errorQuery) {
    return (
      <div className="h-full flex items-center justify-center"> NO manga</div>
    );
  }

  const loadedComics = queries.map((query) => query.data);

  return (
    <div className="py-10 px-4 grid grid-cols-2 gap-y-8 place-items-center grow-0 overflow-auto">
      {loadedComics?.map((comic) => (
        <MangaCard key={comic?.comic?.slug} cardInfo={comic} />
      ))}
    </div>
  );
};

export default SimilarTab;
