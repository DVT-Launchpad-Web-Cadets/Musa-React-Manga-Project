import { MangaDetails } from "../../models/mangaDetails";
import mangaDetails from "../../mockData/mangaDetails.json";

const MangaViewer = () => {
  const details = mangaDetails as MangaDetails;
  return (
    <>
      <div className={`h-full w-full brightness-50`}>
        <img
          className="w-full h-full object-cover object-top"
          src={`https://meo3.comick.pictures/${
            mangaDetails.comic.md_covers.length > 1
              ? mangaDetails.comic.md_covers[1].b2key
              : mangaDetails.comic.md_covers[0].b2key
          }`}
          alt=""
        />
      </div>St

      <div className="h-[80%] w-full absolute z-50 bottom-0 bg-gradient-to-t from-primary-color from-70%"></div>
    </>
  );
};

export default MangaViewer;
