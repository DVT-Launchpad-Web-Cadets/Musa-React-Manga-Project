import BackButton from "../../../sharedComponents/BackButton";

const ListHeader = ({ title }: { title: string }) => {
  return (
    <div className=" w-full fixed h-28 bg-search-header-color py-8 px-4 flex items-center">
      <BackButton />
      <h1 className="text-xl font-semibold self-center">{title}</h1>
    </div>
  );
};

export default ListHeader;
