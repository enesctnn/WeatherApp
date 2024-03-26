import { bgs, icons } from './../lib/images';
import { WeatherData } from '../CurrentResponse';
import { getDayString, getMonthString } from '../lib/date';

export function useWeatherData(data: WeatherData) {
  const firstItem = data.list[0];

  const firstItemWeather = firstItem.weather[0];

  const iconCode = firstItemWeather.icon as keyof typeof icons;
  const icon: { src: string; alt: string } = { src: '', alt: '' };
  icon.src = icons[iconCode].src;
  icon.alt = icons[iconCode].alt;

  const bg: { src: string; alt: string } = { src: '', alt: '' };
  bg.src = bgs[iconCode].src;
  bg.alt = bgs[iconCode].alt;

  const d = new Date(firstItem.dt_txt);
  const month = getMonthString(d);
  const dayString = getDayString(d);
  const day = d.getDay();
  const year = d.getFullYear();

  const weatherObj = {
    city: { name: data.city.name, country: data.city.country },
    probability: firstItem.pop * 100,
    weather: firstItemWeather.description,
    icon,
    bg,
    temp: {
      index: firstItem.main.temp.toFixed(),
      max: firstItem.main.temp_max.toFixed(),
      min: firstItem.main.temp_min.toFixed(),
    },
    date: { dayString, month, day, year },
  };

  return weatherObj;
}
