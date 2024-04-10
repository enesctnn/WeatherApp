import { AxiosError } from "axios";
import axios from "./axios";

import { QueryClient } from "@tanstack/react-query";

import { WeatherData } from "../weather-data";

import { RADAR_API_KEY } from "./api-keys";

type ParamsT = {
  [key: string]: string;
};

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
  signal: AbortSignal,
  params?: ParamsT,
) {
  const res = await axios.get(
    `geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${RADAR_API_KEY}`,
    { signal, params },
  );
  return res.data[0];
}

/**
 * Retrieves the 5-days 3-hours forecast weather data for the provided latitude and longitude coordinates.
 * @param {number | undefined} lat - The latitude coordinate.
 * @param {number | undefined} lon - The longitude coordinate.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherData.ForecastWeatherData>} A promise that resolves with the forecast weather data.
 */
export async function fetchForecastByCoords(
  lat: number | undefined,
  lon: number | undefined,
  signal: AbortSignal,
  params?: ParamsT,
): Promise<WeatherData.FiveDaysForecast> {
  try {
    const res = await axios.get(
      `data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${RADAR_API_KEY}`,
      { signal, params: { ...params } },
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong while fetching weather by coords !");
  }
}

/**
 * Retrieves the 5-days 3-hours forecast weather data for the provided city name.
 * @param {string} cityName - The name of the city.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherData.ForecastWeatherData>} A promise that resolves with the forecast weather data.
 */
export async function fetchForecastByCityName(
  cityName: string,
  signal: AbortSignal,
  params?: ParamsT,
): Promise<WeatherData.FiveDaysForecast> {
  try {
    const res = await axios.get(
      `data/2.5/forecast/?q=${cityName}&appid=${RADAR_API_KEY}`,
      { signal, params: { ...params } },
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error(
      "Something went wrong while fetching weather by city name !",
    );
  }
}

/**
 * Retrieves the current weather data for the provided city name.
 * @param {number | undefined} lat - The latitude coordinate.
 * @param {number | undefined} lon - The longitude coordinate.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherData.ForecastWeatherData>} A promise that resolves with the current weather data.
 */
export async function fetchCurrentWeatherByCityName(
  cityName: string,
  signal: AbortSignal,
  params?: ParamsT,
): Promise<WeatherData.CurrentWeather> {
  try {
    const res = await axios.get(
      `data/2.5/weather/?q=${cityName}&appid=${RADAR_API_KEY}`,
      { signal, params: { ...params } },
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error(
      "Something went wrong while fetching weather by city name !",
    );
  }
}

/**
 * Retrieves the current weather data for the provided city name.
 * @param {string} cityName - The name of the city.
 * @param {AbortSignal} [signal] - An optional abort signal to cancel the request.
 * @returns {Promise<WeatherData.ForecastWeatherData>} A promise that resolves with the current weather data.
 */
export async function fetchCurrentWeatherByCoords(
  lat: number | undefined,
  lon: number | undefined,
  signal: AbortSignal,
  params?: ParamsT,
): Promise<WeatherData.CurrentWeather> {
  try {
    const res = await axios.get(
      `data/2.5/weather/?lat=${lat}&lon=${lon}&appid=${RADAR_API_KEY}`,
      { signal, params: { ...params } },
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong while fetching weather by coords !");
  }
}
