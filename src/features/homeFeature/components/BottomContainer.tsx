import { MangaDetails } from "../../../models/mangaDetails";
import { useComicStore } from "../../../state/store";
import TopMangas from "./TopMangas";

const BottomContainer = ({
  topManga,
}: {
  topManga: (MangaDetails | undefined)[];
}) => {
  const setTopManga = useComicStore((state) => state.setTopManga);
  setTopManga(topManga);

  return (
    <div className="h-[57%] w-full absolute z-40 bottom-0 rounded-t-lg bg-gradient-to-tl from-primary-color via-gradient-color to-primary-color">
      <TopMangas />
    </div>
  );
};

export default BottomContainer;
