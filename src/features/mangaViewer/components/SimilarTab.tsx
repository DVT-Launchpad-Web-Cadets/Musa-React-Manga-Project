import { Recommendation } from "../../../models/mangaDetails";
import SimilarManga from "./SimilarManga";

const SimilarTab = ({
  recommendations,
}: {
  recommendations: Recommendation[];
}) => {
  return (
    <div className="py-10 px-4 grid grid-cols-2 gap-y-8 place-items-center grow-0 overflow-auto">
      {recommendations?.slice(0, 6).map((manga) => (
        <SimilarManga key={manga.relates.slug} cardInfo={manga} />
      ))}
    </div>
  );
};

export default SimilarTab;
