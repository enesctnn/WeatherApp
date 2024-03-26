import { bgs, icons } from '../lib/images';

import { getDayString, getMonthString } from '../lib/date';
import { WeatherDataTypes } from '../weather-data';

export function useCurrentWeatherData(
  data: WeatherDataTypes.CurrentWeatherData
) {
  const dataWeather = data.weather[0];

  const iconCode = dataWeather.icon as keyof typeof icons;
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
    index: data.main.temp.toFixed(),
    max: data.main.temp_max.toFixed(),
    min: data.main.temp_min.toFixed(),
    sensation: data.main.feels_like.toFixed(),
  };

  const weatherObj = {
    city: { name: data.name, country: data.sys.country },
    weather: dataWeather.description,
    icon,
    bg,
    temp,
    date: { dayString, month, day, year },
    // incoming windSpeed value is meter/sec next line of code is to convert it to km/h
    windSpeed: ((data.wind.speed / 1000) * (60 * 60)).toFixed(),
    humidity: data.main.humidity.toFixed(),
  };

  return weatherObj;
}
