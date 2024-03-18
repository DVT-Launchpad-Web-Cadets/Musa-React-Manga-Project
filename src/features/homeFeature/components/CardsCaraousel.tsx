import { MangaSummary } from "../../../models/topManga";
import MangaCard from "./MangaCard";

const CardsCarousel = ({ topMangaList }: { topMangaList: MangaSummary[] }) => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 h-80 flex gap-2">
      {topMangaList?.slice(0, 15).map((manga) => (
        <MangaCard key={manga.slug} cardInfo={manga} />
      ))}
    </div>
  );
};

export default CardsCarousel;
