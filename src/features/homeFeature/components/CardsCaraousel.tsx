import { MangaDetails } from "../../../models/mangaDetails";
import MangaCard from "./MangaCard";

const CardsCarousel = ({ topMangaList }: { topMangaList: (MangaDetails | undefined)[] }) => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 h-80 flex gap-2">
      {topMangaList?.slice(0, 15).map((manga) => (
        <MangaCard key={manga?.comic?.slug} cardInfo={manga} />
      ))}
    </div>
  );
};

export default CardsCarousel;
