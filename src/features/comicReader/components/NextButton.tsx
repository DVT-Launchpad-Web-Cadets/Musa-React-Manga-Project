import { IoIosSkipForward } from "react-icons/io";
import { NeighborChapter } from "../../../models/chapterComic";
import { Link } from "react-router-dom";

const NextButton = ({
  nextChapter,
}: {
  nextChapter: NeighborChapter | undefined;
}) => {
  return (
    <Link to={`/reader/${nextChapter?.hid}`}>
      <button className="btn w-16 h-16 btn-circle bg-secondary-color text-3xl">
        <IoIosSkipForward />
      </button>
    </Link>
  );
};

export default NextButton;
