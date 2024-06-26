import { Link } from "react-router-dom";
import { Chapter } from "../../../models/chapters";
import { FaBook } from "react-icons/fa";

const ChapterCard = ({ chapter }: { chapter: Chapter }) => {
  return (
    <Link
      to={`/reader/${chapter?.hid}`}
      aria-label="Navigate to a chapter reader"
    >
      <div className="w-full h-20 flex justify-between py-2 px-4">
        <div className="w-10 flex items-center text-2xl text-icon-color">
          <FaBook />
        </div>
        <div className="w-full max-w-36 flex flex-col gap-1">
          <h1 className="truncate">{chapter.title ?? "Unknown Title"}</h1>
          <p className="text-sm font-light">Chapter {chapter?.chap}</p>
        </div>
        <p className="text-sm">{chapter?.created_at?.slice(0, 10)}</p>
      </div>
    </Link>
  );
};

export default ChapterCard;
