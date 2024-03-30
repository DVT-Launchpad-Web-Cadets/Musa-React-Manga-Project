import { FaGear } from "react-icons/fa6";
import { IoLanguage, IoScan } from "react-icons/io5";

const SettingsButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="rounded-full w-fit p-2 bg-button-background brightness-150 text-lg  "
      >
        <FaGear />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-primary-color rounded-box w-52"
      >
        <li
          onClick={() => {
            const model = document.getElementById(
              "my_modal_4"
            ) as HTMLDialogElement;
            if (model) model.showModal();
          }}
        >
          <a>
            {" "}
            <span className="text-icon-color">
              <IoScan />
            </span>
            Scans
          </a>
        </li>
        <li onClick={() => console}>
          <a>
            <span className="text-icon-color">
              <IoLanguage />{" "}
            </span>{" "}
            Language
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SettingsButton;
