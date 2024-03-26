import { useParams } from 'react-router-dom';
import { useForecastData } from '../../../hooks/useForecastData';
import { Card } from '../../ui/card';

export function ForecastWeather() {
  const { cityName } = useParams();
  if (!cityName) throw new Error('Missing URL parameter');

  const forecastData = useForecastData(cityName);

  console.log(forecastData);
  return (
    <Card className="!p-3 weather-card">
      {forecastData && (
        <div className="flex flex-col w-max items-center">
          <h3 className="text-heading-xs text-gray-200">
            {forecastData[0].day}
          </h3>
          <img
            className="w-[56px] h-[56px]"
            src={forecastData[0].icon.src}
            alt={forecastData[0].icon.alt}
          />
          <div className="space-y-2">
            <p className="text-gray-100 text-heading-xs">
              {forecastData[0].temp.max}&deg;
            </p>
            <p className="text-gray-400 text-heading-xs">
              {forecastData[0].temp.max}&deg;
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
