import { useParams } from 'react-router-dom';
import { useForecastData } from '../../../hooks/useForecastData';

import { Card } from '../../ui/card';

import { ForecastArticle } from './ForecastArticle';

export const ForecastWeather = () => {
  const { cityName } = useParams();
  if (!cityName) throw new Error('Missing URL parameter');
  const forecastData = useForecastData(cityName);
  return (
    <Card className="!p-3 weather-card !flex !flex-row min-h-44">
      {forecastData && (
        <ul className="flex justify-between w-full md:divide-x divide-gray-600 overflow-hidden">
          {Object.keys(forecastData).map((key, index) => {
            const data = forecastData[key];
            return (
              <ForecastArticle
                dayString={key}
                index={index}
                icon={data.icon}
                temp={data.temp}
              />
            );
          })}
        </ul>
      )}
    </Card>
  );
};
