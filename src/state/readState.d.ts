interface ReadState {
  currentComicScans: string[];
  currentComicLanguage: string;
  setCurrentComicScans: (scans: string[]) => void;
  setCurrentComicLanguage: (lang: string) => void;
}
