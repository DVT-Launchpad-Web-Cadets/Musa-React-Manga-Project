import { MangaSummary } from "../../../models/topManga";
import TopSliderDetails from "./TopSliderDetails";

const TopSliderItem = ({ mangaInfo }: { mangaInfo: MangaSummary }) => {
  return (
    <div className="carousel-item w-full">
      <div className="absolute shadow-slider w-full h-full z-20"></div>
      <img
        src={`https://meo3.comick.pictures/${mangaInfo?.md_covers[0]?.b2key}`}
        className="w-full object-cover object-top brightness-50"
        alt={mangaInfo?.title}
      />
      <TopSliderDetails
        title={mangaInfo?.title}
        followerCount={55500}
        artist="Naoya Tajimi"
      />
    </div>
  );
};

export default TopSliderItem;
