import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <Link to="/search/quick-search">
      <div className="absolute top-8 right-5 z-50 rounded-full w-fit p-2 bg-button-background brightness-150 text-lg md:top-3">
        <IoIosSearch />
      </div>
    </Link>
  );
};

export default SearchButton;
