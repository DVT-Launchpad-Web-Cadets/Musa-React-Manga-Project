import SkeletonCard from "../../../sharedComponents/SkeletonCard";

const CarouselSkeleton = () => {
  return (
    <div className="carousel carousel-center p-4 space-x-4 h-[340px] flex gap-2">
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
  );
};

export default CarouselSkeleton;
