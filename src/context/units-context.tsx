import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type UNIT = 'metric' | 'imperial';
type SYMBOL = {
  speed: 'km/h' | 'mph';
  degree: 'C' | 'F';
};

type WeatherUnitsContextT = {
  toggleUnits: () => void;
  units: UNIT;
  symbol: SYMBOL;
};

export const WeatherUnitsContext = createContext<WeatherUnitsContextT>({
  toggleUnits: () => {},
  units: 'metric',
  symbol: { speed: 'km/h', degree: 'C' },
});

export function WeatherUnitsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [units, setUnits] = useLocalStorage<UNIT>('UNIT', 'metric');

  const toggleUnits = () =>
    setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));

  const symbol: SYMBOL = {
    speed: units === 'imperial' ? 'mph' : 'km/h',
    degree: units === 'imperial' ? 'F' : 'C',
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
