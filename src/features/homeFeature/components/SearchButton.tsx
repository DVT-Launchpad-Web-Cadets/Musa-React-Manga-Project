import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <Link to="/search/quickSearch">
      <div className="absolute top-8 right-5 z-30  rounded-full w-fit p-2 bg-button-background brightness-150 text-lg  ">
        <IoIosSearch />
      </div>
    </Link>
  );
};

export default SearchButton;
