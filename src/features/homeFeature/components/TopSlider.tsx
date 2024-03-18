import { MangaSummary } from "../../../models/topManga";
import TopSliderItem from "./TopSliderItem";

const TopSlider = ({ topSliderManga }: { topSliderManga: MangaSummary[] }) => {
  return (
    <div className="w-full h-[46%] carousel carousel-center relative bg-primary-text-color">
      {topSliderManga ? (
        <>
          {topSliderManga?.slice(0, 10).map((manga) => (
            <TopSliderItem key={manga.slug} mangaInfo={manga} />
          ))}
        </>
      ) : (
        <h1>No manga to display</h1>
      )}
    </div>
  );
};

export default TopSlider;
