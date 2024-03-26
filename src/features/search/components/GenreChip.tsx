const GenreChip = ({
  genre,
  isChecked,
}: {
  genre: string;
  isChecked: boolean;
}) => {
  if (isChecked) {
    return (
      <div className="rounded-full flex items-center gap-2 h-fit px-3 py-1 bg-white cursor-pointer text-icon-color">
        <p className="text-sm font-semibold text-primary-color ">{genre}</p>
      </div>
    );
  }

  return (
    <div className="rounded-full flex items-center gap-2 h-fit px-3 py-1 bg-chip-color cursor-pointer text-icon-color">
      <p className="text-sm font-semibold text-primary-text-color ">{genre}</p>
    </div>
  );
};

export default GenreChip;
