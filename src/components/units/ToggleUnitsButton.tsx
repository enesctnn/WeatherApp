import { useWeatherUnitsContext } from "../../hooks/context/useWeatherUnitsContext";
import { Button } from "../ui/button";

export const ToggleUnitsButton = () => {
  const { toggleUnits, units } = useWeatherUnitsContext();
  return (
    <div className="space-x-2">
      <Button onClick={toggleUnits} disabled={units === "metric"}>
        C&deg;
      </Button>
      <Button onClick={toggleUnits} disabled={units === "imperial"}>
        F&deg;
      </Button>
    </div>
  );
};
