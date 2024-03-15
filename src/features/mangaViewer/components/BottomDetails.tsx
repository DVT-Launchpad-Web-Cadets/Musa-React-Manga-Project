import { useState } from "react";
import { MangaDetails } from "../../../models/mangaDetails";
import ChaptersTab from "./ChaptersTab";
import DetailsTab from "./DetailsTab";
import SimilarTab from "./SimilarTab";

const BottomDetails = ({ mangaInfo }: { mangaInfo: MangaDetails }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div
      className="
     w-full h-[55%] grow-0 flex flex-col"
    >
      <div role="tablist" className="tabs tabs-bordered flex">
        <a
          role="tab"
          className={`tab ${selectedTab === 1 ? "tab-active" : ""} flex-1`}
          onClick={() => setSelectedTab(1)}
        >
          <p className="text-sm h-20 text-nowrap">
            Chapters ({mangaInfo.comic.last_chapter})
          </p>
        </a>
        <a
          role="tab"
          className={`tab ${selectedTab === 2 ? "tab-active" : ""} flex-1`}
          onClick={() => setSelectedTab(2)}
        >
          <p className="text-sm h-20 text-nowrap">Details</p>
        </a>
        <a
          role="tab"
          className={`tab ${selectedTab === 3 ? "tab-active" : ""} flex-1`}
          onClick={() => setSelectedTab(3)}
        >
          <p className="text-sm h-20 text-nowrap">Similar</p>
        </a>
      </div>
      {selectedTab === 1 && <ChaptersTab />}
      {selectedTab === 2 && <DetailsTab mangaDetails={mangaInfo} />}
      {selectedTab === 3 && (
        <SimilarTab recommendations={mangaInfo.comic.recommendations} />
      )}
    </div>
  );
};

export default BottomDetails;
