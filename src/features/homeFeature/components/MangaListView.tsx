import { MangaSummary } from "../../../models/topManga";
import MangaCard from "./MangaCard";
import topManga from "../../../mockData/topManga.json";
import ListHeader from "./ListHeader";

const MangaListView = () => {
  const mangaList = topManga["30"] as MangaSummary[];
  return (
    <div className="flex flex-col">
      <ListHeader />
      <div className="py-32 px-4 grid grid-cols-2 gap-y-8 place-items-center grow-0 overflow-auto bg-gradient-to-t from-primary-color to-gradient-color">
        {mangaList?.slice(0, 6).map((manga) => (
          <MangaCard key={manga.slug} cardInfo={manga} />
        ))}
      </div>
    </div>
  );
};

export default MangaListView;
