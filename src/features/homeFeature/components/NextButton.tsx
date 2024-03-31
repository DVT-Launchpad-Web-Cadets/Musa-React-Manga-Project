import { IoMdArrowForward } from "react-icons/io";

const NextButton = ({
  carouselRef,
}: {
  carouselRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <div
      onClick={() => {
        console.log(carouselRef.current?.scrollLeft);

        if (carouselRef.current) {
          carouselRef.current.scrollLeft;
          console.log(carouselRef.current.scrollLeft);
        }
      }}
      className="absolute top-32 right-2 z-30  rounded-full w-fit p-2 bg-secondary-color brightness-150 text-lg  "
    >
      <IoMdArrowForward />
    </div>
  );
};

export default NextButton;
