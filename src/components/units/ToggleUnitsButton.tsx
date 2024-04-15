import { useWeatherUnitsContext } from "../../hooks/context/useWeatherUnitsContext";
import { Button } from "../ui/button";

export const ToggleUnitsButton = () => {
  const { toggleUnits, units } = useWeatherUnitsContext();
  return (
    <div className="absolute inset-x-0 -top-[44px] space-x-2 text-center">
      <Button onClick={toggleUnits} disabled={units === "metric"}>
        C&deg;
      </Button>
      <Button onClick={toggleUnits} disabled={units === "imperial"}>
        F&deg;
      </Button>
    </div>
  );
};
