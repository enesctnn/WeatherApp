import { useQuery } from '@tanstack/react-query';
import { fetchForecastByCityName } from '../util/http';

export function useCurrentWeatherPop(cityName: string) {
  const { data } = useQuery({
    queryKey: ['pop', cityName],
    queryFn: ({ signal }) => fetchForecastByCityName(cityName, signal),
  });
  return (data?.list[0].pop || 0) * 100;
}
