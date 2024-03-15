import { FaFlag, FaHeart, FaStar } from "react-icons/fa";
import { MangaDetails } from "../../../models/mangaDetails";
import formatFollowers, { getMangaStatus } from "../../../utils/utils";

const TopHeaderInfo = ({ mangaInfo }: { mangaInfo: MangaDetails }) => {
  return (
    <div className="w-full flex flex-col gap-2 flex-1 h-full">
      <h1 className="text-text-primary-color text-2xl font-semibold h-fit line-clamp-5">
        {mangaInfo.comic.title}
      </h1>
      <p className="text-sm font-thin">by {mangaInfo.authors[0].name}</p>
      <span className="flex text-sm font-light items-center gap-4">
        <FaFlag className="text-icon-color " />
        <p>{getMangaStatus(mangaInfo.comic.status)}</p>
      </span>
      <span className="flex text-xl font-light items-center gap-4">
        <span className="flex gap-2 items-center">
          <FaHeart />
          <p>{formatFollowers(mangaInfo.comic.user_follow_count)}</p>
        </span>
        <span className="flex gap-2 items-center">
          <FaStar />
          <p>{formatFollowers(mangaInfo.comic.follow_rank)}</p>
        </span>
      </span>
    </div>
  );
};

export default TopHeaderInfo;
