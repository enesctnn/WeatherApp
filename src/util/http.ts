import { QueryClient } from '@tanstack/react-query';
import axios from './axios';
import { WeatherData } from '../CurrentResponse';
import { AxiosError } from 'axios';

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
export async function fetchCityNameByCoords(
  lat: number | undefined,
  lon: number | undefined,
  signal?: AbortSignal
) {
  const res = await axios.get(
    `geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    { signal }
  );
  return res.data[0];
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
): Promise<WeatherData> {
  try {
    const res = await axios.get(
      `data/2.5/forecast/?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      { signal }
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error('Something went wrong while fetching weather by coords !');
  }
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
): Promise<WeatherData> {
  try {
    const res = await axios.get(
      `data/2.5/forecast/?units=metric&q=${cityName}&appid=${API_KEY}`,
      { signal }
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error(
      'Something went wrong while fetching weather by city name !'
    );
  }
}
