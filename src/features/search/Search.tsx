import { Outlet } from "react-router-dom";
import SearchInput from "./components/SearchInput";

const Search = () => {
  return (
    <div className="h-full w-full bg-primary-color flex flex-col">
      <SearchInput />
      <Outlet />
    </div>
  );
};

export default Search;
