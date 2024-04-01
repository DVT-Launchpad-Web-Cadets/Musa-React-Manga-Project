import { useReadStore } from "../../state/readStore";
import { useMediaQuery } from "react-responsive";
import MobileViewer from "./components/MobileViewer";
import DesktopViewer from "./components/desktop/DesktopViewer";

const MangaViewer = () => {
  const setCurrentComicScans = useReadStore(
    (state) => state.setCurrentComicScans
  );

  const setCurrentComicLanguage = useReadStore(
    (state) => state.setCurrentComicLanguage
  );

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  setCurrentComicScans([]);
  setCurrentComicLanguage("en");

  return (
    <>
      {isTabletOrMobile && <MobileViewer />}
      {isDesktopOrLaptop && <DesktopViewer />}
    </>
  );
};

export default MangaViewer;
