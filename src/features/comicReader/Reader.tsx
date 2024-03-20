import { useQuery } from "@tanstack/react-query";
import comic from "../../mockData/chapter.json";
import { Comic } from "../../models/chapterComic";
import BackButton from "../../sharedComponents/BackButton";
import { getChapterInfo } from "../../sharedAPI.ts/apiQueries";
import { useLoaderData, useParams } from "react-router-dom";

// TODO : Fix this
const Reader = () => {
  const { chapterHID } = useParams();
  console.log(chapterHID);

  const { isPending, data, isError } = useQuery({
    queryKey: ["reader", chapterHID],
    queryFn: () => getChapterInfo(chapterHID),
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center grow h-full bg-primary-color">
        <span className=" loading loading-dots loading-lg text-secondary-color"></span>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-primary-color">
      <div className="fixed w-full h-14 flex pl-4 items-center top-0 left-0 bg-header-background">
        <BackButton />
      </div>
      {data?.chapter?.md_images?.map((comic) => (
        <img
          key={comic.b2key}
          src={`https://meo3.comick.pictures/${comic?.b2key}`}
          className="w-full"
          alt="missing page"
        />
      ))}
    </div>
  );
};

export default Reader;
