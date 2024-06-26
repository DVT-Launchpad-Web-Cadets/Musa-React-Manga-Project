import { FaFlag, FaHeart, FaStar } from "react-icons/fa";
import formatFollowers, { getMangaStatus } from "../../../../utils/utils";
import { useComicStore } from "../../../../state/comicStore";

const HeaderDetails = () => {
  const mangaInfo = useComicStore((state) => state.currentComic);
  return (
    <div className="w-full flex flex-col gap-2 flex-1 h-fit">
      <h1 className="text-2xl font-semibold h-fit line-clamp-5">
        {mangaInfo?.comic?.title ?? "Comic Title"}
      </h1>
      <p className="text-sm font-thin">
        by {mangaInfo?.authors?.[0]?.name ?? "Unknown"}
      </p>
      <span className="flex text-sm font-light items-center gap-4">
        <FaFlag className="text-icon-color " />
        <p>{getMangaStatus(mangaInfo?.comic?.status) ?? "Unknown Title"}</p>
      </span>
      <span className="flex text-xl font-light items-center gap-4">
        <span className="flex gap-2 items-center">
          <FaHeart />
          <p>{formatFollowers(mangaInfo?.comic?.user_follow_count) ?? 0}</p>
        </span>
        <span className="flex gap-2 items-center">
          <FaStar />
          <p>{formatFollowers(mangaInfo?.comic?.follow_rank) ?? 0}</p>
        </span>
      </span>
    </div>
  );
};

export default HeaderDetails;
