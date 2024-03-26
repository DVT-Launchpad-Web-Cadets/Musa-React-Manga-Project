import { useEffect, useRef, useState } from "react";
import GenreChip from "./GenreChip";
import StatusChip from "./StatusChip";
import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "../../../sharedAPI.ts/apiQueries";
import SearchButton from "./SearchButton";
import { useSearchStore } from "../../../state/searchStore";
import { useNavigate } from "react-router-dom";
import {
  fromEvent,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  EMPTY,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { fromPromise } from "rxjs/internal/observable/innerFrom";
import { SearchResult } from "../../../models/searchResult";
import apiBasieURL from "../../../sharedAPI.ts/apiBasieURL";

const AdvancedSearch = () => {
  const genreChips = [
    { id: 1, genre: "Action", isChecked: false },
    { id: 2, genre: "Comedy", isChecked: false },
    { id: 3, genre: "Adventure", isChecked: false },
    { id: 4, genre: "Drama", isChecked: false },
    { id: 5, genre: "Martial arts", isChecked: false },
    { id: 6, genre: "Music", isChecked: false },
  ];

  const statusChips = [
    { id: 1, status: "Ongoing", isChecked: false, icon: "ongoing" },
    { id: 2, status: "Completed", isChecked: false, icon: "completed" },
  ];

  const navigate = useNavigate();
  const [genres, setGenres] = useState(genreChips);
  const [statuses, setStatuses] = useState(statusChips);
  const queryGenres = useRef("");
  const queryStatus = useRef("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // const { isPending, data, isError, refetch } = useQuery({
  //   queryKey: ["search"],
  //   queryFn: () => searchQuery(queryGenres.current, queryStatus.current),
  //   enabled: false,
  // });

  const setIsLoading = useSearchStore((state) => state.setIsLoading);
  const setResults = useSearchStore((state) => state.setResults);

  useEffect(() => {
    if (!buttonRef?.current) return;
    setIsLoading(true);
    const searchAction$ = fromEvent(buttonRef.current, "click")
      .pipe(
        switchMap(() =>
          fromFetch(
            `${apiBasieURL}/v1.0/search/?${
              queryGenres.current?.length &&
              "genre=" + queryGenres.current.toLowerCase()
            }&page=1&limit=15&${
              queryStatus.current?.length && "status=" + queryStatus.current
            }&showall=false&t=false`
          ).pipe(switchMap((res) => fromPromise(res.json())))
        )
      )
      .subscribe((val: SearchResult[]) => {
        for (let index = 0; index < genres.length; index++) {
          if (genres[index].isChecked) {
            queryGenres.current += genres[index].genre + ",";
          }
        }

        queryGenres.current = queryGenres.current.replace(/,\s*$/, "");

        for (let status of statuses) {
          if (!status.isChecked) continue;

          if (status.status === "Ongoing") queryStatus.current = "1";
          else queryStatus.current = "2";
        }
        setResults(val);
        setIsLoading(false);
        navigate("/search/searchResults");
      });

    return () => {
      searchAction$.unsubscribe();
    };
  }, []);

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
    for (let index = 0; index < genres.length; index++) {
      if (genres[index].isChecked) {
        queryGenres.current += genres[index].genre + ",";
      }
    }

    queryGenres.current = queryGenres.current.replace(/,\s*$/, "");

    for (let status of statuses) {
      if (!status.isChecked) continue;

      if (status.status === "Ongoing") queryStatus.current = "1";
      else queryStatus.current = "2";
    }

    navigate("/search/searchResults");
    // refetch();
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
      <SearchButton buttonRef={buttonRef} />
    </div>
  );
};

export default AdvancedSearch;
