import { MangaSummary } from "../../../models/topManga";
import TopMangas from "./TopMangas";

const BottomContainer = ({ topManga }: { topManga: MangaSummary[] }) => {
  return (
    <div className="h-[57%] w-full absolute z-40 bottom-0 rounded-t-lg bg-gradient-to-tl from-primary-color via-gradient-color to-primary-color">
      <TopMangas topManga={topManga} />
    </div>
  );
};

export default BottomContainer;
