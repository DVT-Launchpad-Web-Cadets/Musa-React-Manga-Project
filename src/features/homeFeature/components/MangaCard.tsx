import { FaHeart } from "react-icons/fa";
import { MangaSummary } from "../../../models/topManga";
import formatFollowers from "../../../utils/utils";

const MangaCard = ({ cardInfo }: { cardInfo: MangaSummary }) => {
  const formattedFollowerCount = formatFollowers(55000);
  return (
    <div className="carousel-item flex flex-col h-full w-40">
      <img
        src={`https://meo3.comick.pictures/${cardInfo?.md_covers[0]?.b2key}`}
        className="w-full h-5/6 object-cover object-top rounded-2xl"
        alt={cardInfo?.title}
      />
      <div className="py-1">
        <p className="line-clamp-1 hover:line-clamp-none">
          {cardInfo.title ? cardInfo.title : "Unknown Title"}
        </p>
        <span className="text-card-follower-count flex gap-1 items-center">
          <FaHeart />
          <p className="font-light text-sm">{formattedFollowerCount}</p>
        </span>
      </div>
    </div>
  );
};

export default MangaCard;
