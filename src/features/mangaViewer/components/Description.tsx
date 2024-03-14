import { MangaDetails } from "../../../models/mangaDetails";

const Description = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Description</h1>
      <div className="flex gap-6 text-sm font-thin ">
        {mangaDetails.comic.desc}
      </div>
    </div>
  );
};

export default Description;
