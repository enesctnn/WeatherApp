import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getShortDayString } from "../lib/date";
import { fetchForecastByCoords } from "../util/http-weather";
import { icons } from "../lib/weather-images";
import { useWeatherUnitsContext } from "./context/useWeatherUnitsContext";

/**
 * Represents the format of forecast data.
 */
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
 * Custom React hook for fetching and processing forecast data for a given location.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {ForecastDataFormat | null} An object containing forecast data, with keys representing
 * the short day string and values containing temperature, icon, and day information. Returns null
 * if data is not available yet.
 */
export function useForecastData(
  lat: number,
  lon: number,
): ForecastDataFormat | null {
  const {
    i18n: { language },
  } = useTranslation();
  const { units } = useWeatherUnitsContext();

  const { data, isError } = useQuery({
    queryKey: ["forecast", lat, lon, units],
    queryFn: ({ signal }) => fetchForecastByCoords(lat, lon, signal, { units }),
    // 5 minutes auto data refresh
    staleTime: 1000 * 60 * 5,
  });

  if (isError) throw new Error("Could not fetch current weather");

  if (data) {
    const forecastData: ForecastDataFormat = {};

    for (const list of data.list) {
      const dayString = getShortDayString(list.dt_txt, language);
      if (forecastData[dayString]) {
        forecastData[dayString].temp = {
          max: Math.max(
            forecastData[dayString].temp.max,
            +list.main.temp_max.toFixed(),
          ),
          min: Math.min(
            forecastData[dayString].temp.min,
            +list.main.temp_min.toFixed(),
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
