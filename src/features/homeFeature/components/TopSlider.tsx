import { MangaSummary } from "../../../models/topManga";
import TopSliderDetails from "./TopSliderDetails";

const TopSlider = ({ topSliderManga }: { topSliderManga: MangaSummary[] }) => {
  return (
    <div className="w-full h-[46%] carousel carousel-center relative bg-primary-text-color">
      {topSliderManga ? (
        <>
          {topSliderManga?.slice(0, 10).map((manga) => (
            <div className="carousel-item w-full">
              <div className="absolute shadow-slider w-full h-full z-20"></div>
              <img
                src={`https://meo3.comick.pictures/${manga?.md_covers[0]?.b2key}`}
                className="w-full object-cover object-top brightness-50"
                alt={manga?.title}
              />
              <TopSliderDetails
                title={manga?.title}
                followerCount={55500}
                artist="Naoya Tajimi"
              />
            </div>
          ))}
        </>
      ) : (
        <h1>No manga to display</h1>
      )}
    </div>
  );
};

export default TopSlider;
