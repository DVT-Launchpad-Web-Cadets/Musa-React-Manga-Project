import CardsCarousel from "./CardsCaraousel";
import MangaListHeader from "./MangaListHeader";

const TopMangas = ({
  headerTitle,
  type,
}: {
  headerTitle: string;
  type: string;
}) => {
  return (
    <div className="pt-12">
      <MangaListHeader headerTitle={headerTitle} />
      <CardsCarousel comicType={type} />
    </div>
  );
};

export default TopMangas;
