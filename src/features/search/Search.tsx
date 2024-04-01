import { Outlet } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import { useSearchStore } from "../../state/searchStore";

const Search = () => {
  const setisError = useSearchStore((state) => state.setIsError);
  setisError(false);
  return (
    <div className="h-full w-full bg-primary-color flex flex-col">
      <SearchInput />
      <Outlet />
    </div>
  );
};

export default Search;
