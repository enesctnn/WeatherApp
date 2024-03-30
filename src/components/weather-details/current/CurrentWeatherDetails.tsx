import { useLoaderData } from 'react-router-dom';
import { useCurrentWeatherData } from '../../../hooks/useCurrentWeatherData';
import { WeatherDataTypes } from '../../../weather-data';

import { Card } from '../../ui/card';

import {
  CloudArrowDown,
  CloudRain,
  Drop,
  Snowflake,
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
    athmosphericPressure,
    rainVolume,
    snowVolume,
  } = useCurrentWeatherData(loaderData);

  return (
    <Card className="divide-y divide-gray-600 !py-1 !px-4 weather-card">
      <WeatherDetailsArticle
        header="Thermal sensation"
        value={sensation}
        symbol={<>&deg;c</>}
        icon={Thermometer}
        useCounter
      />
      <WeatherDetailsArticle
        header="Probability of rain"
        value={rainProbability}
        symbol="%"
        icon={CloudRain}
        useCounter
      />
      <WeatherDetailsArticle
        header="Wind speed"
        value={windSpeed}
        symbol=" km/h"
        icon={Wind}
        useCounter
      />
      <WeatherDetailsArticle
        header="Air humidity"
        value={humidity}
        symbol="%"
        icon={Drop}
        useCounter
      />
      <WeatherDetailsArticle
        header="Atmospheric Pressure"
        value={athmosphericPressure}
        symbol=" hPa"
        icon={CloudArrowDown}
        useCounter
      />
      {snowVolume?.['1h'] && (
        <WeatherDetailsArticle
          header="Snow Volume (1h)"
          value={snowVolume?.['1h']}
          icon={Snowflake}
          symbol={<> mm&#xb3;</>}
        />
      )}
      {snowVolume?.['3h'] && (
        <WeatherDetailsArticle
          header="Snow Volume (3h)"
          value={snowVolume?.['3h']}
          icon={Snowflake}
          symbol={<> mm&#xb3;</>}
        />
      )}
      {rainVolume?.['1h'] && (
        <WeatherDetailsArticle
          header="Rain Volume (1h)"
          value={rainVolume?.['1h']}
          icon={CloudRain}
          symbol={<> mm&#xb3;</>}
        />
      )}
      {rainVolume?.['3h'] && (
        <WeatherDetailsArticle
          header="Rain Volume (3h)"
          value={rainVolume?.['3h']}
          icon={CloudRain}
          symbol={<> mm&#xb3;</>}
        />
      )}
    </Card>
  );
};
