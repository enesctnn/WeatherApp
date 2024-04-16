import { ToggleUnitsButton } from "../units/ToggleUnitsButton";
import { CurrentWeatherCompWrapper } from "./current/CurrentWeatherCompWrapper";
import { ForecastCompWrapper } from "./forecast/ForecastCompWrapper";

export const WeatherDetailsCompWrapper = () => (
  <div className="relative mx-auto mb-12 mt-10 space-y-3 sm:w-4/5">
    <ToggleUnitsButton />
    <CurrentWeatherCompWrapper />
    <ForecastCompWrapper />
  </div>
);
