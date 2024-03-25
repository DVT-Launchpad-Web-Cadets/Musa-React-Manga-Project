import { FaHeart } from "react-icons/fa";
import formatFollowers from "../utils/utils";
import { Link } from "react-router-dom";
import { MangaDetails } from "../models/mangaDetails";
import { useComicStore } from "../state/comicStore";

const MangaCard = ({ cardInfo }: { cardInfo: MangaDetails | undefined }) => {
  const setCurrentComic = useComicStore((state) => state.setCurrentComic);

  return (
    <div className="carousel-item flex flex-col h-full w-40">
      <Link onClick={() => setCurrentComic(cardInfo)} to="/manga">
        <img
          src={`https://meo3.comick.pictures/${cardInfo?.comic.md_covers?.[0]?.b2key}`}
          className="w-full h-64 object-cover object-top rounded-2xl"
          alt={cardInfo?.comic.title}
        />
        <div className="py-1">
          <p className="line-clamp-1 hover:line-clamp-none">
            {cardInfo?.comic?.title ?? "Unknown Title"}
          </p>
          <span className="text-card-follower-count flex gap-1 items-center">
            <FaHeart />
            <p className="font-light text-sm">
              {formatFollowers(cardInfo?.comic.user_follow_count)}
            </p>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default MangaCard;
