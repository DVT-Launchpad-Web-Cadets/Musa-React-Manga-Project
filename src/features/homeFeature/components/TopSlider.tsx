import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/store";
import TopSliderItem from "./TopSliderItem";

const TopSlider = ({
  topSliderManga,
}: {
  topSliderManga: (MangaDetails | undefined)[];
}) => {
  const setTrendingManga = useComicStore((state) => state.setTrendingManga);
  setTrendingManga(topSliderManga);
  return (
    <div className="w-full h-[46%] carousel carousel-center bg-primary-text-color">
      {topSliderManga ? (
        <>
          {topSliderManga?.slice(0, 10).map((manga) => (
            <TopSliderItem key={manga?.comic?.slug} mangaInfo={manga} />
          ))}
        </>
      ) : (
        <h1>No manga to display</h1>
      )}
    </div>
  );
};

export default TopSlider;
