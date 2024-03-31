import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/comicStore";
import TopSliderItem from "./TopSliderItem";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const TopSlider = ({
  topSliderManga,
}: {
  topSliderManga: (MangaDetails | undefined)[];
}) => {
  const setTrendingManga = useComicStore((state) => state.setTrendingManga);
  setTrendingManga(topSliderManga);
  return (
    <>
      <TECarousel
        showControls
        showIndicators
        ride="carousel"
        className="h-[400px]"
      >
        <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
          {topSliderManga ? (
            <>
              {topSliderManga?.slice(0, 5).map((manga, index) => (
                <TECarouselItem
                  itemID={index + 1}
                  key={manga?.comic?.slug}
                  className="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <TopSliderItem mangaInfo={manga} />
                </TECarouselItem>
              ))}
            </>
          ) : (
            <h1>No manga to display</h1>
          )}
        </div>
      </TECarousel>
    </>
  );
};

export default TopSlider;
