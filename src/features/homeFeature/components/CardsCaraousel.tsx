import { useComicStore } from "../../../state/comicStore";
import MangaCard from "../../../sharedComponents/MangaCard";
import { MangaDetails } from "../../../models/mangaDetails";

const CardsCarousel = ({ comicType }: { comicType: string }) => {
  let topMangaList: (MangaDetails | undefined)[] | null = null;

  if (comicType === "manga")
    topMangaList = useComicStore((state) => state.topManga);

  if (comicType === "manhwa")
    topMangaList = useComicStore((state) => state.topManhwa);

  if (comicType === "manhua")
    topMangaList = useComicStore((state) => state.topManhua);

  return (
    <div className="carousel carousel-center p-4 space-x-4 h-[340px] flex gap-2">
      {topMangaList?.slice(0, 6).map((manga) => (
        <MangaCard key={manga?.comic?.slug} cardInfo={manga} />
      ))}
    </div>
  );
};

export default CardsCarousel;
