import { Link } from "react-router-dom";

const MangaListHeader = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div className="flex justify-between px-4 pb-1">
      <p className="text-xl font-semibold">{headerTitle}</p>
      <Link to="/topmanga">
        <p className="text-text-botton-color">see all</p>
      </Link>
    </div>
  );
};

export default MangaListHeader;
