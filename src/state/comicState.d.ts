import { Chapter, Chapters } from "../models/chapters";
import { MangaDetails } from "../models/mangaDetails";
import { Comic } from "../models/chapterComic";

export interface ComicState {
  trendingManga: (MangaDetails | undefined)[] | null;
  topManga: (MangaDetails | undefined)[] | null;
  currentComic: MangaDetails | null;
  currentChapters: Chapters | undefined | null;
  currentChapter: Chapter | undefined | null;
  setTrendingManga: (manga: (MangaDetails | undefined)[]) => void;
  setTopManga: (manga: (MangaDetails | undefined)[]) => void;
  setCurrentComic: (comic: MangaDetails | undefind) => void;
  setCurrentChapters: (chapters: Chapters | undefined) => void;
  setCurrentChapter: (chapter: Chapter) => void;
}
