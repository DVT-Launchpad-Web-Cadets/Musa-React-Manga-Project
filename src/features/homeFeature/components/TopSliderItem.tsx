import { Link } from "react-router-dom";
import TopSliderDetails from "./TopSliderDetails";
import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/store";

const TopSliderItem = ({
  mangaInfo,
}: {
  mangaInfo: MangaDetails | undefined;
}) => {
  const setCurrentComic = useComicStore((state) => state.setCurrentComic);
  return (
    <div className="carousel-item w-full relative">
      <Link onClick={() => setCurrentComic(mangaInfo)} to="/manga">
        <div className="absolute shadow-slider w-full h-full z-20"></div>
        <img
          src={`https://meo3.comick.pictures/${mangaInfo?.comic.md_covers[0]?.b2key}`}
          className="w-full object-cover object-top brightness-50 overflow-clip" 
          alt={mangaInfo?.comic.title}
        />
        <TopSliderDetails
          title={mangaInfo?.comic?.title}
          followerCount={mangaInfo?.comic?.user_follow_count}
          artist="Naoya Tajimi"
        />
      </Link>
    </div>
  );
};

export default TopSliderItem;
