import { useParams } from "react-router-dom";
import { useForecastData } from "../../../hooks/useForecastData";

import { Card } from "../../ui/card";

import { ForecastArticle } from "./ForecastArticle";

export const ForecastWeather = () => {
  const { cityName } = useParams();
  if (!cityName) throw new Error("Missing URL parameter");
  const forecastData = useForecastData(cityName);
  return (
    <Card className="weather-card !flex min-h-44 !flex-row !p-3">
      {forecastData && (
        <ul className="flex w-full justify-between divide-gray-600 overflow-hidden md:divide-x">
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
