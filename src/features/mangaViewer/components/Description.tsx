import { useState } from "react";
import { MangaDetails } from "../../../models/mangaDetails";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Description = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  const [showMore, setShowMore] = useState(false);
  let isOverflowing = false;
  if (mangaDetails?.comic?.desc?.length > 280) {
    isOverflowing = true;
  }
  const [isOverFlowing] = useState(isOverflowing);

  return (
    <div className="flex flex-col gap-3">
      <h1>Description</h1>
      <p className={`gap-6 text-sm font-thin  overflow-hidden `}>
        {!showMore
          ? mangaDetails?.comic?.desc?.slice(0, 280)
          : mangaDetails?.comic?.desc}
        {!showMore ? "..." : ""}
      </p>
      {isOverFlowing ? (
        <div
          onClick={() => setShowMore(!showMore)}
          className="text-sm self-start text-secondary-color"
        >
          {!showMore ? (
            <span className="flex items-center gap-1">
              show more <IoIosArrowDown />
            </span>
          ) : (
            <span className="flex items-center gap-1">
              show less <IoIosArrowUp />
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Description;
