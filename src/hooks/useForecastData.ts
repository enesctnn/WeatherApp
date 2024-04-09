import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { getShortDayString } from '../lib/date';

import { fetchForecastByCityName } from '../util/http';

import { icons } from './../lib/images';
import { useWeatherUnitsContext } from './context/useWeatherUnitsContext';

export type ForecastDataFormat = {
  [key: string]: {
    icon: {
      src: string;
      alt: string;
    };
    temp: {
      max: number;
      min: number;
    };
  };
};

/**
 * Custom React hook for fetching and processing forecast data for a given city.
 * @param {string} cityName - The name of the city for which to fetch the forecast data.
 * @returns {ForecastDataFormat | null} An array of forecast objects containing temperature, icon, and day information,
 * or null if data is not available yet.
 */
export function useForecastData(cityName: string): ForecastDataFormat | null {
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
    const forecastData: ForecastDataFormat = {};

    for (const list of data.list) {
      const dayString = getShortDayString(list.dt_txt, language);
      if (forecastData[dayString]) {
        forecastData[dayString].temp = {
          max: Math.max(
            forecastData[dayString].temp.max,
            +list.main.temp_max.toFixed()
          ),
          min: Math.min(
            forecastData[dayString].temp.min,
            +list.main.temp_min.toFixed()
          ),
        };
      } else {
        const iconCode = list.weather[0].icon;
        forecastData[dayString] = {
          icon: { src: icons[iconCode].src, alt: icons[iconCode].alt },
          temp: {
            max: +list.main.temp_max.toFixed(),
            min: +list.main.temp_min.toFixed(),
          },
        };
      }
    }
    return forecastData;
  }
  return null;
}
