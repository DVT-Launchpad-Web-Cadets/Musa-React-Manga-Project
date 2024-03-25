import TopComicSkeleton from "./TopComicSkeleton";

const BottomContainerSkeleton = () => {
  return (
    <div className="w-full absolute z-40 top-96 rounded-t-2xl bg-gradient-to-tl from-primary-color via-gradient-color to-primary-color flex flex-col grow pb-5">
      <TopComicSkeleton headerTitle="Top Manga" />
      <TopComicSkeleton headerTitle="Top Manhwa" />
      <TopComicSkeleton headerTitle="Top Manhua" />
    </div>
  );
};

export default BottomContainerSkeleton;
