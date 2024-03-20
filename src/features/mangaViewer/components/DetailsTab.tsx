import { MangaDetails } from "../../../models/mangaDetails";
import Description from "./Description";
import GenreList from "./GenreList";

const DetailsTab = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  return (
    <div className="pt-12 h-full px-6 text-lg font-semibold flex flex-col gap-5 grow-0 overflow-auto">
      <GenreList mangaDetails={mangaDetails} />
      <Description mangaDetails={mangaDetails} />
    </div>
  );
};

export default DetailsTab;
