import BackButton from "../../../sharedComponents/BackButton";

const ListHeader = () => {
  return (
    <div className=" w-full fixed h-28 bg-search-header-color py-8 px-4 flex items-center">
      <BackButton />
      <h1 className="text-xl font-semibold self-center">Top manga</h1>
    </div>
  );
};

export default ListHeader;
