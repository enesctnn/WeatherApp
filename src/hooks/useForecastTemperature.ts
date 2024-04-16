import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getDayString, getTimeFromDate } from "../lib/date";
import { fetchForecastByCoords } from "../util/http-weather";
import { useWeatherUnitsContext } from "./context/useWeatherUnitsContext";
import type { ForecastDataFormat } from "./useForecastData";

/**
 * Custom React hook to fetch and manage forecast temperature data for a given location.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {Array<{ day: string, temperature: Array<{ time: string, temperature: number }> }>|null} An array of objects containing forecast temperature data for each day, or null if data is not yet available.
 */
export function useForecastTemperature(
  lat: number,
  lon: number,
): Array<{
  day: string;
  temperature: Array<{ time: string; temperature: number; pop: number }>;
}> | null {
  const {
    i18n: { language },
  } = useTranslation();

  const { units } = useWeatherUnitsContext();

  const { data, isError } = useQuery({
    queryKey: ["forecast", lat, lon, units],
    queryFn: ({ signal }) => fetchForecastByCoords(lat, lon, signal, { units }),
    // 3 minutes auto data refresh
    staleTime: 1000 * 60 * 3,
  });

  if (isError) throw new Error("Could not fetch current weather");

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
