import { QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainRoot from './pages/MainRoot';
import SearchLocation from './pages/SearchLocation';
import { queryClient } from './util/http';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainRoot />}>
      <Route index element={<SearchLocation />} />

      <Route path="weather/:cityName" element />
    </Route>
  )
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
