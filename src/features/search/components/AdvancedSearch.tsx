import { useRef, useState } from "react";
import GenreChip from "./GenreChip";
import StatusChip from "./StatusChip";
import SearchButton from "./SearchButton";
import { useNavigate } from "react-router-dom";
import { genreChips, statusChips } from "../utilData/data";

const AdvancedSearch = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState(genreChips);
  const [statuses, setStatuses] = useState(statusChips);
  const queryGenres = useRef("");
  const queryStatus = useRef("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleGenreClick(genre: {
    id: number;
    genre: string;
    isChecked: boolean;
  }) {
    setGenres(
      genres.map((listGenre) => {
        if (listGenre.id === genre.id) {
          return { ...listGenre, isChecked: !genre.isChecked };
        }
        return listGenre;
      })
    );
  }

  function handleStatusClick(status: {
    id: number;
    status: string;
    isChecked: boolean;
  }) {
    setStatuses(
      statuses.map((listStatus) => {
        if (listStatus.id === status.id) {
          return { ...listStatus, isChecked: !status.isChecked };
        } else {
          return { ...listStatus, isChecked: false };
        }
      })
    );
  }

  async function handleSearch() {
    queryGenres.current = genres.filter((genre) => genre.isChecked).join(",");

    for (let status of statuses) {
      if (!status.isChecked) continue;

      if (status.status === "Ongoing") queryStatus.current = "1";
      else queryStatus.current = "2";
    }

    navigate("/search/searchResults", {
      state: {
        queryGenres: queryGenres.current,
        queryStatus: queryStatus.current,
      },
      replace: true,
    });
  }

  return (
    <div className="flex flex-col items-start gap-5 px-4">
      <div className="flex flex-col gap-3 py-5">
        <h1>Genres</h1>
        <div className="flex gap-6 flex-wrap">
          {genres.map((genre) => (
            <div key={genre.id} onClick={() => handleGenreClick(genre)}>
              <GenreChip genre={genre.genre} isChecked={genre.isChecked} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1>Status</h1>
        <div className="flex gap-6 flex-wrap">
          {statuses.map((status) => (
            <div key={status.id} onClick={() => handleStatusClick(status)}>
              <StatusChip
                status={status.status}
                isChecked={status.isChecked}
                icon={status.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <SearchButton handleSearch={handleSearch} buttonRef={buttonRef} />
    </div>
  );
};

export default AdvancedSearch;
