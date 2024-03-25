import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/homeFeature/Home";
import ErrorPage from "./sharedComponents/ErrorPage";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResults from "./features/search/components/SearchResults";

const queryClient = new QueryClient();

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
    children: [
      {
        path: "/search/quickSearch",
        Component: lazy(
          () => import("./features/search/components/QuickSearch")
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/search/searchResults",
        element: <SearchResults />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/reader/:chapterHID",
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
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<>Loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
