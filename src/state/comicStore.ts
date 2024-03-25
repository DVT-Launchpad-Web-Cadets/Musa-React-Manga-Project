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
        topManhwa: null,
        topManhua: null,
        currentComic: null,
        currentChapter: null,
        currentChapters: null,
        setTrendingManga: (manga: (MangaDetails | undefined)[]) =>
          set(() => ({ trendingManga: manga })),
        setTopManga: (manga: (MangaDetails | undefined)[]) =>
          set(() => ({ topManga: manga })),
        setTopManhwa: (manhwa: (MangaDetails | undefined)[]) =>
          set(() => ({ topManhwa: manhwa })),
        setTopManhua: (manhua: (MangaDetails | undefined)[]) =>
          set(() => ({ topManhua: manhua })),
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
