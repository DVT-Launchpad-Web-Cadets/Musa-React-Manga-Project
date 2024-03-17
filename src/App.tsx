import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/homeFeature/Home";
import MangaViewer from "./features/mangaViewer/MangaViewer";
import Search from "./features/search/Search";
import Reader from "./features/comicReader/Reader";
import MangaListView from "./features/homeFeature/components/MangaListView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/manga",
    element: <MangaViewer />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/comic",
    element: <Reader />,
  },
  {
    path: "/topmanga",
    element: <MangaListView/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
