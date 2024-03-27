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
    <Card className="divide-y divide-gray-600  !py-1 !px-4 weather-card">
      <WeatherDetailsArticle
        header="Thermal sensation"
        value={sensation}
        symbol={<>&deg;c</>}
        icon={Thermometer}
      />
      <WeatherDetailsArticle
        header="Probability of rain"
        value={rainProbability}
        symbol="%"
        icon={CloudRain}
      />
      <WeatherDetailsArticle
        header="Wind speed"
        value={windSpeed}
        symbol=" km/h"
        icon={Wind}
      />
      <WeatherDetailsArticle
        header="Air humidity"
        value={humidity}
        symbol="%"
        icon={Drop}
      />
      {/* TODO: Find an Api to get UVI by cityname or coords */}
      <WeatherDetailsArticle header="UV Index" value={5} icon={SunDim} />
    </Card>
  );
};
