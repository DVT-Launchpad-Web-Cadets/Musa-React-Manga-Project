import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/homeFeature/Home";
import MangaViewer from "./features/mangaViewer/MangaViewer";
import Search from "./features/search/Search";
import Reader from "./features/comicReader/Reader";
import MangaListView from "./features/homeFeature/components/MangaListView";
import ErrorPage from "./sharedComponents/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manga",
    element: <MangaViewer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/comic",
    element: <Reader />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/topmanga",
    element: <MangaListView />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
