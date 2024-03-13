import topManga from "../../../mockData/topManga.json";
import { MangaSummary } from "../models/manga";
import MangaCard from "./MangaCard";

const CardsCarousel = () => {
  if (!topManga?.["30"]) {
    return <h1> No Manga to display</h1>;
  }

  const topMangaList: MangaSummary[] = topManga["30"] as MangaSummary[];

  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 h-80 flex gap-2">
      {topMangaList.slice(0, 15).map((manga) => (
        <MangaCard cardInfo={manga} />
      ))}
    </div>
  );
};

export default CardsCarousel;
