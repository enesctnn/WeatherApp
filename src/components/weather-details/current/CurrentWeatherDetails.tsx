import { FormattedWeatherData } from "../../../hooks/useCurrentWeatherData";

import { Card } from "../../ui/card";

import {
  CloudArrowDown,
  CloudRain,
  Drop,
  Eye,
  Snowflake,
  Thermometer,
  Wind,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { CurrentWeatherDetailsArticle } from "./CurrentWeatherDetailsArticle";

export const CurrentWeatherDetails = ({
  data,
  degree,
  speed,
}: {
  data: FormattedWeatherData | null;
  degree: "C" | "F";
  speed: "mph" | "km/h";
}) => {
  const { t } = useTranslation(undefined, { keyPrefix: "weatherdetails" });
  return (
    <Card className="weather-card divide-y divide-gray-600 !px-4 !py-1 lg:flex lg:flex-col lg:justify-between ">
      {data && (
        <>
          <CurrentWeatherDetailsArticle
            header={t("sensation")}
            value={data.temp.sensation}
            symbol={<>&deg;{degree}</>}
            icon={Thermometer}
            useCounter
          />
          <CurrentWeatherDetailsArticle
            header={t("poprain")}
            value={data.rainProbability}
            symbol="%"
            icon={CloudRain}
            useCounter
          />
          <CurrentWeatherDetailsArticle
            header={t("wind")}
            value={data.windSpeed}
            symbol={" " + speed}
            icon={Wind}
            useCounter
          />
          <CurrentWeatherDetailsArticle
            header={t("humidity")}
            value={data.humidity}
            symbol="%"
            icon={Drop}
            useCounter
          />
          <CurrentWeatherDetailsArticle
            header={t("atmosphericpressure")}
            value={data.atmosphericPressure}
            symbol=" hPa"
            icon={CloudArrowDown}
            useCounter
          />
          <CurrentWeatherDetailsArticle
            header={t("sunrise")}
            value={data.city.sunrise}
            icon={GiSunrise}
          />
          <CurrentWeatherDetailsArticle
            header={t("sunset")}
            value={data.city.sunset}
            icon={GiSunset}
          />
          <CurrentWeatherDetailsArticle
            header={t("visibility")}
            symbol=" km"
            value={data.visibility}
            icon={Eye}
          />
          {data.snowVolume?.["1h"] && (
            <CurrentWeatherDetailsArticle
              header={t("snowvalue") + " (1h)"}
              value={data.snowVolume?.["1h"]}
              icon={Snowflake}
              symbol={<> mm&#xb3;</>}
            />
          )}
          {data.snowVolume?.["3h"] && (
            <CurrentWeatherDetailsArticle
              header={t("snowvalue") + " (3h)"}
              value={data.snowVolume?.["3h"]}
              icon={Snowflake}
              symbol={<> mm&#xb3;</>}
            />
          )}
          {data.rainVolume?.["1h"] && (
            <CurrentWeatherDetailsArticle
              header={t("rainvalue") + " (1h)"}
              value={data.rainVolume?.["1h"]}
              icon={CloudRain}
              symbol={<> mm&#xb3;</>}
            />
          )}
          {data.rainVolume?.["3h"] && (
            <CurrentWeatherDetailsArticle
              header={t("rainvalue") + " (3h)"}
              value={data.rainVolume?.["3h"]}
              icon={CloudRain}
              symbol={<> mm&#xb3;</>}
            />
          )}
        </>
      )}
    </Card>
  );
};
