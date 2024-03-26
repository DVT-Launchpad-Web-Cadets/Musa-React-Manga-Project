const SearchButton = ({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
}) => {
  return (
    <button ref={buttonRef} className="btn bg-secondary-color w-24 my-5">
      Search
    </button>
  );
};

export default SearchButton;
