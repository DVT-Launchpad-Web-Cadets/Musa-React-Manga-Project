import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SearchState } from "./searchState";
import { SearchResult } from "../models/searchResult";

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        results: null,
        isError: false,
        currentcomic: null,
        setIsLoading: (isLoading: boolean) =>
          set(() => ({ isLoading: isLoading })),
        setResults: (results: SearchResult[] | null | undefined) =>
          set(() => ({ results: results })),
        setIsError: (error: boolean) => set(() => ({ isError: error })),
        setCurrentComic: (comic: SearchResult | undefined | null) =>
          set(() => ({ currentcomic: comic })),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
