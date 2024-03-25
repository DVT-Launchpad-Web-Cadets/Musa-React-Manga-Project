import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {
  EMPTY,
  debounceTime,
  fromEvent,
  map,
  switchMap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";
import apiBasieURL from "../../../sharedAPI.ts/apiBasieURL";
import { fromPromise } from "rxjs/internal/observable/innerFrom";
import { SearchResults } from "../../../models/searchResult";
import { useSearchStore } from "../../../state/searchStore";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const setResults = useSearchStore((state) => state.setResults);
  const setisLoading = useSearchStore((state) => state.setIsLoading);

  useEffect(() => {
    if (!inputRef?.current) return;

    const searchAction$ = fromEvent(inputRef.current, "input")
      .pipe(
        map((event) => {
          if (!event || !(event.target as HTMLInputElement).value) {
            return "";
          }
          return (event.target as HTMLInputElement).value;
        }),
        debounceTime(1000),
        switchMap((value) => {
          if (value !== "") {
            setisLoading(true);
            return fromFetch(
              `${apiBasieURL}/v1.0/search/?page=1&limit=15&showall=false&q=${value}&t=false`
            ).pipe(switchMap((res) => fromPromise(res.json())));
          }
          return EMPTY;
        })
      )
      .subscribe((val: SearchResults) => {
        setResults(val);
        setisLoading(false);
      });

    return () => {
      searchAction$.unsubscribe();
    };
  }, []);

  function handleInputChange(value: string) {
    if (value.trim() === "") {
      navigate("/search/quickSearch");
      setSearchValue(value);
    } else {
      navigate("/search/searchResults");
      setSearchValue(value);
    }
  }

  return (
    <div className="h-28 bg-search-header-color py-8 px-4 flex gap-3 items-center">
      <label className="input input-bordered rounded-full w-96 flex items-center gap-2 bg-search-color">
        <input
          id="searchInput"
          ref={inputRef}
          type="text"
          className="grow"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => {
            handleInputChange(event.target.value);
          }}
        />
        <IoIosSearch />
      </label>

      <div
        onClick={() => navigate("/", { replace: true })}
        className="rounded-full w-fit p-2 bg-search-color brightness-150 text-lg"
      >
        <RxCross2 />
      </div>
    </div>
  );
};

export default SearchInput;
