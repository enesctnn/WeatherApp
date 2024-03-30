import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card } from '../../../ui/card';

import { useForecastTemperature } from '../../../../hooks/useForecastTemperature';

import { AvailableDayList } from './AvailableDayList';

export function WeeklyChart() {
  const [activeDay, setActiveDay] = useState<string | null>(null);

  const { cityName } = useParams();
  if (!cityName) throw new Error('URL missing params');

  const data = useForecastTemperature(cityName);

  const handleSetActiveDay = (day: string) => setActiveDay(day);

  return (
    <Card className="weather-card space-y-4 h-96 overflow-hidden !pl-0 pr-10">
      {data && (
        <AvailableDayList
          days={data.map((list) => list.day)}
          activeDay={activeDay || data[0].day}
          onClick={handleSetActiveDay}
        />
      )}
      {data &&
        data
          .filter((list) => list.day === (activeDay || data[0].day))
          .map((filteredData) => (
            <ResponsiveContainer
              key={filteredData.day}
              className=""
              width="100%"
              height="100%"
            >
              <LineChart height={200} data={filteredData.temperature}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#c70039"
                  strokeWidth={3}
                  name="c°"
                />
                <Line
                  type="monotone"
                  dataKey="pop"
                  stroke="#8FB2F5"
                  strokeWidth={3}
                  name="Precipitation %"
                />
              </LineChart>
            </ResponsiveContainer>
          ))}
    </Card>
  );
}
