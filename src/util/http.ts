import { AxiosError } from 'axios';
import axios from './axios';

import { QueryClient } from '@tanstack/react-query';

import { WeatherDataTypes } from '../weather-data';

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
 * 5 day forecast is available at any location on the globe. It includes weather forecast data with 3-hour step.
 *
 * @returns forecast weather data for incoming lat, lon coords
 */
export async function fetchForecastByCoords(
  lat: number | undefined,
  lon: number | undefined,
  signal?: AbortSignal
): Promise<WeatherDataTypes.ForecastWeatherData> {
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
 * 5 day forecast is available at any location on the globe. It includes weather forecast data with 3-hour step.
 *
 * @returns forecast weather data for incoming city name
 */
export async function fetchForecastByCityName(
  cityName: string,
  signal?: AbortSignal
): Promise<WeatherDataTypes.ForecastWeatherData> {
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

/**
 * @param cityName
 * @param signal
 *
 * Access current weather data for any location on Earth with given city name
 *
 * @returns current weather data for incoming city name
 */
export async function fetchCurrentWeatherByCityName(
  cityName: string,
  signal?: AbortSignal
): Promise<WeatherDataTypes.ForecastWeatherData> {
  try {
    const res = await axios.get(
      `data/2.5/weather/?units=metric&q=${cityName}&appid=${API_KEY}`,
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
