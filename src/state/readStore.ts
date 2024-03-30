import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useReadStore = create<ReadState>()(
  devtools(
    persist(
      (set) => ({
        currentComicScans: [],
        setCurrentComicScans: (scans: string[]) =>
          set(() => ({ currentComicScans: scans })),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
