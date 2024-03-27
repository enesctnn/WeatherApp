import { useLoaderData } from 'react-router-dom';
import { useCurrentWeatherData } from '../../../hooks/useCurrentWeatherData';

import { WeatherDataTypes } from '../../../weather-data';

import { Card } from '../../ui/card';

export const CurrentWeather = () => {
  const loaderData = useLoaderData() as WeatherDataTypes.CurrentWeatherData;
  const {
    bg,
    city,
    date,
    icon,
    temp: { max, index, min },
    weather,
  } = useCurrentWeatherData(loaderData);

  return (
    <Card className="overflow-hidden text-gray-50 h-[328px] flex flex-col relative !p-7 justify-between weather-card">
      <header className="z-50">
        <h1 className="weather-heading">
          {city.name}, {city.country}
        </h1>
        <p className="text-xs sm:text-sm md:text-md transition-[font-size]">
          {date.dayString}, {date.month} {date.day}, {date.year}
        </p>
      </header>
      <article className="z-50 flex items-end place-content-between">
        <section className="flex-1 space-y-2">
          <h2 className="weather-article-heading">{index}&deg;c</h2>
          <div>
            <h3 className="text-heading-sm md:text-heading-md transition-[font-size]">
              {min}&deg;c / {max}&deg;c
            </h3>
            <p className="capitalize text-sm sm:text-md md:text-lg transition-[font-size]">
              {weather}
            </p>
          </div>
        </section>
        <div className="flex-[1.2] -mb-5 -mr-5 overflow-hidden">
          <img
            className="max-w-40 max-h-44 ml-auto"
            src={icon.src}
            alt={icon.alt}
          />
        </div>
      </article>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="absolute inset-3 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat"
      />
    </Card>
  );
};
