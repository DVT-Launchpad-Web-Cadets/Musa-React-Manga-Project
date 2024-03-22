import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/store";
import TopMangas from "./TopMangas";

const BottomContainer = ({
  topManga,
  topManhwa,
  topManhua,
}: {
  topManga: (MangaDetails | undefined)[];
  topManhwa: (MangaDetails | undefined)[];
  topManhua: (MangaDetails | undefined)[];
}) => {
  console.log("manga", topManga);
  console.log("manhwa", topManhwa);
  console.log("manhua", topManhua);

  const setTopManga = useComicStore((state) => state.setTopManga);
  setTopManga(topManga);

  const setTopManhwa = useComicStore((state) => state.setTopManhwa);
  setTopManhwa(topManhwa);

  const setTopManhua = useComicStore((state) => state.setTopManhua);
  setTopManhua(topManhua);

  return (
    <div className="w-full absolute z-40 top-96 rounded-t-2xl bg-gradient-to-tl from-primary-color via-gradient-color to-primary-color flex flex-col grow pb-5">
      <TopMangas headerTitle="Top Manga" type="manga" />
      <TopMangas headerTitle="Top Manhwa" type="manhwa" />
      <TopMangas headerTitle="Top Manhua" type="manhua" />
    </div>
  );
};

export default BottomContainer;
