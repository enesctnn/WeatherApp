import { useLoaderData } from 'react-router-dom';
import { Card } from '../ui/card';
import { WeatherData } from '../../CurrentResponse';
import { useWeatherData } from '../../hooks/useWeatherData';

export function CurrentWeather() {
  const loaderData = useLoaderData() as WeatherData;
  const { bg, city, date, icon, temp, weather } =
    useWeatherData(loaderData);

  return (
    <Card className="relative flex flex-col items-start justify-between !mt-2 text-gray-50 h-[304px] w-[335px] !bg-transparent overflow-hidden ">
      <header className="w-full z-50">
        <section>
          <h1 className="text-heading-lg">
            {city.name}, {city.country}
          </h1>
        </section>
        <section className="z-50">
          <h2>
            {date.dayString}, {date.month} {date.day}, {date.year}
          </h2>
        </section>
      </header>
      <article className="z-50">
        <section>
          <h2 className="text-heading-xl">{temp.index}&deg;c</h2>
        </section>
        <section className="z-50">
          <h2>
            {temp.min}&deg;c / {temp.max}&deg;c
          </h2>
          <p className="capitalize">{weather}</p>
        </section>
      </article>
      <div className="absolute -bottom-4 -right-4 z-50">
        <img className="w-40 h-40" src={icon.src} alt={icon.alt} />
      </div>
      <div
        className="absolute inset-0 "
        style={{ backgroundImage: `url(${bg.src})` }}
      />
    </Card>
  );
}
