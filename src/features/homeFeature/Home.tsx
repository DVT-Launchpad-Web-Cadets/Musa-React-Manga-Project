import BottomContainer from "./components/BottomContainer";
import TopSlider from "./components/TopSlider";
import topManga from "../../mockData/topManga.json";
import { MangaSummary } from "../../models/topManga";
import LoadFail from "../../sharedComponents/LoadFail";

const Home = () => {
  if (!(topManga?.["7"] && topManga["30"])) return <LoadFail />;

  const trendingManga = topManga["7"] as MangaSummary[];
  const topRatedManga = topManga["30"] as MangaSummary[];
  return (
    <>
      <TopSlider topSliderManga={trendingManga} />
      <BottomContainer topManga={topRatedManga} />
    </>
  );
};

export default Home;
