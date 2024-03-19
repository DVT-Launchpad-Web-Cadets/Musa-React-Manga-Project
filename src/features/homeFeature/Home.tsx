import BottomContainer from "./components/BottomContainer";
import TopSlider from "./components/TopSlider";
import topManga from "../../mockData/topManga.json";
import LoadFail from "../../sharedComponents/LoadFail";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getComicBySlug, getTopComics } from "../../sharedAPI.ts/apiQueries";
import TopSliderSkeleton from "./skeletons/TopSliderSkeletom";
import BottomContainerSkeleton from "./skeletons/BottomContainerSkeleton";

const Home = () => {
  // if (!(topManga?.["7"] && topManga["30"])) return <LoadFail />;

  const { isPending, data, isError } = useQuery({
    queryKey: ["comics"],
    queryFn: getTopComics,
  });

  const queries = useQueries({
    queries: data
      ? data["7"].map((comic) => {
          return {
            queryKey: ["comic", comic.slug],
            queryFn: () => getComicBySlug(comic.slug),
          };
        })
      : [],
  });

  const loadingQuery = queries.find((query) => query.isPending);

  if (isPending || loadingQuery?.isPending)
    return (
      <>
        <TopSliderSkeleton />
        <BottomContainerSkeleton />
      </>
    );

  if (isError)
    return (
      <>
        <LoadFail />
      </>
    );

  console.log(queries);

  // const trendingManga = topManga["7"] as MangaSummary[];
  // const topRatedManga = topManga["30"] as MangaSummary[];

  const trendingManga = queries.slice(0, 10).map((query) => query.data);
  const topManga = queries.slice(11, 20).map((query) => query.data);

  return (
    <>
      <TopSlider topSliderManga={trendingManga} />
      <BottomContainer topManga={topManga} />
    </>
  );
};

export default Home;
