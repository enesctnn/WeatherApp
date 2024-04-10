import {
  ActionFunctionArgs,
  ParamParseKey,
  Params,
  redirect,
} from "react-router-dom";
import { Logo } from "../components/search/Logo";
import { SearchSection } from "../components/search/SearchSection";
import Routes from "../routes";
import { fetchCoordsByCityName, queryClient } from "../util/http";

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
  const location = formData.get("location") as string;
  const lat = formData.get("lat") as string;
  const lon = formData.get("lon") as string;

  if (lat.trim().length > 0 && lon.trim().length > 0)
    return redirect(`/weather/${lat},${lon}`);

  const data = await queryClient.fetchQuery({
    queryKey: [lat, lon],
    queryFn: ({ signal }) => fetchCoordsByCityName(location, signal),
  });
  if (!data[0]) throw new Error("Couldn't find the place");
  return redirect(`/weather/${data[0].lat},${data[0].lon}`);
}
