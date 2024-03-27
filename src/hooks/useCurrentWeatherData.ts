import { getDayString, getMonthString } from '../lib/date';
import { bgs, icons } from '../lib/images';
import { WeatherDataTypes } from '../weather-data';
import { useCurrentWeatherPop } from './useCurrentWeatherPop';

type FormattedWeatherData = {
  city: { name: string; country: string };
  weather: string;
  icon: { src: string; alt: string };
  bg: { src: string; alt: string };
  temp: { index: number; max: number; min: number; sensation: number };
  date: { dayString: string; month: string; day: number; year: number };
  windSpeed: number;
  humidity: number;
  rainProbability: number;
};

/**
 * Custom React hook for processing and formatting current weather data.
 * @param {WeatherDataTypes.CurrentWeatherData} data - The current weather data to process.
 * @returns {FormattedWeatherData} The processed current weather data.
 */
export function useCurrentWeatherData(
  data: WeatherDataTypes.CurrentWeatherData
): FormattedWeatherData {
  const rainProbability = useCurrentWeatherPop(data.name);

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
  const month = getMonthString(today);
  const dayString = getDayString(today);
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

  const formattedWeatherData: FormattedWeatherData = {
    city: { name: data.name, country: data.sys.country },
    weather: dataWeather.description,
    icon,
    bg,
    temp,
    date: { dayString, month, day, year },
    windSpeed,
    humidity,
    rainProbability,
  };

  return formattedWeatherData;
}
