import { useQuery } from "@tanstack/react-query";
import BackButton from "../../sharedComponents/BackButton";
import { getChapterInfo } from "../../sharedAPI.ts/apiQueries";
import { useNavigate, useParams } from "react-router-dom";
import PrevButton from "./components/PrevButton";
import NextButton from "./components/NextButton";
import { useComicStore } from "../../state/store";
import DisabledPrev from "./components/DisabledPrev";
import DisabledNext from "./components/DisabledNext";

const Reader = () => {
  const chapters = useComicStore((state) => state.currentChapters);
  const { chapterHID } = useParams();
  const navigate = useNavigate();

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

  if (isError) {
    return (
      <div className="h-full flex items-center justify-center">
        {" "}
        Nothing to read
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-primary-color grow">
      <div className="fixed w-full h-14 flex gap-6 pl-4 items-center top-0 left-0 bg-primary-color z-10">
        <BackButton />
        <select
          onChange={(event) =>
            navigate(`/reader/${event.target.value}`, { replace: true })
          }
          value={chapterHID}
          className="select select-ghost select-sm w-4/6 max-w-xs self-center text-xl"
        >
          {chapters?.chapters
            .filter((chapter) => chapter?.hid)
            .map((chapter) => (
              <option
                key={chapter?.hid}
                value={chapter?.hid}
                className="text-2xl"
              >
                {`${chapter?.chap} ${
                  chapter?.title?.slice(0, 30) ?? "Unknown Title"
                }`}
              </option>
            ))}
        </select>
      </div>
      <div className="absolute top-[56px]">
      {data?.chapter?.md_images?.map((comic) => (
        <img
          key={comic.b2key}
          src={`https://meo3.comick.pictures/${comic?.b2key}`}
          className="w-full"
          alt="missing page"
        />
      ))}
      </div>
      <div className="fixed bottom-0 h-24 bg-primary-color w-full flex justify-center items-center gap-20">
        {data?.prev ? (
          <PrevButton prevChapter={data?.prev} />
        ) : (
          <DisabledPrev />
        )}
        {data?.next ? (
          <NextButton nextChapter={data?.next} />
        ) : (
          <DisabledNext />
        )}
      </div>
    </div>
  );
};

export default Reader;
