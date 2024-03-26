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

import { fetchCurrentWeatherByCityName, queryClient } from '../util/http';

const WeatherDetailsPage = () => (
  <div className="space-y-2">
    <CurrentWeather />
    <CurrentWeatherDetails />
    <ForecastWeather />
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
      // auto invalidate time set to 10 minutes
      staleTime: 100000 * 60,
      // delete unused queries from memory after 5 minutes
      gcTime: 50000 * 60,
    });
  }
  throw json({ message: 'URL Missing Params.' }, { status: 422 });
}
