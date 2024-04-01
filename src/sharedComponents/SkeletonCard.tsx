const SkeletonCard = () => {
  return (
    <div className="carousel-item h-[340px] w-40 flex flex-col gap-2">
      <div className="skeleton h-64 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-3 w-14"></div>
    </div>
  );
};

export default SkeletonCard;
