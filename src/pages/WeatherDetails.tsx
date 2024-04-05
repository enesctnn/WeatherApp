import { CurrentWeather } from '../components/weather-details/current/CurrentWeather';
import { CurrentWeatherDetails } from '../components/weather-details/current/CurrentWeatherDetails';
import { ForecastWeather } from '../components/weather-details/forecast/ForecastWeather';

import { WeeklyChart } from '../components/weather-details/forecast/charts/WeeklyChart';
import { HomeButton } from '../components/weather-details/HomeButton';
import { WeatherUnitsContextProvider } from '../context/units-context';
import { ToggleUnitsButton } from '../components/units/ToggleUnitsButton';

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
