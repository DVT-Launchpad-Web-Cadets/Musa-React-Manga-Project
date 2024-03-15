import { FaFlag, FaFlagCheckered } from "react-icons/fa";

const Chip = ({ genre, icon }: { genre: string; icon?: string }) => {
  return (
    <div className="rounded-full flex items-center gap-2 h-fit px-3 py-1 bg-chip-color cursor-pointer text-icon-color">
      {icon === "ongoing" ? (
        <FaFlag />
      ) : icon === "completed" ? (
        <FaFlagCheckered />
      ) : null}
      <p className="text-sm font-thin text-primary-text-color ">{genre}</p>
    </div>
  );
};

export default Chip;
