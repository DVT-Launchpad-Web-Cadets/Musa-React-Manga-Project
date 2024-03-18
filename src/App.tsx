import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/homeFeature/Home";
import ErrorPage from "./sharedComponents/ErrorPage";
import { Suspense, lazy } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manga",
    Component: lazy(() => import("./features/mangaViewer/MangaViewer")),
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    Component: lazy(() => import("./features/search/Search")),
    errorElement: <ErrorPage />,
  },
  {
    path: "/comic",
    Component: lazy(() => import("./features/comicReader/Reader")),
    errorElement: <ErrorPage />,
  },
  {
    path: "/topmanga",
    Component: lazy(
      () => import("./features/homeFeature/components/MangaListView")
    ),
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
