import { useParams } from "react-router-dom";
import { WeatherMap } from "../weathermap/WeatherMap";
import { WeeklyChart } from "./charts/WeeklyChart";
import { ForecastWeather } from "./ForecastWeather";

export function ForecastCompWrapper() {
  const { coords } = useParams();
  if (!coords) throw new Error("URL missing Params");
  const lat = +coords.split(",")[0];
  const lon = +coords.split(",")[1];

  return (
    <>
      <ForecastWeather coords={{ lat, lon }} />
      <div className="h-full gap-x-2 max-lg:space-y-3 lg:grid lg:h-[500px] lg:grid-cols-2">
        <WeatherMap coords={{ lat, lon }} />
        <WeeklyChart coords={{ lat, lon }} />
      </div>
    </>
  );
}
