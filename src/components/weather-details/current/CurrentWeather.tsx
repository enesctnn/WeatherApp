import { useParams } from 'react-router-dom';
import { useCurrentWeatherData } from '../../../hooks/useCurrentWeatherData';
import { useWeatherUnitsContext } from '../../../hooks/useWeatherUnitsContext';

import { ToggleFavoriteButton } from '../../favorites/ToggleFavoriteButton';
import { Card } from '../../ui/card';

export const CurrentWeather = () => {
  const { cityName } = useParams();
  if (!cityName) throw new Error('URL missing params !');

  const data = useCurrentWeatherData(cityName);
  const {
    symbol: { degree },
  } = useWeatherUnitsContext();

  return (
    <Card className="overflow-hidden text-gray-50 h-[328px] flex flex-col relative !p-7 justify-between weather-card">
      {data && (
        <>
          <header className="z-50 flex justify-between">
            <div>
              <h1 className="weather-heading">
                {data.city.name}, {data.city.country}
              </h1>
              <p className="text-xs sm:text-sm md:text-md transition-[font-size]">
                {data.date.dayString}, {data.date.month} {data.date.day},{' '}
                {data.date.year}
              </p>
            </div>
            <ToggleFavoriteButton cityName={data.city.name} />
          </header>
          <article className="z-50 flex items-end place-content-between">
            <section className="flex-1 space-y-2">
              <h2 className="weather-article-heading">
                {data.temp.index}&deg;{degree}
              </h2>
              <div>
                <h3 className="text-heading-sm md:text-heading-md transition-[font-size]">
                  {data.temp.min}&deg;{degree} / {data.temp.max}&deg;{degree}
                </h3>
                <p className="capitalize text-sm sm:text-md md:text-lg transition-[font-size]">
                  {data.weather}
                </p>
              </div>
            </section>
            <div className="flex-[1.2] -mb-5 -mr-5 overflow-hidden">
              <img
                className="max-w-40 max-h-44 ml-auto"
                src={data.icon.src}
                alt={data.icon.alt}
              />
            </div>
          </article>
          <div
            style={{ backgroundImage: `url(${data.bg.src})` }}
            className="absolute inset-3 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat"
          />
        </>
      )}
    </Card>
  );
};
