const GenreChip = ({ genre }: { genre: string }) => {
  return (
    <div className="rounded-full flex h-fit px-3 py-1 bg-chip-color">
      <p className="text-sm font-thin ">{genre}</p>
    </div>
  );
};

export default GenreChip;
