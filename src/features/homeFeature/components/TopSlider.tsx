import topManga from "../../../mockData/topManga.json";
import { MangaSummary } from "../models/manga";
import TopSliderDetails from "./TopSliderDetails";

const TopSlider = () => {
  if (!topManga?.["7"]) {
    return <h1> No Manga to display</h1>;
  }

  const topSliderManga: MangaSummary[] = topManga["7"] as MangaSummary[];

  // box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  // shadow-[0]
  return (
    <div className="w-full h-[46%] carousel carousel-center relative bg-primary-text-color">
      {topSliderManga ? (
        <>
          {topSliderManga.slice(0, 10).map((manga) => (
            <div className="carousel-item w-full">
              <div className="absolute shadow-3xl w-full h-full z-20"></div>
              <img
                src={`https://meo3.comick.pictures/${manga.md_covers[0].b2key}`}
                className="w-full object-cover object-top"
                alt={manga.title}
              />
              <TopSliderDetails
                title={manga.title}
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
