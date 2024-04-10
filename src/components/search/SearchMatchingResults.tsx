import AutoPlaceCompleteAPI from "../../auto-complete-response";
import { Card } from "../ui/card";

export const SearchMatchingResults = ({
  currentPlaces,
  onSelect,
}: {
  currentPlaces: AutoPlaceCompleteAPI.Address[];
  onSelect: (cityName: string) => void;
}) => (
  <Card className="mt-2 w-full overflow-hidden !rounded-lg !bg-transparent !p-0">
    <ul className="flex flex-col gap-y-[1px] ">
      {currentPlaces.map((place, index) => (
        <li key={index} className="w-full bg-gray-500">
          <button
            type="button"
            className="flex w-full !px-5 !py-4 text-start text-md text-gray-100"
            onClick={onSelect.bind(
              null,
              (place.county ? place.county + "," : "") +
                (place.city
                  ? place.city + ","
                  : place.stateCode
                    ? place.stateCode + ","
                    : "") +
                (place.countryCode ?? ""),
            )}
          >
            {place.city || place.addressLabel}
            {place.county && ", " + place.county}
            {place.countryCode && " - " + place.countryCode}
          </button>
        </li>
      ))}
    </ul>
  </Card>
);
