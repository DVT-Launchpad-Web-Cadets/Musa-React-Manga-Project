import BackButton from "../../../sharedComponents/BackButton";

const ListHeader = ({ title }: { title: string }) => {
  return (
    <div className=" w-full fixed h-28 bg-search-header-color py-8 px-7 flex items-center justify-start">
      <BackButton />
      <h1 className="text-xl font-semibold justify-self-center text-center absolute left-[40%]">
        {title}
      </h1>
    </div>
  );
};

export default ListHeader;
