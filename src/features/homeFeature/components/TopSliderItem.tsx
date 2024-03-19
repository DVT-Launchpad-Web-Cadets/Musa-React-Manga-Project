import { Link } from "react-router-dom";
import TopSliderDetails from "./TopSliderDetails";
import { MangaDetails } from "../../../models/mangaDetails";

const TopSliderItem = ({
  mangaInfo,
}: {
  mangaInfo: MangaDetails | undefined;
}) => {
  return (
    <div className="carousel-item w-full">
      <Link to="/manga">
        <div className="absolute shadow-slider w-full h-full z-20"></div>
        <img
          src={`https://meo3.comick.pictures/${mangaInfo?.comic.md_covers[0]?.b2key}`}
          className="w-full object-cover object-top brightness-50"
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
