import {
  ActionFunctionArgs,
  ParamParseKey,
  Params,
  redirect,
} from 'react-router-dom';
import { Logo } from '../components/search/Logo';
import { SearchSection } from '../components/search/SearchSection';
import Routes from '../routes';

const SearchLocationPage = () => (
  <>
    <Logo />
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
        .replace('ş', 's')
        .replace('(', '')
        .replace(')', '')
        .replace(' ', ',');
    }
    return redirect(`/weather/${correctShapedCity}`);
  }

  return null;
}
