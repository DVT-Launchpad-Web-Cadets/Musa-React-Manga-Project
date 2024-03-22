import { Link } from "react-router-dom";
import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/store";

const MangaListHeader = ({ headerTitle }: { headerTitle: string }) => {
  let topMangaList: (MangaDetails | undefined)[] | null = null;

  if (headerTitle === "Top Manga")
    topMangaList = useComicStore((state) => state.topManga);

  if (headerTitle === "Top Manhwa")
    topMangaList = useComicStore((state) => state.topManhwa);

  if (headerTitle === "Top Manhua")
    topMangaList = useComicStore((state) => state.topManhua);

  return (
    <div className="flex justify-between px-4 pb-1">
      <p className="text-xl font-semibold">{headerTitle}</p>
      <Link to="/topmanga" state={{ topMangaList, headerTitle }}>
        <p className="text-text-botton-color">see all</p>
      </Link>
    </div>
  );
};

export default MangaListHeader;
