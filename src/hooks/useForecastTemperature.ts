import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { getDayString, getTimeFromDate } from '../lib/date';

import { fetchForecastByCityName } from '../util/http';
import { ForecastDataFormat } from './useForecastData';
import { useWeatherUnitsContext } from './context/useWeatherUnitsContext';

/**
 * Custom React hook to fetch and manage forecast temperature data for a given city.
 * @param {string} cityName - The name of the city for which forecast temperature data is to be fetched.
 * @returns {Array<{ day: string, temperature: Array<{ time: string, temperature: number }> }>|null} - An array of objects containing forecast temperature data for each day, or null if data is not yet available.
 */
export function useForecastTemperature(cityName: string) {
  const {
    i18n: { language },
  } = useTranslation();

  const { units } = useWeatherUnitsContext();

  const { data, isError } = useQuery({
    queryKey: ['forecast', cityName, units],
    queryFn: ({ signal }) =>
      fetchForecastByCityName(cityName, signal, { units }),
    // 3 minutes auto data refresh
    staleTime: 1000 * 60 * 3,
  });

  if (isError) throw new Error('Could not fetch current weather');

  if (data) {
    const forecastTempData: {
      [key: string]: { time: string; temperature: number; pop: number }[];
    } = {};
    const forecastTempArray: {
      day: string;
      temperature: (typeof forecastTempData)[keyof ForecastDataFormat];
    }[] = [];
    for (const list of data.list) {
      const dayString = getDayString(list.dt_txt, language);
      const time = getTimeFromDate(list.dt_txt);
      const temperature = +list.main.temp.toFixed();
      const pop = +list.pop * 100;
      if (forecastTempData[dayString]) {
        forecastTempData[dayString].push({ time, temperature, pop });
      } else {
        forecastTempData[dayString] = [{ time, temperature, pop }];
      }
    }
    Object.keys(forecastTempData).map((key) => {
      forecastTempArray.push({ day: key, temperature: forecastTempData[key] });
    });
    return forecastTempArray;
  }
  return null;
}
