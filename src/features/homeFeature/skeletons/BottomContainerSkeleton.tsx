import TopComicSkeleton from "./TopComicSkeleton";

const BottomContainerSkeleton = () => {
  return (
    <div className="h-[57%] w-full absolute z-40 bottom-0 rounded-t-lg bg-gradient-to-tl from-primary-color via-gradient-color to-primary-color">
      <TopComicSkeleton />
    </div>
  );
};

export default BottomContainerSkeleton;
