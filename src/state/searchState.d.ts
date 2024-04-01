import SearchResults from "../features/search/components/Results";
import {
  SearchResult,
  SearchResults,
  SearchResults,
} from "../models/searchResult";

interface SearchState {
  isLoading: boolean;
  results: SearchResult[] | null | undefined;
  isError: boolean;
  currentcomic: SearchResult | undefined | null;
  setIsLoading: (isLoading: boolean) => void;
  setResults: (results: SearchResult[] | null | undefined) => void;
  setIsError: (error: boolean) => void;
  setCurrentComic: (comic: SearchResult | undefined | null) => void;
}
