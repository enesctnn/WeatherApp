import { useParams } from "react-router-dom";
import { useCurrentWeatherData } from "../../../hooks/useCurrentWeatherData";
import { useWeatherUnitsContext } from "../../../hooks/context/useWeatherUnitsContext";

import { ToggleFavoriteButton } from "../../favorites/ToggleFavoriteButton";
import { Card } from "../../ui/card";

export const CurrentWeather = () => {
  const { coords } = useParams();
  if (!coords) throw new Error("URL missing params !");
  const lat = +coords.split(",")[0];
  const lon = +coords.split(",")[1];
  const data = useCurrentWeatherData(lat, lon);

  const {
    symbol: { degree },
  } = useWeatherUnitsContext();

  return (
    <Card className="weather-card relative flex h-[328px] flex-col justify-between overflow-hidden !p-7 text-gray-50">
      {data && (
        <>
          <header className="z-50 flex justify-between">
            <div>
              <h1 className="weather-heading">
                {data.city.name}, {data.city.country}
              </h1>
              <p className="text-xs transition-[font-size] sm:text-sm md:text-md">
                {data.date.dayString}, {data.date.month} {data.date.day},{" "}
                {data.date.year}
              </p>
            </div>
            <ToggleFavoriteButton
              placeName={data.city.name + "-" + data.city.country}
              lat={lat}
              lon={lon}
            />
          </header>
          <article className="z-50 flex place-content-between items-end">
            <section className="flex-1 space-y-2">
              <h2 className="weather-article-heading">
                {data.temp.index}&deg;{degree}
              </h2>
              <div>
                <h3 className="text-heading-sm transition-[font-size] md:text-heading-md">
                  {data.temp.min}&deg;{degree} / {data.temp.max}&deg;{degree}
                </h3>
                <p className="text-sm capitalize transition-[font-size] sm:text-md md:text-lg">
                  {data.weather}
                </p>
              </div>
            </section>
            <div className="-mb-5 -mr-5 flex-[1.2] overflow-hidden">
              <img
                className="ml-auto max-h-44 max-w-40"
                src={data.icon.src}
                alt={data.icon.alt}
              />
            </div>
          </article>
          <div
            style={{ backgroundImage: `url(${data.bg.src})` }}
            className="absolute inset-3 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat "
          />
        </>
      )}
    </Card>
  );
};
