import BackButton from "../../../sharedComponents/BackButton";
import TopHeaderInfo from "./TopHeaderInfo";
import { useComicStore } from "../../../state/comicStore";

const TopHeader = () => {
  const mangaInfo = useComicStore((state) => state.currentComic);
  return (
    <div className="pt-10 pb-11 px-4 flex flex-col gap-4 w-full h-[45%]">
      <BackButton />
      <div className="flex gap-4 w-full ">
        <div className="w-auto flex-1 object-cover object-top">
          <img
            src={`https://meo3.comick.pictures/${mangaInfo?.comic.md_covers[0]?.b2key}`}
            alt=""
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
        <TopHeaderInfo />
      </div>
    </div>
  );
};

export default TopHeader;
