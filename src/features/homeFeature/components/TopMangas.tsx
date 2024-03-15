import { MangaSummary } from "../../../models/topManga";
import CardsCarousel from "./CardsCaraousel";
import MangaListHeader from "./MangaListHeader";

const TopMangas = ({ topManga }: { topManga: MangaSummary[] }) => {
  return (
    <div className="py-8">
      <MangaListHeader headerTitle="Top mangas" />
      <CardsCarousel topMangaList={topManga} />
    </div>
  );
};

export default TopMangas;
