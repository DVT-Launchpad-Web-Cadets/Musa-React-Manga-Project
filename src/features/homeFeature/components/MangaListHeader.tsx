const MangaListHeader = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div className="flex justify-between px-4 pb-1">
      <p className="text-xl font-semibold">{headerTitle}</p>
      <p className="text-text-botton-color">see all</p>
    </div>
  );
};

export default MangaListHeader;
