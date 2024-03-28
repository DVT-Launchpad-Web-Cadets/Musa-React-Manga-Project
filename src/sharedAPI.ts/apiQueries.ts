import { Comic } from "../models/chapterComic";
import { Chapters } from "../models/chapters";
import { MangaDetails } from "../models/mangaDetails";
import { SearchResult } from "../models/searchResult";
import { TopManga } from "../models/topManga";
import apiBasieURL from "./apiBasieURL";

export const getTopComics = async (type: string): Promise<TopManga> => {
  const comics = await fetch(
    `${apiBasieURL}/top?day=180&type=trending&comic_types=${type}&accept_mature_content=false`
  );
  return await comics.json();
};

export const getComicBySlug = async (slug: string): Promise<MangaDetails> => {
  const comic = await fetch(`${apiBasieURL}/comic/${slug}/`);

  return await comic.json();
};

export const getComicChapters = async (hid: string): Promise<Chapters> => {
  const chapters = await fetch(
    `${apiBasieURL}/comic/${hid}/chapters?limit=20000&chap-order=1`
  );

  return await chapters.json();
};

export const getChapterInfo = async (
  hid: string | undefined
): Promise<Comic> => {
  const chapter = await fetch(`${apiBasieURL}/chapter/${hid}/`);

  return await chapter.json();
};

export const searchQuery = async (
  genres?: string,
  status?: string
): Promise<SearchResult[]> => {
  const results = await fetch(
    `${apiBasieURL}/v1.0/search/?${
      genres?.length && "genres=" + genres.toLowerCase()
    }&page=1&limit=15&${
      status?.length && "status=" + status
    }&showall=false&t=false`
  );

  return await results.json();
};
