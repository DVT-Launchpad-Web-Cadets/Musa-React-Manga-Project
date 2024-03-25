import BottomContainer from "./components/BottomContainer";
import TopSlider from "./components/TopSlider";
import LoadFail from "../../sharedComponents/LoadFail";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getComicBySlug, getTopComics } from "../../sharedAPI.ts/apiQueries";
import TopSliderSkeleton from "./skeletons/TopSliderSkeletom";
import BottomContainerSkeleton from "./skeletons/BottomContainerSkeleton";
import SearchButton from "./components/SearchButton";

const Home = () => {
  const mangaQuery = useQuery({
    queryKey: ["manga"],
    queryFn: () => getTopComics("manga"),
  });

  const manhwaQuery = useQuery({
    queryKey: ["manhwa"],
    queryFn: () => getTopComics("manhwa"),
  });

  const manhuaQuery = useQuery({
    queryKey: ["manhua"],
    queryFn: () => getTopComics("manhua"),
  });

  if (mangaQuery.isError) return <LoadFail />;

  if (manhwaQuery.isError) return <LoadFail />;

  if (manhuaQuery.isError) return <LoadFail />;

  const mangaQueries = useQueries({
    queries: mangaQuery.data
      ? mangaQuery.data["7"].slice(0, 25).map((comic) => {
          return {
            queryKey: ["comic", comic.slug],
            queryFn: () => getComicBySlug(comic.slug),
          };
        })
      : [],
  });

  const manhwaQueries = useQueries({
    queries: manhwaQuery.data
      ? manhwaQuery.data["7"].slice(0, 15).map((comic) => {
          return {
            queryKey: ["comic", comic.slug],
            queryFn: () => getComicBySlug(comic.slug),
          };
        })
      : [],
  });

  const manhuaQueries = useQueries({
    queries: manhuaQuery.data
      ? manhuaQuery.data["7"].slice(0, 15).map((comic) => {
          return {
            queryKey: ["comic", comic.slug],
            queryFn: () => getComicBySlug(comic.slug),
          };
        })
      : [],
  });

  const mangaLoadingQuery = mangaQueries?.find((query) => query.isPending);
  const mangaErrorQuery = mangaQueries?.find((query) => query.isError);

  const manhwaLoadingQuery = manhwaQueries?.find((query) => query.isPending);
  const manhwaErrorQuery = manhwaQueries?.find((query) => query.isError);

  const manhuaLoadingQuery = manhuaQueries?.find((query) => query.isPending);
  const manhuaErrorQuery = manhuaQueries?.find((query) => query.isError);

  if (
    mangaQuery.isPending ||
    mangaLoadingQuery?.isPending ||
    manhwaQuery.isPending ||
    manhwaLoadingQuery?.isPending ||
    manhuaQuery.isPending ||
    manhuaLoadingQuery?.isPending
  )
    return (
      <>
        <TopSliderSkeleton />
        <BottomContainerSkeleton />
      </>
    );

  if (
    !mangaQuery.isPending &&
    !mangaQuery.data &&
    !manhwaQuery.isPending &&
    !manhwaQuery.data &&
    !manhuaQuery.isPending &&
    !manhuaQuery.data
  ) {
    return (
      <div className="h-full flex items-center justify-center"> No manga</div>
    );
  }

  if (
    !mangaQuery.isPending &&
    mangaQuery.data &&
    mangaErrorQuery &&
    !manhwaQuery.isPending &&
    mangaQuery.data &&
    manhwaErrorQuery &&
    !manhuaQuery.isPending &&
    mangaQuery.data &&
    manhuaErrorQuery
  ) {
    return (
      <div className="h-full flex items-center justify-center"> No manga</div>
    );
  }

  const trendingManga = mangaQueries.slice(0, 10).map((query) => query.data);
  const topManga = mangaQueries.slice(11, 20).map((query) => query.data);

  const topManhwa = manhwaQueries.map((query) => query.data);

  const topManua = manhuaQueries.map((query) => query.data);

  return (
    <>
     <SearchButton/>
      <TopSlider topSliderManga={trendingManga} />
      <BottomContainer
        topManga={topManga}
        topManhwa={topManhwa}
        topManhua={topManua}
      />
    </>
  );
};

export default Home;
