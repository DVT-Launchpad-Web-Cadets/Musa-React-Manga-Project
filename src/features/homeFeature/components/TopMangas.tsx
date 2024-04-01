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
    <section className="pt-9">
      <MangaListHeader headerTitle={headerTitle} />
      <CardsCarousel comicType={type} />
    </section>
  );
};

export default TopMangas;
