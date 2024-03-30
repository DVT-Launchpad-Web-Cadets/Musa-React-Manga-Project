import SearchFilters from "./SearchFilters";

const QuickSearch = () => {
  return (
    <div className="grow py-32">
      <h1 className="text-lg font-semibold pt-5  px-4">Quick Search</h1>
      <SearchFilters />
    </div>
  );
};

export default QuickSearch;
