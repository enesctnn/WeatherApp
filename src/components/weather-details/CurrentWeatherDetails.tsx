import {
  CloudRain,
  Drop,
  SunDim,
  Thermometer,
  Wind,
} from '@phosphor-icons/react';
import { useLoaderData } from 'react-router-dom';
import { useCurrentWeatherData } from '../../hooks/useCurrentWeatherData';
import { WeatherDataTypes } from '../../weather-data';
import { Card } from '../ui/card';
import { WeatherDetailsArticle } from './WeatherDetailsArticle';

function CurrentWeatherDetails() {
  const loaderData = useLoaderData() as WeatherDataTypes.CurrentWeatherData;
  const {
    temp: { sensation },
    windSpeed,
    humidity,
  } = useCurrentWeatherData(loaderData);

  return (
    <Card className="divide-y divide-gray-600 space-y-2 !py-1 !px-4 weather-card">
      <WeatherDetailsArticle
        header="Thermal sensation"
        description={<>{sensation}&deg;c</>}
        icon={Thermometer}
      />
      <WeatherDetailsArticle
        header="Probability of rain"
        description={`5%`}
        icon={CloudRain}
      />
      <WeatherDetailsArticle
        header="Wind speed"
        description={`${windSpeed} km/h`}
        icon={Wind}
      />
      <WeatherDetailsArticle
        header="Air humidity"
        description={`${humidity}%`}
        icon={Drop}
      />
      <WeatherDetailsArticle
        header="UV Index"
        description={'5'}
        icon={SunDim}
      />
    </Card>
  );
}

export default CurrentWeatherDetails;
