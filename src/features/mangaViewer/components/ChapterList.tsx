import { Chapters } from "../../../models/chapters";
import { useComicStore } from "../../../state/store";
import ChapterCard from "./ChapterCard";

const ChapterList = ({ chapters }: { chapters: Chapters | undefined }) => {
  const setCurrentChapters = useComicStore((state) => state.setCurrentChapters);
  setCurrentChapters(chapters);
  return (
    <div className="py-4 px-4 flex flex-col gap-3">
      {chapters?.chapters?.map((chapter) => (
        <ChapterCard key={chapter.hid} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChapterList;
