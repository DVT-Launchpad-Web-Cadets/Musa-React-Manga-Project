import { Chapter, Chapters } from "../models/chapters";
import { MangaDetails } from "../models/mangaDetails";
import { Comic } from "../models/chapterComic";

export interface ComicState {
  currentComic: MangaDetails | null;
  currentChapters: Chapters | null;
  currentChapter: Comic | null;
  setCurrentComic: (comic: MangaDetails) => void;
  setCurrentChapters: (chapters: Chapters) => void;
  setCurrentChapter: (chapter: Comic) => void;
}
