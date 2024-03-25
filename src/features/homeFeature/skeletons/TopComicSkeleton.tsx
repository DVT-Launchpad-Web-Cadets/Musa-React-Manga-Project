import MangaListHeader from "../components/MangaListHeader";
import CarouselSkeleton from "./CarouselSkeleton";

const TopComicSkeleton = ({headerTitle} : {headerTitle: string}) => {
  return (
    <div className="pt-9">
      <MangaListHeader headerTitle={headerTitle} />
      <CarouselSkeleton />
    </div>
  );
};

export default TopComicSkeleton;
