import { IoIosSkipBackward } from "react-icons/io";
import { NeighborChapter } from "../../../models/chapterComic";
import { Link } from "react-router-dom";

const PrevButton = ({
  prevChapter,
}: {
  prevChapter: NeighborChapter | undefined;
}) => {
  return (
    <Link to={`/reader/${prevChapter?.hid}`} replace>
      <button className="btn w-16 h-16  btn-circle bg-secondary-color text-3xl">
        <IoIosSkipBackward />
      </button>
    </Link>
  );
};

export default PrevButton;
