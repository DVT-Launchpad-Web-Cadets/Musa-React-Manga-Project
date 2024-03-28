import { useEffect, useRef, useState } from "react";
import { IoIosSearch, IoMdArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EMPTY,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  switchMap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";
import apiBasieURL from "../../../sharedAPI.ts/apiBasieURL";
import { fromPromise } from "rxjs/internal/observable/innerFrom";
import { useSearchStore } from "../../../state/searchStore";
import { SearchResult } from "../../../models/searchResult";

const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        debounceTime(600),
        distinctUntilChanged(),
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
      .subscribe((val: SearchResult[]) => {
        setResults(val);
        setisLoading(false);
      });

    return () => {
      searchAction$.unsubscribe();
    };
  }, []);

  function handleInputChange(value: string) {
    if (value.trim() === "") {
      navigate("/search/quick-search", { replace: true });
      setSearchValue(value);
      return;
    }

    if (location?.pathname && location.pathname === "/search/search-results") {
      navigate("/search/search-results", { replace: true });
    } else {
      navigate("/search/search-results");
    }
    setSearchValue(value);
  }

  return (
    <div className="h-28 bg-search-header-color py-8 px-4 flex gap-3 items-center w-full fixed">
      <div
        onClick={() => {
          setSearchValue("");
          navigate("/", { replace: true });
        }}
        className="rounded-full w-12 h-12 p-2 bg-search-color brightness-150 text-xl flex justify-center items-center "
      >
        <IoMdArrowBack />
      </div>
      <label className="input input-bordered rounded-full w-full flex items-center gap-2 bg-search-color">
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
        {searchValue.length ? (
          <div
            onClick={() => {
              navigate("/search/quick-search", { replace: true });
              setSearchValue("");
            }}
          >
            <RxCross2 />
          </div>
        ) : (
          <IoIosSearch />
        )}
      </label>
    </div>
  );
};

export default SearchInput;
