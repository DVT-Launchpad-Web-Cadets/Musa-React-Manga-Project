import { FaHeart } from "react-icons/fa";
import formatFollowers from "../../../utils/utils";
import { Link } from "react-router-dom";
import { useSearchStore } from "../../../state/searchStore";
import { SearchResult } from "../../../models/searchResult";

const SearchCard = ({ cardInfo }: { cardInfo: SearchResult | undefined }) => {
  const setCurrentComic = useSearchStore((state) => state.setCurrentComic);

  return (
    <div className="carousel-item flex flex-col h-full w-40">
      <Link onClick={() => setCurrentComic(cardInfo)} to="/manga">
        <img
          src={`https://meo3.comick.pictures/${cardInfo?.md_covers?.[0]?.b2key}`}
          className="w-full h-64 object-cover object-top rounded-2xl"
          alt={cardInfo?.title}
        />
        <div className="py-1">
          <p className="line-clamp-1 hover:line-clamp-none">
            {cardInfo?.title ?? "Unknown Title"}
          </p>
          <span className="text-card-follower-count flex gap-1 items-center">
            <FaHeart />
            <p className="font-light text-sm">
              {formatFollowers(cardInfo?.user_follow_count)}
            </p>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
