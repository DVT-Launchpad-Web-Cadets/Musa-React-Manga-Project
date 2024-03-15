import { FaHeart } from "react-icons/fa";
import formatFollowers from "../../../utils/utils";

const TopSliderDetails = ({
  title,
  followerCount,
  artist,
}: {
  title: string;
  followerCount: number;
  artist: string;
}) => {
  const formattedFollowerCount = formatFollowers(followerCount);
  return (
    <div className="absolute px-4 py-12  bottom-0 w-full flex flex-col gap-1 z-30">
      <p className="text-xs truncate">{artist}</p>
      <p className="text-2xl font-semibold text-nowrap truncate">{title}</p>
      <span className="flex items-center gap-1">
        <FaHeart />
        <p className="font-light text-sm">{formattedFollowerCount}</p>
      </span>
    </div>
  );
};

export default TopSliderDetails;
