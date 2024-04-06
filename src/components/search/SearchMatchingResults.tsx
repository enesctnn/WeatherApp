import AutoPlaceCompleteAPI from '../../auto-complete-response';
import { Card } from '../ui/card';

export const SearchMatchingResults = ({
  currentPlaces,
  onSelect,
}: {
  currentPlaces: AutoPlaceCompleteAPI.Address[];
  onSelect: (cityName: string) => void;
}) => (
  <Card className="w-full !bg-transparent mt-2 !rounded-lg !p-0 overflow-hidden">
    <ul className="flex flex-col gap-y-[1px] ">
      {currentPlaces.map((place, index) => (
        <li key={index} className="w-full bg-gray-500">
          <button
            type="button"
            className="text-start flex text-gray-100 text-md !px-5 !py-4 w-full"
            onClick={onSelect.bind(
              null,
              (place.county ? place.county + ',' : '') +
                (place.city
                  ? place.city + ','
                  : place.stateCode
                  ? place.stateCode + ','
                  : '') +
                (place.countryCode ?? '')
            )}
          >
            {place.city || place.addressLabel}
            {place.county && ', ' + place.county}
            {place.countryCode && ' - ' + place.countryCode}
          </button>
        </li>
      ))}
    </ul>
  </Card>
);
