import { Chapters } from "../../../models/chapters";
import { useComicStore } from "../../../state/comicStore";
import { useReadStore } from "../../../state/readStore";
import ChapterCard from "./ChapterCard";

const ChapterList = ({ chapters }: { chapters: Chapters | undefined }) => {
  const setCurrentChapters = useComicStore((state) => state.setCurrentChapters);
  setCurrentChapters(chapters);
  const currentComicScans = useReadStore((state) => state.currentComicScans);
  return (
    <div className="py-4 px-4 flex flex-col gap-3">
      {chapters?.chapters
        ?.filter((chapter) => {
          if (!currentComicScans?.length) {
            return true;
          }

          return currentComicScans.includes(
            chapter.md_chapters_groups?.[0]?.md_groups?.slug
          );
        })
        .map((chapter) => (
          <ChapterCard key={chapter.hid} chapter={chapter} />
        ))}
    </div>
  );
};

export default ChapterList;
