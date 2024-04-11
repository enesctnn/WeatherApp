import { useQuery } from "@tanstack/react-query";
import { fetchForecastByCoords } from "../util/http";

/**
 * Custom React hook for fetching and processing the current rain probability for a given location.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {number} The current rain probability for the specified location in percentage (%).
 */
export function useCurrentWeatherPop(lat: number, lon: number): number {
  const { data } = useQuery({
    queryKey: ["pop", lat, lon],
    queryFn: ({ signal }) => fetchForecastByCoords(lat, lon, signal),
    // 3 minutes auto refresh time
    staleTime: 1000 * 60 * 3,
  });

  return (data?.list[0].pop || 0) * 100;
}
