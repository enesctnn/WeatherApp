import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getDayString, getMonthString } from "../lib/date";
import { bgs, icons } from "../lib/images";
import { fetchCurrentWeatherByCoords } from "../util/http-weather";
import { useWeatherUnitsContext } from "./context/useWeatherUnitsContext";
import { useCurrentWeatherPop } from "./useCurrentWeatherPop";

/**
 * Represents the formatted data for current weather.
 */
export type FormattedWeatherData = {
  city: { name: string; country: string; sunrise: string; sunset: string };
  weather: string;
  icon: { src: string; alt: string };
  bg: { src: string; alt: string };
  temp: { index: number; max: number; min: number; sensation: number };
  date: { dayString: string; month: string; day: number; year: number };
  windSpeed: number;
  humidity: number;
  rainProbability: number;
  atmosphericPressure: number;
  rainVolume: { "1h"?: number; "3h"?: number };
  snowVolume: { "1h"?: number; "3h"?: number };
  visibility: number;
};

/**
 * Custom React hook for processing and formatting current weather data.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {FormattedWeatherData | null} The processed current weather data.
 */
export function useCurrentWeatherData(
  lat: number,
  lon: number,
): FormattedWeatherData | null {
  const rainProbability = useCurrentWeatherPop(lat, lon);
  const {
    i18n: { language: lang },
  } = useTranslation();
  const { units } = useWeatherUnitsContext();

  const { data, isError } = useQuery({
    queryKey: ["current", lat, lon, lang, units],
    queryFn: ({ signal }) =>
      fetchCurrentWeatherByCoords(lat, lon, signal, { lang, units }),
    // auto invalidate time set to 5 minutes
    staleTime: 1000 * 60 * 5,
  });

  if (isError) throw new Error("Could not fetch current weather");

  if (data) {
    const dataWeather = data.weather[0];

    const iconCode = dataWeather.icon;
    const icon = {
      src: icons[iconCode].src,
      alt: icons[iconCode].alt,
    };
    const bg = {
      src: bgs[iconCode].src,
      alt: bgs[iconCode].alt,
    };

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const month = getMonthString(today, lang);
    const dayString = getDayString(today, lang);
    const day = today.getDate();
    const year = today.getFullYear();

    const temp = {
      index: +data.main.temp.toFixed(),
      max: +data.main.temp_max.toFixed(),
      min: +data.main.temp_min.toFixed(),
      sensation: +data.main.feels_like.toFixed(),
    };
    // incoming windSpeed value is meter/sec next line of code is to convert it to km/h
    const windSpeed = +((data.wind.speed / 1000) * (60 * 60)).toFixed();
    const humidity = +data.main.humidity.toFixed();
    const rainVolume: { [key: string]: number } = {};
    if (data.rain && data.rain["1h"]) rainVolume["1h"] = data.rain["1h"];
    if (data.rain && data.rain["3h"]) rainVolume["3h"] = data.rain["3h"];
    const snowVolume: { [key: string]: number } = {};
    if (data.snow && data.snow["1h"]) snowVolume["1h"] = data.snow["1h"];
    if (data.snow && data.snow["3h"]) snowVolume["3h"] = data.snow["3h"];

    const formattedWeatherData: FormattedWeatherData = {
      city: {
        name: data.name,
        country: data.sys.country,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(lang, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(lang, {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      weather: dataWeather.description,
      icon,
      bg,
      temp,
      date: { dayString, month, day, year },
      windSpeed,
      humidity,
      rainProbability,
      atmosphericPressure: data.main.pressure,
      rainVolume,
      snowVolume,
      visibility: data.visibility / 1000,
    };
    return formattedWeatherData;
  }
  return null;
}
