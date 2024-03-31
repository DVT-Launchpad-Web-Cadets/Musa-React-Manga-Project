import { useRef } from "react";
import BackButton from "../../../../sharedComponents/BackButton";
import SettingsButton from "../SettingsButton";
import ScanModal from "../ScanModal";
import LanguageModal from "../LanguageModal";
import { useComicStore } from "../../../../state/comicStore";
import MangaHeader from "./MangaHeader";
import ChapterContainer from "./ChaptersContainer";
import DetailsContainer from "./DetailsContainer";
import LoadFail from "../../../../sharedComponents/LoadFail";
import SimilarContainer from "./SimilarContainer";

const DesktopViewer = () => {
  const scanRef = useRef<HTMLDialogElement>(null);
  const langRef = useRef<HTMLDialogElement>(null);
  const mangaInfo = useComicStore((state) => state.currentComic);

  if (!mangaInfo) return <LoadFail />;

  return (
    <>
      <div className="flex justify-between px-16 pt-5">
        <BackButton />
        <SettingsButton scanRef={scanRef} langRef={langRef} />
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-10 px-16 py-10">
        <div className="col-span-2 h-96">
          <MangaHeader />
        </div>
        <div className="row-span-2 h-[760px] flex flex-1">
          <ChapterContainer mangaDetails={mangaInfo} />
        </div>
        <div className="col-span-2 h-fit">
          <DetailsContainer mangaDetails={mangaInfo} />
        </div>
        <div className="col-span-3 h-96">
          <SimilarContainer mangaDetails={mangaInfo} />
        </div>
      </div>
      <ScanModal mangaInfo={mangaInfo} scanRef={scanRef} />
      <LanguageModal mangaInfo={mangaInfo} langRef={langRef} />
    </>
  );
};

export default DesktopViewer;
