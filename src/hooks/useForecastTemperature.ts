import { useQuery } from '@tanstack/react-query';
import { getDayString, getTimeFromDate } from '../lib/date';
import { fetchForecastByCityName } from '../util/http';
import { ForecastDataFormat } from './useForecastData';

/**
 * Custom React hook to fetch and manage forecast temperature data for a given city.
 * @param {string} cityName - The name of the city for which forecast temperature data is to be fetched.
 * @returns {Array<{ day: string, temperature: Array<{ time: string, temperature: number }> }>|null} - An array of objects containing forecast temperature data for each day, or null if data is not yet available.
 */
export function useForecastTemperature(cityName: string) {
  const { data } = useQuery({
    queryKey: ['forecast', cityName],
    queryFn: ({ signal }) => fetchForecastByCityName(cityName, signal),
    // 3 minutes auto data refresh
    staleTime: 1000 * 60 * 3,
  });
  if (data) {
    const forecastTempData: {
      [key: string]: { time: string; temperature: number }[];
    } = {};
    const forecastTempArray: {
      day: string;
      temperature: (typeof forecastTempData)[keyof ForecastDataFormat];
    }[] = [];
    for (const list of data.list) {
      const dayString = getDayString(list.dt_txt);
      const time = getTimeFromDate(list.dt_txt);
      const temperature = +list.main.temp.toFixed();
      if (forecastTempData[dayString]) {
        forecastTempData[dayString].push({ time, temperature });
      } else {
        forecastTempData[dayString] = [{ time, temperature }];
      }
    }
    Object.keys(forecastTempData).map((key) => {
      forecastTempArray.push({ day: key, temperature: forecastTempData[key] });
    });
    return forecastTempArray;
  }
  return null;
}
