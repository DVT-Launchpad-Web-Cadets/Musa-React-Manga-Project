import MangaCard from "../../../sharedComponents/MangaCard";
import ListHeader from "./ListHeader";
import { useLocation } from "react-router-dom";
import { MangaDetails } from "../../../models/mangaDetails";

const MangaListView = () => {
  const { state } = useLocation();

  if (!state)
    return (
      <h1 className="flex flex-col items-center justify-center">
        No Manga to show
      </h1>
    );

  const {
    topMangaList,
    headerTitle,
  }: {
    topMangaList: (MangaDetails[] | undefined) | null;
    headerTitle: string;
  } = state;

  return (
    <div className="flex flex-col">
      <ListHeader title={headerTitle} />
      <div className="py-32 px-4 grid grid-cols-2 gap-y-8 place-items-center grow-0 overflow-auto bg-gradient-to-t from-primary-color to-gradient-color">
        {topMangaList?.map((manga) => (
          <MangaCard key={manga?.comic?.slug} cardInfo={manga} />
        ))}
      </div>
    </div>
  );
};

export default MangaListView;
