import chapters from "../../../mockData/chapters.json";
import ChapterCard from "./ChapterCard";

const ChapterList = () => {
  return (
    <div className="py-4 px-4 flex flex-col gap-3">
      {chapters?.chapters?.map((chapter) => (
        <ChapterCard key={chapter.hid} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChapterList;
