import { useParams } from "react-router-dom";
import { useWeatherUnitsContext } from "../../../hooks/context/useWeatherUnitsContext";
import { useCurrentWeatherData } from "../../../hooks/useCurrentWeatherData";

import { ToggleFavoriteButton } from "../../favorites/ToggleFavoriteButton";
import { Card } from "../../ui/card";
import { CurrentWeatherArticle } from "./CurrentWeatherArticle";

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
          <CurrentWeatherArticle
            key={coords}
            degree={degree}
            temp={data.temp}
            icon={data.icon}
            bg={data.bg}
            weather={data.weather}
          />
        </>
      )}
    </Card>
  );
};
