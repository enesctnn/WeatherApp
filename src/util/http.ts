import { QueryClient } from '@tanstack/react-query';
import axios from './axios';

export const API_KEY = '175cc3fc29872d7cb42afe08ab37cc80';

/**
 * Tanstack query client for caching the data all over the app
 * @type {QueryClient}
 */
export const queryClient = new QueryClient();

/**
 * @param lat
 * @param lon
 * @param signal
 *
 * Helper function to get City Name from users current location
 *
 * @returns string
 */
export async function fetchCityNamesByCoords(
  lat: number | undefined,
  lon: number | undefined,
  signal?: AbortSignal
) {
  const res = await axios.get(
    `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    { signal }
  );

  return res.data;
}

/**
 * @param lat
 * @param lon
 * @param signal
 *
 * Helper function to fetch weather data for location
 *
 * @returns weather data for incoming lat, lon coords
 */
export async function fetchWeatherByCoords(
  lat: number | undefined,
  lon: number | undefined,
  signal?: AbortSignal
) {
  const res = await axios.get(
    `data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    { signal }
  );

  return res.data;
}

/**
 * @param cityName
 * @param signal
 *
 * Helper function to fetch weather data for location
 *
 * @returns weather data for incoming city name
 */
export async function fetchWeatherByCityName(
  cityName: string,
  signal?: AbortSignal
) {
  const res = await axios.get(
    `data/2.5/forecast/?q=${cityName}&appid=${API_KEY}`,
    { signal }
  );

  return res.data;
}
