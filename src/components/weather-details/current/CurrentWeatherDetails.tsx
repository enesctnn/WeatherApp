import { useParams } from 'react-router-dom';
import { useCurrentWeatherData } from '../../../hooks/useCurrentWeatherData';

import { Card } from '../../ui/card';

import {
  CloudArrowDown,
  CloudRain,
  Drop,
  Snowflake,
  Thermometer,
  Wind,
} from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import { useWeatherUnitsContext } from '../../../hooks/context/useWeatherUnitsContext';
import { WeatherDetailsArticle } from './WeatherDetailsArticle';

export const CurrentWeatherDetails = () => {
  const { cityName } = useParams();

  if (!cityName) throw new Error('URL missing params !');

  const data = useCurrentWeatherData(cityName);

  const { t } = useTranslation(undefined, { keyPrefix: 'weatherdetails' });

  const {
    symbol: { degree, speed },
  } = useWeatherUnitsContext();

  return (
    <Card className="divide-y divide-gray-600 !py-1 !px-4 weather-card">
      {data && (
        <>
          <WeatherDetailsArticle
            header={t('sensation')}
            value={data.temp.sensation}
            symbol={<>&deg;{degree}</>}
            icon={Thermometer}
            useCounter
          />
          <WeatherDetailsArticle
            header={t('poprain')}
            value={data.rainProbability}
            symbol="%"
            icon={CloudRain}
            useCounter
          />
          <WeatherDetailsArticle
            header={t('wind')}
            value={data.windSpeed}
            symbol={' ' + speed}
            icon={Wind}
            useCounter
          />
          <WeatherDetailsArticle
            header={t('humidity')}
            value={data.humidity}
            symbol="%"
            icon={Drop}
            useCounter
          />
          <WeatherDetailsArticle
            header={t('atmosphericpressure')}
            value={data.atmosphericPressure}
            symbol=" hPa"
            icon={CloudArrowDown}
            useCounter
          />
          {data.snowVolume?.['1h'] && (
            <WeatherDetailsArticle
              header={t('snowvalue') + ' (1h)'}
              value={data.snowVolume?.['1h']}
              icon={Snowflake}
              symbol={<> mm&#xb3;</>}
            />
          )}
          {data.snowVolume?.['3h'] && (
            <WeatherDetailsArticle
              header={t('snowvalue') + ' (3h)'}
              value={data.snowVolume?.['3h']}
              icon={Snowflake}
              symbol={<> mm&#xb3;</>}
            />
          )}
          {data.rainVolume?.['1h'] && (
            <WeatherDetailsArticle
              header={t('rainvalue') + ' (1h)'}
              value={data.rainVolume?.['1h']}
              icon={CloudRain}
              symbol={<> mm&#xb3;</>}
            />
          )}
          {data.rainVolume?.['3h'] && (
            <WeatherDetailsArticle
              header={t('rainvalue') + ' (3h)'}
              value={data.rainVolume?.['3h']}
              icon={CloudRain}
              symbol={<> mm&#xb3;</>}
            />
          )}
        </>
      )}
    </Card>
  );
};
