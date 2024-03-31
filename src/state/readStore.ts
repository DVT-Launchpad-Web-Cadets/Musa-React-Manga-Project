import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useReadStore = create<ReadState>()(
  devtools(
    persist(
      (set) => ({
        currentComicScans: [],
        currentComicLanguage: "",
        setCurrentComicScans: (scans: string[]) =>
          set(() => ({ currentComicScans: scans })),
        setCurrentComicLanguage: (lang: string) =>
          set(() => ({ currentComicLanguage: lang })),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
