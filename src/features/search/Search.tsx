import AdvancedSearch from "./components/AdvancedSearch";
import SearchInput from "./components/SearchInput";

const Search = () => {
  return (
    <div className="h-full w-full bg-primary-color flex flex-col">
      <SearchInput />
      <div className="grow">
        <h1 className="text-lg font-semibold pt-5  px-4">Quick Search</h1>
        <AdvancedSearch />
      </div>
    </div>
  );
};

export default Search;
