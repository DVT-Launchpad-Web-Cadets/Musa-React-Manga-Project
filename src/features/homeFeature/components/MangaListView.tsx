import MangaCard from "../../../sharedComponents/MangaCard";
import ListHeader from "./ListHeader";
import { useComicStore } from "../../../state/store";

const MangaListView = () => {
  const mangaList = useComicStore((state) => state.topManga);
  return (
    <div className="flex flex-col">
      <ListHeader />
      <div className="py-32 px-4 grid grid-cols-2 gap-y-8 place-items-center grow-0 overflow-auto bg-gradient-to-t from-primary-color to-gradient-color">
        {mangaList?.map((manga) => (
          <MangaCard key={manga?.comic?.slug} cardInfo={manga} />
        ))}
      </div>
    </div>
  );
};

export default MangaListView;
