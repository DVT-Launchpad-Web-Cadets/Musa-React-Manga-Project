import { MangaDetails } from "../../../models/mangaDetails";
import TopMangas from "./TopMangas";
import { useMangaListSetters } from "../customHooks/useMangaListSetters";

const BottomContainer = ({
  topManga,
  topManhwa,
  topManhua,
}: {
  topManga: (MangaDetails | undefined)[];
  topManhwa: (MangaDetails | undefined)[];
  topManhua: (MangaDetails | undefined)[];
}) => {
  useMangaListSetters({ topManga, topManhwa, topManhua });

  return (
    <div className="w-full absolute z-40 top-96 rounded-t-2xl bg-gradient-to-tl from-primary-color via-gradient-color to-primary-color flex flex-col grow pb-5 md:rounded-none md:block md:z-0 md:top-[730px] md:bg-none">
      <TopMangas headerTitle="Top Manga" type="manga" />
      <TopMangas headerTitle="Top Manhwa" type="manhwa" />
      <TopMangas headerTitle="Top Manhua" type="manhua" />
    </div>
  );
};

export default BottomContainer;
