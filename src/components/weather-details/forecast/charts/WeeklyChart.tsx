import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "../../../ui/card";

import { useTranslation } from "react-i18next";
import { useWeatherUnitsContext } from "../../../../hooks/context/useWeatherUnitsContext";
import { useForecastTemperature } from "../../../../hooks/useForecastTemperature";

import { useThemeContext } from "../../../../hooks/context/useThemeContext";
import { AvailableDayList } from "./AvailableDayList";

export function WeeklyChart() {
  const [activeDay, setActiveDay] = useState<string | null>(null);

  const { coords } = useParams();
  if (!coords) throw new Error("URL missing params !");
  const lat = +coords.split(",")[0];
  const lon = +coords.split(",")[1];

  const data = useForecastTemperature(lat, lon);

  const handleSetActiveDay = (day: string) => setActiveDay(day);

  const { t } = useTranslation(undefined, { keyPrefix: "chart" });

  useEffect(() => {
    if (data) {
      const matchingDay = data.filter((list) => list.day === activeDay)[0];
      if (!matchingDay) setActiveDay(data[0].day);
    }
    if (data && !activeDay) setActiveDay(data[0].day);
  }, [data, activeDay]);
  const {
    symbol: { degree },
  } = useWeatherUnitsContext();

  const { theme } = useThemeContext();

  return (
    <Card className="weather-card h-96 space-y-4 overflow-hidden !pl-0 pr-8">
      {data && (
        <AvailableDayList
          days={data.map((list) => list.day)}
          activeDay={activeDay!}
          onClick={handleSetActiveDay}
        />
      )}
      {data &&
        data
          .filter((list) => list.day === activeDay)
          .map((filteredData) => (
            <ResponsiveContainer key={activeDay} width="100%" height="100%">
              <LineChart
                height={200}
                data={filteredData.temperature}
                className="-ml-2"
              >
                <XAxis dataKey="time" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke={theme === "dark" ? "#c70039" : "#C7003F"}
                  strokeWidth={2.5}
                  name={degree + "°"}
                />
                <Line
                  type="monotone"
                  dataKey="pop"
                  stroke={theme === "dark" ? "#8FB2F5" : "#8EBCF5"}
                  strokeWidth={2.5}
                  name={t("legend.precipitation")}
                />
              </LineChart>
            </ResponsiveContainer>
          ))}
    </Card>
  );
}
