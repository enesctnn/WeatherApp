import { CurrentWeather } from '../components/weather-details/current/CurrentWeather';
import { CurrentWeatherDetails } from '../components/weather-details/current/CurrentWeatherDetails';
import { ForecastWeather } from '../components/weather-details/forecast/ForecastWeather';

import { WeeklyChart } from '../components/weather-details/forecast/charts/WeeklyChart';
import { HomeButton } from '../components/weather-details/HomeButton';

const WeatherDetailsPage = () => (
  <div className="space-y-3 my-4">
    <HomeButton />
    <CurrentWeather />
    <CurrentWeatherDetails />
    <ForecastWeather />
    <WeeklyChart />
  </div>
);

export default WeatherDetailsPage;
