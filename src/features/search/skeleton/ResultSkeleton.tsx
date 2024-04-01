import SkeletonCard from "../../../sharedComponents/SkeletonCard";

const ResultSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="py-32 px-4 grid gap-y-8 place-items-center grow-0 overflow-auto bg-gradient-to-t from-primary-color to-gradient-color xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default ResultSkeleton;
