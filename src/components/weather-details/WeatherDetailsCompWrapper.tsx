import { CurrentWeatherCompWrapper } from "./current/CurrentWeatherCompWrapper";
import { ForecastCompWrapper } from "./forecast/ForecastCompWrapper";

export const WeatherDetailsCompWrapper = () => (
  <div className="relative mx-auto mb-12 mt-3 space-y-3 sm:w-4/5">
    <CurrentWeatherCompWrapper />
    <ForecastCompWrapper />
  </div>
);
