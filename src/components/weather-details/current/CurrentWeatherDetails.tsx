import { useLoaderData } from 'react-router-dom';
import { useCurrentWeatherData } from '../../../hooks/useCurrentWeatherData';
import { WeatherDataTypes } from '../../../weather-data';

import { Card } from '../../ui/card';

import {
  CloudRain,
  Drop,
  SunDim,
  Thermometer,
  Wind,
} from '@phosphor-icons/react';
import { WeatherDetailsArticle } from './WeatherDetailsArticle';

export const CurrentWeatherDetails = () => {
  const loaderData = useLoaderData() as WeatherDataTypes.CurrentWeatherData;
  const {
    temp: { sensation },
    windSpeed,
    humidity,
    rainProbability,
  } = useCurrentWeatherData(loaderData);

  return (
    <Card className="divide-y divide-gray-600 space-y-2 !py-1 !px-4 weather-card">
      <WeatherDetailsArticle
        key={sensation}
        header="Thermal sensation"
        value={sensation}
        symbol={<>&deg;c</>}
        icon={Thermometer}
      />
      <WeatherDetailsArticle
        key={rainProbability}
        header="Probability of rain"
        value={rainProbability}
        symbol="%"
        icon={CloudRain}
      />
      <WeatherDetailsArticle
        key={windSpeed}
        header="Wind speed"
        value={windSpeed}
        symbol=" km/h"
        icon={Wind}
      />
      <WeatherDetailsArticle
        key={humidity}
        header="Air humidity"
        value={humidity}
        symbol="%"
        icon={Drop}
      />
      <WeatherDetailsArticle header="UV Index" value={5} icon={SunDim} />
    </Card>
  );
};
