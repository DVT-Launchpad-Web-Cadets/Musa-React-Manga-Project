import { MangaDetails } from "../../models/mangaDetails";
import mangaDetails from "../../mockData/mangaDetails.json";
import TopHeader from "./components/TopHeader";
import BottomDetails from "./components/BottomDetails";
import LoadFail from "../../sharedComponents/LoadFail";

const MangaViewer = () => {
  const details =  mangaDetails as MangaDetails;

  if (!details) return <LoadFail />;

  return (
    <>
      <div className="h-full w-full relative">
        <img
          className="w-full h-full object-cover object-top brightness-50 "
          src={`https://meo3.comick.pictures/${
            details.comic.md_covers.length > 1
              ? details?.comic.md_covers[1]?.b2key
              : details?.comic.md_covers[0]?.b2key
          }`}
          alt=""
        />
        <div className="h-[80%] w-full absolute z-40 bottom-0 bg-gradient-to-t from-primary-color from-20% via-gradient-color via-85%   "></div>
        <div className="absolute z-50 top-0 w-full h-full flex flex-col">
          <TopHeader mangaInfo={details} />
          <BottomDetails mangaInfo={details} />
        </div>
      </div>
    </>
  );
};

export default MangaViewer;
