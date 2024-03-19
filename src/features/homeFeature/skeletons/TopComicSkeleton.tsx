import MangaListHeader from "../components/MangaListHeader";
import CarouselSkeleton from "./CarouselSkeleton";

const TopComicSkeleton = () => {
  return (
    <div className="py-8 h-80">
      <MangaListHeader headerTitle="Top mangas" />
      <CarouselSkeleton />
    </div>
  );
};

export default TopComicSkeleton;
