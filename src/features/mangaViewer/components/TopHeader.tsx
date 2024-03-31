import TopHeaderInfo from "./TopHeaderInfo";
import { useComicStore } from "../../../state/comicStore";
import SettingsButton from "./SettingsButton";
import ScanModal from "./ScanModal";
import LanguageModal from "./LanguageModal";
import BackButton from "../../../sharedComponents/BackButton";
import { useRef } from "react";

const TopHeader = () => {
  const mangaInfo = useComicStore((state) => state.currentComic);
  const scanRef = useRef<HTMLDialogElement>(null);
  const langRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="pt-10 pb-11 px-4 flex flex-col gap-4 w-full h-[550px]">
      <div className="flex justify-between pb-1">
        <BackButton />
        <SettingsButton scanRef={scanRef} langRef={langRef} />
      </div>
      <div className="flex gap-4 w-full max-h-96 ">
        <div className="object-cover object-top">
          <img
            src={`https://meo3.comick.pictures/${mangaInfo?.comic?.md_covers[0]?.b2key}`}
            alt=""
            className="h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
        <TopHeaderInfo />
      </div>
      <ScanModal mangaInfo={mangaInfo} scanRef={scanRef} />
      <LanguageModal mangaInfo={mangaInfo} langRef={langRef} />
    </div>
  );
};

export default TopHeader;
