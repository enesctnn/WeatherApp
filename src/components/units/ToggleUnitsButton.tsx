import { useWeatherUnitsContext } from '../../hooks/useWeatherUnitsContext';
import { Button } from '../ui/button';

export const ToggleUnitsButton = () => {
  const { toggleUnits, units } = useWeatherUnitsContext();
  return (
    <div className="absolute text-center inset-x-0 -top-10 space-x-2">
      <Button onClick={toggleUnits} disabled={units === 'metric'}>
        C&deg;
      </Button>
      <Button onClick={toggleUnits} disabled={units === 'imperial'}>
        F&deg;
      </Button>
    </div>
  );
};