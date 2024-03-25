import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="rounded-full w-fit p-2 bg-button-background brightness-150 text-lg  "
    >
      <IoIosArrowBack />
    </div>
  );
};

export default BackButton;
