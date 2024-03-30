import { FaFlag, FaFlagCheckered } from "react-icons/fa";

const StatusChip = ({
  status,
  icon,
  isChecked,
}: {
  status: string;
  icon?: string;
  isChecked: boolean;
}) => {
  if (isChecked) {
    return (
      <div className="rounded-full flex items-center gap-2 h-fit px-3 py-1 bg-white cursor-pointer text-card-follower-count">
        {icon === "ongoing" ? (
          <FaFlag />
        ) : icon === "completed" ? (
          <FaFlagCheckered />
        ) : null}
        <p className="text-sm font-semibold text-primary-color ">{status}</p>
      </div>
    );
  }

  return (
    <div className="rounded-full flex items-center gap-2 h-fit px-3 py-1 bg-chip-color cursor-pointer text-icon-color">
      {icon === "ongoing" ? (
        <FaFlag />
      ) : icon === "completed" ? (
        <FaFlagCheckered />
      ) : null}
      <p className="text-sm font-thin text-primary-text-color ">{status}</p>
    </div>
  );
};

export default StatusChip;
