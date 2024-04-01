import { MangaDetails } from "../../../../models/mangaDetails";
import DetailsTab from "../DetailsTab";

const DetailsContainer = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  return (
    <div className="bg-primary-color rounded-2xl w-full  grow-0 flex flex-col">
      <div className="py-5 mx-5 border-b-[1px]">
        <h1 className="text-2xl font-bold">Details</h1>
      </div>
      <div>
        <DetailsTab mangaDetails={mangaDetails} />
      </div>
    </div>
  );
};

export default DetailsContainer;
