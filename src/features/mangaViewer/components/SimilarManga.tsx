import { FaHeart } from "react-icons/fa";
import formatFollowers from "../../../utils/utils";
import { Recommendation } from "../../../models/mangaDetails";
import { Link } from "react-router-dom";

const SimilarManga = ({ cardInfo }: { cardInfo: Recommendation }) => {
  return (
    <div className="carousel-item flex flex-col h-full w-40">
      <Link to="/manga">
        <img
          src={`https://meo3.comick.pictures/${cardInfo?.relates.md_covers?.[0]?.b2key}`}
          className="w-full h-5/6 object-cover object-top rounded-2xl"
          alt={cardInfo?.relates?.title}
        />
        <div className="py-1">
          <p className="line-clamp-1 hover:line-clamp-none">
            {cardInfo.relates && cardInfo.relates.title
              ? cardInfo.relates.title
              : "Unknown Title"}
          </p>
          <span className="text-card-follower-count flex gap-1 items-center">
            <FaHeart />
            <p className="font-light text-sm">{formatFollowers(55000)}</p>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SimilarManga;
