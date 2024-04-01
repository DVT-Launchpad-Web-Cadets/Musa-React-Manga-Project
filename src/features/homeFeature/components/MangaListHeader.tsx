import { Link } from "react-router-dom";
import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/comicStore";

const MangaListHeader = ({ headerTitle }: { headerTitle: string }) => {
  let topMangaList: (MangaDetails | undefined)[] | null = null;

  switch (headerTitle) {
    case "Top Manga":
      topMangaList = useComicStore((state) => state.topManga);
      break;
    case "Top Manhwa":
      topMangaList = useComicStore((state) => state.topManhwa);
      break;
    case "Top Manhua":
      topMangaList = useComicStore((state) => state.topManhua);
      break;
    default:
      return <h1 className="text-xl font-semibold">No Manga available</h1>;
  }

  return (
    <div className="flex justify-between px-6 pb-1">
      <p className="text-xl font-semibold">{headerTitle}</p>
      <Link
        to="/topmanga"
        state={{ topMangaList, headerTitle }}
        aria-label="Navigate to the manga view"
      >
        <p className="text-text-botton-color">see all</p>
      </Link>
    </div>
  );
};

export default MangaListHeader;
