import { ForecastWeather } from "../components/weather-details/forecast/ForecastWeather";

import {
  json,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
} from "react-router-dom";

import { ToggleUnitsButton } from "../components/units/ToggleUnitsButton";
import { CurrentWeatherCompWrapper } from "../components/weather-details/current/CurrentWeatherCompWrapper";
import { WeeklyChart } from "../components/weather-details/forecast/charts/WeeklyChart";
import { HomeButton } from "../components/weather-details/HomeButton";
import { WeatherUnitsContextProvider } from "../context/units-context";
import Routes from "../routes/index";
import { fetchCurrentWeatherByCoords, queryClient } from "../util/http-weather";

const WeatherDetailsPage = () => (
  <WeatherUnitsContextProvider>
    <div className="relative mx-auto mb-12 mt-10 space-y-3 sm:w-2/3">
      <ToggleUnitsButton />
      <HomeButton />
      <CurrentWeatherCompWrapper />
      <ForecastWeather />
      <WeeklyChart />
    </div>
  </WeatherUnitsContextProvider>
);

export default WeatherDetailsPage;
interface WeatherDetailsLoaderArgs extends LoaderFunctionArgs {
  params: Params<ParamParseKey<typeof Routes.weatherDetails>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }: WeatherDetailsLoaderArgs) {
  if (params.coords && params.coords.trim().length > 0) {
    const lat = +params.coords.split(",")[0];
    const lon = +params.coords.split(",")[1];
    const lang = JSON.parse(JSON.stringify(localStorage.getItem("i18nextLng")));
    const units = JSON.parse(JSON.stringify(localStorage.getItem("UNIT")));
    return queryClient.fetchQuery({
      queryKey: ["current", lat, lon, lang, units],
      queryFn: ({ signal }) =>
        fetchCurrentWeatherByCoords(lat, lon, signal, { lang, units }),
      // auto invalidate time set to 5 minutes
      staleTime: 1000 * 60 * 5,
    });
  }
  throw json({ message: "URL Missing Params." }, { status: 422 });
}
