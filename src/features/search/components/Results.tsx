import { useEffect } from "react";
import { useSearchStore } from "../../../state/searchStore";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getComicBySlug, searchQuery } from "../../../sharedAPI.ts/apiQueries";
import MangaCard from "../../../sharedComponents/MangaCard";
import { useLocation } from "react-router-dom";
import ResultSkeleton from "../skeleton/ResultSkeleton";

const Results = () => {
  let isLoading = useSearchStore((state) => state.isLoading);
  let results = useSearchStore((state) => state.results);
  const setResults = useSearchStore((state) => state.setResults);

  const { state } = useLocation();

  if (state) {
    const { isPending, data } = useQuery({
      queryKey: ["search", state.queryGenres, state.queryStatus],
      queryFn: () => searchQuery(state.queryGenres, state.queryStatus),
    });
    results = data;
    isLoading = isPending;
  } else {
    isLoading = useSearchStore((state) => state.isLoading);
    results = useSearchStore((state) => state.results);
  }

  useEffect(() => {
    return () => {
      setResults(null);
    };
  }, []);

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
    return <ResultSkeleton />;
  }

  if (errorQuery) {
    return (
      <div className="h-full flex items-center justify-center"> No manga</div>
    );
  }

  const comics = comicQueries.map((query) => query.data);

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
