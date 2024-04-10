import { createContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Represents the unit of measurement for weather data.
 */
type UNIT = "metric" | "imperial";

/**
 * Represents the symbols used for weather measurements.
 */
type SYMBOL = {
  speed: "km/h" | "mph";
  degree: "C" | "F";
};

/**
 * Defines the shape of the WeatherUnitsContext.
 */
type WeatherUnitsContextT = {
  toggleUnits: () => void;
  units: UNIT;
  symbol: SYMBOL;
};

/**
 * Context for managing weather units and symbols in the application.
 */
export const WeatherUnitsContext = createContext<WeatherUnitsContextT>({
  toggleUnits: () => {},
  units: "metric",
  symbol: { speed: "km/h", degree: "C" },
});

/**
 * Provides a context for managing weather units and symbols in the application.
 * @param props The properties for the WeatherUnitsContextProvider component.
 * @param props.children The child elements to be wrapped by the provider.
 * @returns A JSX element representing the WeatherUnitsContextProvider.
 */
export function WeatherUnitsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  /**
   * Represents the current units for weather measurements.
   */
  const [units, setUnits] = useLocalStorage<UNIT>("UNIT", "metric");

  /**
   * Toggles between metric and imperial units.
   */
  const toggleUnits = (): void =>
    setUnits((prevUnits) => (prevUnits === "metric" ? "imperial" : "metric"));

  /**
   * Represents the symbols for different weather measurements.
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
