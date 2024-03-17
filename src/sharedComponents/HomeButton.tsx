import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <button className="btn bg-secondary-color w-24 self-center">
        <FaHome />
        Home
      </button>
    </Link>
  );
};

export default HomeButton;
