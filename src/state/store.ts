import { create } from "zustand";
import { ComicState } from "./comicState";
import { devtools, persist } from "zustand/middleware";
import { MangaDetails } from "../models/mangaDetails";
import { Comic } from "../models/chapterComic";
import { Chapters } from "../models/chapters";

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
        setCurrentChapters: (chapters: Chapters) =>
          set(() => ({ currentChapters: chapters })),
        setCurrentChapter: (chapter: Comic) =>
          set(() => ({ currentChapter: chapter })),
      }),
      {
        name: "comic-storage",
      }
    )
  )
);
