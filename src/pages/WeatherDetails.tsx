import {
  json,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
} from 'react-router-dom';
import Routes from '../routes';

import { CurrentWeather } from '../components/weather-details/current/CurrentWeather';
import { CurrentWeatherDetails } from '../components/weather-details/current/CurrentWeatherDetails';
import { ForecastWeather } from '../components/weather-details/forecast/ForecastWeather';

import { WeeklyChart } from '../components/weather-details/forecast/charts/WeeklyChart';
import { HomeButton } from '../components/weather-details/HomeButton';
import { fetchCurrentWeatherByCityName, queryClient } from '../util/http';

const WeatherDetailsPage = () => (
  <div className="space-y-3 my-4">
    <HomeButton />
    <CurrentWeather />
    <CurrentWeatherDetails />
    <ForecastWeather />
    <WeeklyChart />
  </div>
);

interface WeatherDetailsLoaderArgs extends LoaderFunctionArgs {
  params: Params<ParamParseKey<typeof Routes.weatherDetails>>;
}

export default WeatherDetailsPage;

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }: WeatherDetailsLoaderArgs) {
  if (params.cityName && params.cityName.trim().length > 0) {
    const cityName = params.cityName.replace('%20', '');
    return queryClient.fetchQuery({
      queryKey: [cityName],
      queryFn: ({ signal }) => fetchCurrentWeatherByCityName(cityName, signal),
      // auto invalidate time set to 3 minutes
      staleTime: 1000 * 60 * 3,
      // delete unused queries from memory after 2 minutes
      gcTime: 1000 * 60 * 2,
    });
  }
  throw json({ message: 'URL Missing Params.' }, { status: 422 });
}
