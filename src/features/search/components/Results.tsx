import { useEffect } from "react";
import { useSearchStore } from "../../../state/searchStore";
import { useQueries } from "@tanstack/react-query";
import { getComicBySlug } from "../../../sharedAPI.ts/apiQueries";
import MangaCard from "../../../sharedComponents/MangaCard";

const Results = () => {
  const isLoading = useSearchStore((state) => state.isLoading);
  const results = useSearchStore((state) => state.results);
  const setResults = useSearchStore((state) => state.setResults);

  useEffect(() => {
    return () => {
      setResults(null);
    };
  }, []);

  console.log(results);
  const comicQueries = useQueries({
    queries: results
      ? results
          .filter((comic) => comic.content_rating === "safe")
          .map((comic) => {
            return {
              queryKey: ["comic", comic.slug],
              queryFn: () => getComicBySlug(comic.slug),
            };
          })
      : [],
  });

  const loadingQuery = comicQueries?.find((query) => query.isPending);
  const errorQuery = comicQueries?.find((query) => query.isError);

  if (isLoading || loadingQuery) {
    return (
      <div className="flex justify-center items-center grow">
        <span className="loading loading-dots loading-lg text-secondary-color"></span>
      </div>
    );
  }

  if (errorQuery) {
    return (
      <div className="h-full flex items-center justify-center"> No manga</div>
    );
  }

  const comics = comicQueries.map((query) => query.data);
  console.log("comics", comics);

  return (
    <>
      {comics && comics.length ? (
        <div className="flex flex-col">
          <div className="py-32 px-4 grid grid-cols-2 gap-y-8 place-items-center grow-0 overflow-auto bg-gradient-to-t from-primary-color to-gradient-color">
            {comics?.map((comic) => (
              <MangaCard key={comic?.comic?.slug} cardInfo={comic} />
            ))}
          </div>
        </div>
      ) : (
        <h1>Nothing</h1>
      )}
    </>
  );
};

export default Results;
