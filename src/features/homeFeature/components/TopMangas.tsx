import CardsCarousel from "./CardsCaraousel";
import MangaListHeader from "./MangaListHeader";

const TopMangas = () => {
  return (
    <div className="py-8">
      <MangaListHeader headerTitle="Top mangas" />
      <CardsCarousel />
    </div>
  );
};

export default TopMangas;
