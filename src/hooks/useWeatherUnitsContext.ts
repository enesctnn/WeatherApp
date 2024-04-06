import { useContext } from 'react';
import { WeatherUnitsContext } from '../context/units-context';

/**
 * A hook for consuming the WeatherUnitsContext.
 * @returns {WeatherUnitsContextT} - Returns the context value for weather unit and toggleUnit function.
 * @throws Will throw an error if used outside of the FavoriteSearchsContextProvider.
 */
export function useWeatherUnitsContext() {
  const context = useContext(WeatherUnitsContext);
  if (!context) {
    throw new Error(
      'useWeatherUnitsContext must be wrapped with WeatherUnitsContextProvider'
    );
  }
  return context;
}
