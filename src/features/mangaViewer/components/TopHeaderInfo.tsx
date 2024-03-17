import { FaFlag, FaHeart, FaStar } from "react-icons/fa";
import { MangaDetails } from "../../../models/mangaDetails";
import formatFollowers, { getMangaStatus } from "../../../utils/utils";

const TopHeaderInfo = ({ mangaInfo }: { mangaInfo: MangaDetails }) => {
  return (
    <div className="w-full flex flex-col gap-2 flex-1 h-full">
      <h1 className="text-text-primary-color text-2xl font-semibold h-fit line-clamp-5">
        {mangaInfo.comic && mangaInfo.comic.title
          ? mangaInfo.comic.title
          : "Comic Title"}
      </h1>
      <p className="text-sm font-thin">by {mangaInfo.authors[0].name}</p>
      <span className="flex text-sm font-light items-center gap-4">
        <FaFlag className="text-icon-color " />
        <p>
          {mangaInfo.comic && mangaInfo.comic.status
            ? getMangaStatus(mangaInfo.comic.status)
            : "Unknown Title"}
        </p>
      </span>
      <span className="flex text-xl font-light items-center gap-4">
        <span className="flex gap-2 items-center">
          <FaHeart />
          <p>
            {mangaInfo.comic && mangaInfo.comic.user_follow_count
              ? formatFollowers(mangaInfo.comic.user_follow_count)
              : 0}
          </p>
        </span>
        <span className="flex gap-2 items-center">
          <FaStar />
          <p>
            {mangaInfo.comic && mangaInfo.comic.follow_rank
              ? formatFollowers(mangaInfo.comic.follow_rank)
              : 0}
          </p>
        </span>
      </span>
    </div>
  );
};

export default TopHeaderInfo;
