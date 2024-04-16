import { useParams } from "react-router-dom";
import { useWeatherUnitsContext } from "../../../hooks/context/useWeatherUnitsContext";
import { useCurrentWeatherData } from "../../../hooks/useCurrentWeatherData";
import { SlideShow } from "../../slide-show/SlideShow";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentWeatherDetails } from "./CurrentWeatherDetails";

export const CurrentWeatherCompWrapper = () => {
  const { coords } = useParams();
  if (!coords) throw new Error("URL missing params !");
  const lat = +coords.split(",")[0];
  const lon = +coords.split(",")[1];
  const data = useCurrentWeatherData(lat, lon);

  const {
    symbol: { degree, speed },
  } = useWeatherUnitsContext();

  return (
    <div className="w-full max-lg:space-y-3 lg:grid lg:grid-cols-2 lg:gap-x-2">
      <div className="space-y-2 lg:flex lg:flex-col">
        <CurrentWeather
          data={data}
          degree={degree}
          coords={{ index: coords, lat, lon }}
        />
        <SlideShow searchTerm={data?.city.name} />
      </div>
      <CurrentWeatherDetails data={data} degree={degree} speed={speed} />
    </div>
  );
};
