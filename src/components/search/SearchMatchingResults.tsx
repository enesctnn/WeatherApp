import { Country, IState } from 'country-state-city';
import { Card } from '../ui/card';

export const SearchMatchingResults = ({
  currentCities,
  onSelect,
}: {
  currentCities: IState[];
  onSelect: (cityName: string) => void;
}) => (
  <Card className="w-full !bg-transparent mt-2 !rounded-lg !p-0 overflow-hidden">
    <ul className="flex flex-col gap-y-[1px] ">
      {currentCities.map((city, index) => (
        <li key={index} className="w-full bg-gray-500">
          <button
            type="button"
            className="text-start flex text-gray-100 text-md !px-5 !py-4 w-full"
            onClick={onSelect.bind(null, city.name)}
          >
            {city.name} - {Country.getCountryByCode(city.countryCode)?.name}
          </button>
        </li>
      ))}
    </ul>
  </Card>
);
