import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/homeFeature/Home";
import ErrorPage from "./sharedComponents/ErrorPage";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Results from "./features/search/components/Results";

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
        path: "/search/quick-search",
        Component: lazy(
          () => import("./features/search/components/QuickSearch")
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/search/search-results",
        element: <Results />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/reader/:chapterhid",
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
