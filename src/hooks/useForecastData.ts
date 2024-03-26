import { useQuery } from '@tanstack/react-query';
import { getDayString } from '../lib/date';
import { fetchForecastByCityName } from '../util/http';
import { icons } from './../lib/images';

type ForecastObjT = {
  icon: {
    src: string;
    alt: string;
  };
  temp: {
    max: number;
    min: number;
  };
  day: string;
};

export function useForecastData(cityName: string) {
  const { data } = useQuery({
    queryKey: ['forecast', cityName],
    queryFn: ({ signal }) => fetchForecastByCityName(cityName, signal),
  });
  const dayFrequencyCounter: { [key: string]: number } = {};
  if (data) {
    const forecastObjArr = [];
    for (const list of data.list) {
      const dayString = getDayString(list.dt_txt).slice(0, 3);
      dayFrequencyCounter[dayString] = ++dayFrequencyCounter[dayString] || 1;

      if (dayFrequencyCounter[dayString] <= 1) {
        const forecastObj: ForecastObjT = {
          temp: { max: 0, min: 0 },
          icon: { src: icons['01d'].src, alt: icons['01d'].alt },
          day: '',
        };
        forecastObj.day = dayString;
        const iconCode = list.weather[0].icon as keyof typeof icons;
        forecastObj.icon = {
          src: icons[iconCode].src,
          alt: icons[iconCode].alt,
        };
        forecastObj.temp.max = +list.main.temp_max.toFixed();
        forecastObj.temp.min = +list.main.temp_min.toFixed();
        forecastObjArr.push(forecastObj);
      }
    }
    return forecastObjArr;
  }
  return null;
}
