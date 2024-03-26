import {
  json,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
} from 'react-router-dom';
import { CurrentWeather } from '../components/weather-details/CurrentWeather';
import Routes from '../routes';
import { fetchWeatherByCityName, queryClient } from '../util/http';

function WeatherDetailsPage() {
  return <CurrentWeather />;
}

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
      queryFn: ({ signal }) => fetchWeatherByCityName(cityName, signal),
      // auto invalidate time set to 10 minutes
      staleTime: 100000 * 60,
      // delete unused queries from memory after 5 minutes
      gcTime: 50000 * 60,
    });
  } else {
    throw json({ message: 'URL Missing Params.' }, { status: 422 });
  }
}
