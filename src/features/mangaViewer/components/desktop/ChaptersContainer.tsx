import { useQuery } from "@tanstack/react-query";
import ChapterList from "../ChapterList";
import { getComicChapters } from "../../../../sharedAPI.ts/apiQueries";
import { MangaDetails } from "../../../../models/mangaDetails";

const ChapterContainer = ({
  mangaDetails,
}: {
  mangaDetails: MangaDetails | null;
}) => {
  const { isPending, data, isError } = useQuery({
    queryKey: ["comicChapter", mangaDetails?.comic?.hid],
    queryFn: () => getComicChapters(mangaDetails?.comic?.hid),
  });

  if (isError) {
    return (
      <h1 className="h-full flex items-center justify-center">No manga</h1>
    );
  }
  return (
    <div className="bg-primary-color rounded-2xl w-full grow-0 flex flex-col">
      <div className="py-5 mx-5 border-b-[1px]">
        <h1 className="text-2xl font-bold">Chapters</h1>
      </div>
      {isPending && (
        <div className="flex justify-center items-center grow">
          <span className="loading loading-dots loading-lg text-secondary-color"></span>
        </div>
      )}
      {!isPending && data && (
        <div className="overflow-auto grow-0 my-4">
          <ChapterList chapters={data} />
        </div>
      )}
    </div>
  );
};

export default ChapterContainer;
