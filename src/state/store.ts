import { create } from "zustand";
import { ComicState } from "./comicState";
import { devtools, persist } from "zustand/middleware";
import { MangaDetails } from "../models/mangaDetails";
import { Chapter, Chapters } from "../models/chapters";

export const useComicStore = create<ComicState>()(
  devtools(
    persist(
      (set) => ({
        trendingManga: null,
        topManga: null,
        currentComic: null,
        currentChapter: null,
        currentChapters: null,
        setTrendingManga: (manga: (MangaDetails | undefined)[]) =>
          set(() => ({ trendingManga: manga })),
        setTopManga: (manga: (MangaDetails | undefined)[]) =>
          set(() => ({ topManga: manga })),
        setCurrentComic: (comic: MangaDetails) =>
          set(() => ({ currentComic: comic })),
        setCurrentChapters: (chapters: Chapters | undefined) =>
          set(() => ({ currentChapters: chapters })),
        setCurrentChapter: (chapter: Chapter) =>
          set(() => ({ currentChapter: chapter })),
      }),
      {
        name: "comic-storage",
      }
    )
  )
);
