import { AxiosError } from 'axios';
import axios from './axios';

import { QueryClient } from '@tanstack/react-query';

import { WeatherDataTypes } from '../weather-data';

export const API_KEY = '175cc3fc29872d7cb42afe08ab37cc80';

/**
 * Tanstack query client for caching the data all over the app.
 * @type {QueryClient}
 */
export const queryClient = new QueryClient();

/**
 * Retrieves the city name from the provided latitude and longitude coordinates.
 * @param {number | undefined} lat - The latitude coordinate.
 * @param {number | undefined} lon - The longitude coordinate.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<string>} A promise that resolves with the city name.
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
 * Retrieves the 5-days 3-hours forecast weather data for the provided latitude and longitude coordinates.
 * @param {number | undefined} lat - The latitude coordinate.
 * @param {number | undefined} lon - The longitude coordinate.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherDataTypes.ForecastWeatherData>} A promise that resolves with the forecast weather data.
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
 * Retrieves the 5-days 3-hours forecast weather data for the provided city name.
 * @param {string} cityName - The name of the city.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherDataTypes.ForecastWeatherData>} A promise that resolves with the forecast weather data.
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
 * Retrieves the current weather data for the provided city name.
 * @param {string} cityName - The name of the city.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherDataTypes.ForecastWeatherData>} A promise that resolves with the current weather data.
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
