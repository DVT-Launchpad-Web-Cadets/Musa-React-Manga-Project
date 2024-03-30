import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SearchState } from "./searchState";
import { SearchResult} from "../models/searchResult";

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        results: null,
        currentcomic: null,
        setIsLoading: (isLoading: boolean) =>
          set(() => ({ isLoading: isLoading })),
        setResults: (results: SearchResult[] | null | undefined) =>
          set(() => ({ results: results })),
        setCurrentComic: (comic: SearchResult | undefined | null) =>
          set(() => ({ currentcomic: comic })),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
