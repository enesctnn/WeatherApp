import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/Error";
import MainRoot from "./layouts/MainRoot";
import SearchLocationPage, {
  action as searchLocationAction,
} from "./pages/SearchLocation";
import WeatherDetailsPage, {
  loader as weatherDetailsLoader,
} from "./pages/WeatherDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainRoot />} errorElement={<ErrorPage />}>
      <Route
        index
        element={<SearchLocationPage />}
        action={searchLocationAction}
      />
      <Route
        path="weather/:coords"
        loader={weatherDetailsLoader}
        element={<WeatherDetailsPage />}
      />
    </Route>,
  ),
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
