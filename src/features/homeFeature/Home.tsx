import BottomContainer from "./components/BottomContainer";
import TopSlider from "./components/TopSlider";
import LoadFail from "../../sharedComponents/LoadFail";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getComicBySlug, getTopComics } from "../../sharedAPI.ts/apiQueries";
import TopSliderSkeleton from "./skeletons/TopSliderSkeletom";
import BottomContainerSkeleton from "./skeletons/BottomContainerSkeleton";
import SearchButton from "./components/SearchButton";
import Logo from "./components/Logo";
import toast, { Toaster } from "react-hot-toast";

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

  const mangaQueries = useQueries({
    queries: mangaQuery.data
      ? mangaQuery.data["7"]
          .filter((comic) => comic.content_rating === "safe")
          .slice(0, 25)
          .map((comic) => {
            return {
              queryKey: ["comic", comic.slug],
              queryFn: () => getComicBySlug(comic.slug),
            };
          })
      : [],
  });

  const manhwaQueries = useQueries({
    queries: manhwaQuery.data
      ? manhwaQuery.data["7"]
          .filter((comic) => comic.content_rating === "safe")
          .slice(0, 15)
          .map((comic) => {
            return {
              queryKey: ["comic", comic.slug],
              queryFn: () => getComicBySlug(comic.slug),
            };
          })
      : [],
  });

  const manhuaQueries = useQueries({
    queries: manhuaQuery.data
      ? manhuaQuery.data["7"]
          .filter((comic) => comic.content_rating === "safe")
          .slice(0, 15)
          .map((comic) => {
            return {
              queryKey: ["comic", comic.slug],
              queryFn: () => getComicBySlug(comic.slug),
            };
          })
      : [],
  });
  if (mangaQuery.isError || manhwaQuery.isError || manhuaQuery.isError) {
    toast.error("Error Fetching data");
    return (
      <>
        <LoadFail />;
        <Toaster />
      </>
    );
  }

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
        <Logo />
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
      <div className="h-full flex items-center justify-center text-4xl font-bold">
        No manga to show
      </div>
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

  const trendingManga = mangaQueries.slice(0, 5).map((query) => query.data);
  const topManga = mangaQueries.slice(6, 25).map((query) => query.data);

  const topManhwa = manhwaQueries.map((query) => query.data);

  const topManua = manhuaQueries.map((query) => query.data);

  return (
    <>
      <Logo />
      <SearchButton />
      <header>
        <TopSlider topSliderManga={trendingManga} />
      </header>
      <BottomContainer
        topManga={topManga}
        topManhwa={topManhwa}
        topManhua={topManua}
      />
    </>
  );
};

export default Home;
