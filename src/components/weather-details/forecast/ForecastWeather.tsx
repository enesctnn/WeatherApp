import { useParams } from "react-router-dom";
import { useForecastData } from "../../../hooks/useForecastData";

import { Card } from "../../ui/card";

import { ForecastArticle } from "./ForecastArticle";

export const ForecastWeather = () => {
  const { coords } = useParams();
  if (!coords) throw new Error("Missing URL parameter");
  const lat = +coords.split(",")[0];
  const lon = +coords.split(",")[1];
  const forecastData = useForecastData(lat, lon);

  return (
    <Card className="weather-card !flex min-h-44 !flex-row !p-3">
      {forecastData && (
        <ul className="flex w-full justify-between divide-gray-300 overflow-hidden dark:divide-gray-600 md:divide-x">
          {Object.keys(forecastData).map((key, index) => {
            const data = forecastData[key];
            return (
              <ForecastArticle
                key={key}
                dayString={key}
                index={index}
                icon={data.icon}
                temp={data.temp}
              />
            );
          })}
        </ul>
      )}
    </Card>
  );
};
