import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const PrevButton = ({
  carouselRef,
}: {
  carouselRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      onClick={() => {
        if (carouselRef.current) carouselRef.current.scrollLeft -= 30;
      }}
      className="absolute top-32 left-2 z-30 rounded-full w-fit p-2 bg-secondary-color brightness-150 text-lg  "
    >
      <IoMdArrowBack />
    </div>
  );
};

export default PrevButton;
