import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type UNIT = "metric" | "imperial";
type SYMBOL = {
  speed: "km/h" | "mph";
  degree: "C" | "F";
};

type WeatherUnitsContextT = {
  toggleUnits: () => void;
  units: UNIT;
  symbol: SYMBOL;
};

export const WeatherUnitsContext = createContext<WeatherUnitsContextT>({
  toggleUnits: () => {},
  units: "metric",
  symbol: { speed: "km/h", degree: "C" },
});

/**
 * Provides a context for managing weather units and symbols in the application.
 * @param {object} props The properties for the WeatherUnitsContextProvider component.
 * @param {React.ReactNode} props.children The child elements to be wrapped by the provider.
 * @returns {JSX.Element} A JSX element representing the WeatherUnitsContextProvider.
 */
export function WeatherUnitsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Represents the current units for weather measurements.
   * @type {UNIT}
   */
  const [units, setUnits] = useLocalStorage<UNIT>("UNIT", "metric");

  /**
   * Toggles between metric and imperial units.
   * @returns {void}
   */
  const toggleUnits = () =>
    setUnits((prevUnits) => (prevUnits === "metric" ? "imperial" : "metric"));

  /**
   * Represents the symbols for different weather measurements.
   * @type {SYMBOL}
   */
  const symbol: SYMBOL = {
    speed: units === "imperial" ? "mph" : "km/h",
    degree: units === "imperial" ? "F" : "C",
  };

  return (
    <WeatherUnitsContext.Provider
      value={{
        toggleUnits,
        units,
        symbol,
      }}
    >
      {children}
    </WeatherUnitsContext.Provider>
  );
}
