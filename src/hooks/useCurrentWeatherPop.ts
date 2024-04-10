import { useQuery } from "@tanstack/react-query";
import { fetchForecastByCityName } from "../util/http";

/**
 * Custom React hook for fetching and processing the current rain probability for a given city.
 * @param {string} cityName - The name of the city for which to fetch the rain probability.
 * @returns {number} The current rain probability for the specified city in percentage (%).
 */
export function useCurrentWeatherPop(cityName: string) {
  const { data } = useQuery({
    queryKey: [cityName, "pop"],
    queryFn: ({ signal }) => fetchForecastByCityName(cityName, signal),
    // 3 minutes auto refresh time
    staleTime: 1000 * 60 * 3,
  });
  return (data?.list[0].pop || 0) * 100;
}
