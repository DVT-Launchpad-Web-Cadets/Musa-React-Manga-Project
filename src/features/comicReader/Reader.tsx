import comic from "../../mockData/chapter.json";
import { Comic } from "../../models/chapterComic";
import BackButton from "../../sharedComponents/BackButton";

const Reader = () => {
  const reader = comic as Comic;
  return (
    <div className="h-full w-full flex flex-col">
      <div className="fixed w-full h-14 flex pl-4 items-center top-0 left-0 bg-header-background">
        <BackButton />
      </div>
      {reader.chapter.md_images.map((comic) => (
        <div className="h-full">
          <img
            src={`https://meo3.comick.pictures/${comic.b2key}`}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Reader;
