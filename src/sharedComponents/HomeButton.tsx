import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/" aria-label="Navigate back to home">
      <button className="btn bg-secondary-color w-24 self-center">
        <FaHome />
        Home
      </button>
    </Link>
  );
};

export default HomeButton;
