const SearchButton = ({
  buttonRef,
  handleSearch,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleSearch: () => void;
}) => {
  return (
    <button
      ref={buttonRef}
      onClick={handleSearch}
      className="btn bg-secondary-color w-24 my-5"
    >
      Search
    </button>
  );
};

export default SearchButton;
