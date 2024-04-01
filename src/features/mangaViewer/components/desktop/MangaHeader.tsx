import { useComicStore } from "../../../../state/comicStore";
import HeaderDetails from "./HeaderDetails";

const MangaHeader = () => {
  const details = useComicStore((state) => state.currentComic);
  return (
    <div
      className="w-full h-96 rounded-xl flex items-end p-5 shadow-slider brightness-150"
      style={{
        backgroundImage: `url('https://meo3.comick.pictures/${
          details?.comic?.md_covers?.[1]?.b2key ??
          details?.comic?.md_covers?.[0]?.b2key
        }')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"top",
      }}
    >
      <HeaderDetails />
    </div>
  );
};

export default MangaHeader;
