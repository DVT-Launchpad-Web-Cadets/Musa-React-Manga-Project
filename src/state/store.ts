// import { create } from "zustand";
// import { ComicState } from "./comicState";
// import { devtools, persist } from "zustand/middleware";
// import { MangaDetails } from "../models/mangaDetails";
// import { Comic } from "../models/chapterComic";
// import { Chapters } from "../models/chapters";

// const useComicStore = create<ComicState>()(
//   devtools(
//     persist(
//       (set) => ({
//         currentComic: null,
//         currentChapter: null,
//         currentChapters: null,
//         setCurrentComic: (comic: MangaDetails) =>
//           set(() => ({ currentComic: comic })),
//         setCurrentChapters: (chapters: Chapters) =>
//           set(() => ({ currentChapters: chapters })),
//         setCurrentChapter: (chapter: Comic) =>
//           set(() => ({ currentChapter: chapter })),
//       }),
//       {
//         name: "comic-storage",
//       }
//     )
//   )
// );
