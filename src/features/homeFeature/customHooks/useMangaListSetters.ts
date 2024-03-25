import { useEffect } from "react";
import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/comicStore";

export function useMangaListSetters({
  topManga,
  topManhwa,
  topManhua,
}: {
  topManga: (MangaDetails | undefined)[];
  topManhwa: (MangaDetails | undefined)[];
  topManhua: (MangaDetails | undefined)[];
}) {
  const setTopManga = useComicStore((state) => state.setTopManga);

  const setTopManhwa = useComicStore((state) => state.setTopManhwa);

  const setTopManhua = useComicStore((state) => state.setTopManhua);

  useEffect(() => {
    setTopManga(topManga);
    setTopManhwa(topManhwa);
    setTopManhua(topManhua);
  }, []);
}
