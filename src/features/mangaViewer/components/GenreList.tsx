import { MangaDetails } from "../../../models/mangaDetails";
import Chip from "../../../sharedComponents/Chip";

const GenreList = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Genres</h1>
      <div className="flex gap-6">
        {mangaDetails.comic.md_comic_md_genres.slice(0, 3).map((genre) => (
          <Chip genre={genre.md_genres.name} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
