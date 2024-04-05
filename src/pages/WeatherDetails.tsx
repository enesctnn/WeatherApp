import { CurrentWeather } from '../components/weather-details/current/CurrentWeather';
import { CurrentWeatherDetails } from '../components/weather-details/current/CurrentWeatherDetails';
import { ForecastWeather } from '../components/weather-details/forecast/ForecastWeather';

import {
  json,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
} from 'react-router-dom';

import { ToggleUnitsButton } from '../components/units/ToggleUnitsButton';
import { WeeklyChart } from '../components/weather-details/forecast/charts/WeeklyChart';
import { HomeButton } from '../components/weather-details/HomeButton';
import { WeatherUnitsContextProvider } from '../context/units-context';
import Routes from '../routes/index';
import { fetchCurrentWeatherByCityName, queryClient } from '../util/http';

const WeatherDetailsPage = () => (
  <WeatherUnitsContextProvider>
    <div className="space-y-3 my-12 relative">
      <ToggleUnitsButton />
      <HomeButton />
      <CurrentWeather />
      <CurrentWeatherDetails />
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
  if (params.cityName && params.cityName.trim().length > 0) {
    const cityName = params.cityName.replace('%20', '');
    const lang = JSON.parse(JSON.stringify(localStorage.getItem('i18nextLng')));
    const units = JSON.parse(JSON.stringify(localStorage.getItem('UNIT')));
    return queryClient.fetchQuery({
      queryKey: [cityName, lang, units],
      queryFn: ({ signal }) =>
        fetchCurrentWeatherByCityName(cityName, signal, { lang, units }),
      // auto invalidate time set to 3 minutes
      staleTime: 1000 * 60 * 3,
      // delete unused queries from memory after 2 minutes
      gcTime: 1000 * 60 * 2,
    });
  }
  throw json({ message: 'URL Missing Params.' }, { status: 422 });
}
