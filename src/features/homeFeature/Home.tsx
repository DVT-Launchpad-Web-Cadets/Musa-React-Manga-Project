import BottomContainer from "./components/BottomContainer";
import TopSlider from "./components/TopSlider";
import LoadFail from "../../sharedComponents/LoadFail";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getComicBySlug, getTopComics } from "../../sharedAPI.ts/apiQueries";
import TopSliderSkeleton from "./skeletons/TopSliderSkeletom";
import BottomContainerSkeleton from "./skeletons/BottomContainerSkeleton";

const Home = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: ["comics"],
    queryFn: getTopComics,
  });

  if (isError)
    return (
      <>
        <LoadFail />
      </>
    );

  const queries = useQueries({
    queries: data
      ? data["7"].slice(0, 20).map((comic) => {
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
