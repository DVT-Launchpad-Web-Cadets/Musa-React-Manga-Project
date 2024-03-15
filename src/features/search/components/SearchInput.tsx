import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const SearchInput = () => {
  return (
    <div className="h-28 bg-search-header-color py-8 px-4 flex gap-3 items-center">
      <label className="input input-bordered rounded-full w-96 flex items-center gap-2 bg-search-color">
        <input type="text" className="grow" placeholder="Search" />
        <IoIosSearch />
      </label>
      <div className="rounded-full w-fit p-2 bg-search-color brightness-150 text-lg">
        <RxCross2 />
      </div>
    </div>
  );
};

export default SearchInput;
