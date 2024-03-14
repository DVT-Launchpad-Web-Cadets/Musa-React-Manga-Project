import { MangaDetails } from "../../../models/mangaDetails";
import TopHeaderInfo from "./TopHeaderInfo";

const TopHeader = ({ mangaInfo }: { mangaInfo: MangaDetails }) => {
  return (
    <div className="pt-20 pb-11 px-4 flex gap-4 w-full h-[45%]">
      <div className="w-auto flex-1 object-cover object-top">
        <img
          src={`https://meo3.comick.pictures/${mangaInfo.comic.md_covers[0].b2key}`}
          alt=""
          className=" w-full h-full object-cover rounded-2xl shadow-2xl"
        />
      </div>
      <TopHeaderInfo mangaInfo={mangaInfo} />
    </div>
  );
};

export default TopHeader;
