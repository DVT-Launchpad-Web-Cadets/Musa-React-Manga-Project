import { useQuery } from "@tanstack/react-query";
import { MangaDetails } from "../../../models/mangaDetails";
import ChapterList from "./ChapterList";
import { getComicChapters } from "../../../sharedAPI.ts/apiQueries";

const ChaptersTab = ({ mangaDetails }: { mangaDetails: MangaDetails }) => {
  const { isPending, data, isError } = useQuery({
    queryKey: ["comicChapter", mangaDetails?.comic?.hid],
    queryFn: () => getComicChapters(mangaDetails?.comic?.hid),
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center grow">
        <span className="loading loading-dots loading-lg text-secondary-color"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <h1 className="h-full flex items-center justify-center">No manga</h1>
    );
  }

  return (
    <div className="grow-0 overflow-auto">
      <ChapterList chapters={data} />
    </div>
  );
};

export default ChaptersTab;
