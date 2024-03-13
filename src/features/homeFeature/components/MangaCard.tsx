import { FaHeart } from "react-icons/fa";
import { MangaSummary } from "../models/manga";
import formatFollowers from "../../utilities/utility";

const MangaCard = ({ cardInfo }: { cardInfo: MangaSummary }) => {
  const formattedFollowerCount = formatFollowers(55000);
  return (
    <div className="carousel-item flex flex-col h-full w-40">
      <img
        src={`https://meo3.comick.pictures/${cardInfo.md_covers[0].b2key}`}
        className="w-full h-5/6 object-cover object-top rounded-2xl"
        alt={cardInfo.title}
      />
      <div className="py-1">
        <p className="truncate">{cardInfo.title}</p>
        <span className="text-card-follower-count flex gap-1 items-center">
          <FaHeart />
          <p className="font-light text-sm">{formattedFollowerCount}</p>
        </span>
      </div>
    </div>
  );
};

export default MangaCard;
