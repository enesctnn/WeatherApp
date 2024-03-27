import {
  ActionFunctionArgs,
  ParamParseKey,
  Params,
  redirect,
} from 'react-router-dom';
import { Header } from '../components/search/Header';
import { SearchSection } from '../components/search/SearchSection';
import Routes from '../routes';

const SearchLocationPage = () => (
  <>
    <Header />
    <SearchSection />
  </>
);

export default SearchLocationPage;

interface SearchBarActionArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Routes.searchLocation>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: SearchBarActionArgs) {
  const formData = await request.formData();
  const cityName = formData.get('location') as string | null;

  if (!!cityName && cityName.trim().length > 0) {
    let correctShapedCity = '';
    for (const letter of cityName) {
      correctShapedCity += letter
        .split('ı')
        .join('i')
        .split('İ')
        .join('I')
        .toLowerCase()
        .replace('ğ', 'g')
        .replace('ç', 'c')
        .replace('ü', 'u')
        .replace('ö', 'o')
        .replace('ş', 's');
    }
    return redirect(`/weather/${correctShapedCity}`);
  }

  return null;
}

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  if (navigator.geolocation) {
    const coords: {
      lat: number | undefined;
      lon: number | undefined;
      permission: boolean | null;
    } = {
      lat: undefined,
      lon: undefined,
      permission: false,
    };
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        coords.lat = position.coords.latitude;
        coords.lon = position.coords.longitude;
        coords.permission = true;
      }
    });
    return coords;
  }
  return { message: 'Geolocation is not supported by this browser. ' };
}
