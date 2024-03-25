import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SearchState } from "./searchState";
import { SearchResults } from "../models/searchResult";

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        results: null,
        setIsLoading: (isLoading: boolean) =>
          set(() => ({ isLoading: isLoading })),
        setResults: (results: SearchResults) =>
          set(() => ({ results: results })),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
