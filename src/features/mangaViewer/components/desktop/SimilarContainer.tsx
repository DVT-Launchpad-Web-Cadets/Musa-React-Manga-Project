import { MangaDetails } from "../../../../models/mangaDetails";
import SimilarTab from "../SimilarTab";

const SimilarContainer = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  return (
    <div className="bg-primary-color h-full rounded-2xl w-full grow-0 flex flex-col">
      <div className="py-5 mx-5 border-b-[1px]">
        <h1 className="text-2xl font-bold">Similar</h1>
      </div>
      <div className="overflow-auto my-5">
        <SimilarTab recommendations={mangaDetails?.comic?.recommendations} />
      </div>
    </div>
  );
};

export default SimilarContainer;
