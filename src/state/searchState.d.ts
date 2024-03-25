import SearchResults from "../features/search/components/SearchResults";
import { SearchResults } from "../models/searchResult";

interface SearchState {
  isLoading: boolean;
  results: SearchResults;
  setIsLoading: (isLoading: boolean) => void;
  setResults: (results: SearchResults) => void;
}
