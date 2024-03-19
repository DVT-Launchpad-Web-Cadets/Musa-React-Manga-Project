import { Chapter, Chapters } from "../models/chapters";
import { MangaDetails } from "../models/mangaDetails";
import { Comic } from "../models/chapterComic";

export interface ComicState {
  trendingManga: (MangaDetails | undefined)[] | null;
  topManga: (MangaDetails | undefined)[] | null;
  currentComic: MangaDetails | null;
  currentChapters: Chapters | null;
  currentChapter: Comic | null;
  setTrendingManga: (manga: (MangaDetails | undefined)[]) => void;
  setTopManga: (manga: (MangaDetails | undefined)[]) => void;
  setCurrentComic: (comic: MangaDetails | undefind) => void;
  setCurrentChapters: (chapters: Chapters) => void;
  setCurrentChapter: (chapter: Comic) => void;
}
