import { useEffect } from "react";
import { SearchResult } from "../../../models/searchResult";
import { useSearchStore } from "../../../state/searchStore";

const SearchResults = () => {
  const isLoading = useSearchStore((state) => state.isLoading);
  const results = useSearchStore((state) => state.results);
  const setResults = useSearchStore((state) => state.setResults);

  useEffect(() => {
    return () => {
      setResults(null);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center grow">
        <span className="loading loading-dots loading-lg text-secondary-color"></span>
      </div>
    );
  }

  return (
    <>
      {results ? (
        results.map((comic: SearchResult) => <p>{comic.title}</p>)
      ) : (
        <h1>Nothing</h1>
      )}
    </>
  );
};

export default SearchResults;
