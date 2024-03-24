import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchSection from '../components/Search/SearchSection';
import { fetchWeatherByCoords } from '../util/http';

const SearchLocationPage = () => {
  const [coords, setCoords] = useState<{
    lat: number | undefined;
    lon: number | undefined;
  }>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    );
  }, []);

  const { data } = useQuery({
    queryKey: ['userLocation'],
    queryFn: ({ signal }) =>
      fetchWeatherByCoords(coords?.lat, coords?.lon, signal),
    staleTime: 10000 * 60,
    // 10 minutes auto invalidate query time
  });

  data && console.log({ data });

  return (
    <>
      <Header />
      <SearchSection key={data} />
    </>
  );
};
export default SearchLocationPage;
