import { useQuery } from '@tanstack/react-query';
import { getDayString } from '../lib/date';
import { fetchForecastByCityName } from '../util/http';
import { icons } from './../lib/images';

export function useForecastWeatherData(cityName: string) {
  const { data } = useQuery({
    queryKey: ['forecast', cityName],
    queryFn: ({ signal }) => fetchForecastByCityName(cityName, signal),
  });
  const forecastObj: {
    icon: {
      src: string;
      alt: string;
    };
    temp: {
      max: number;
      min: number;
    };
    day: string;
  } = {
    temp: { max: 0, min: 0 },
    icon: { src: icons['01d'].src, alt: icons['01d'].alt },
    day: '',
  };

  const forecastObjArr: (typeof forecastObj)[] = [];

  if (data) {
    for (const list of data.list) {
      forecastObj.day = getDayString(list.dt_txt);
      const iconCode = list.weather[0].icon as keyof typeof icons;
      forecastObj.icon = { src: icons[iconCode].src, alt: icons[iconCode].alt };
      forecastObj.temp.max = list.main.temp_max;
      forecastObj.temp.min = list.main.temp_min;
      forecastObjArr.push(forecastObj);
    }
  }

  return forecastObj;
}
