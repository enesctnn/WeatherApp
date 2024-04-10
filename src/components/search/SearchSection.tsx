import { SearchBar } from "./Searchbar";
import { SearchCurrentLocation } from "./SearchCurrentLocation";
import { SearchHeader } from "./SearchHeader";

export const SearchSection = () => (
  <section className="space-y-8 pb-20 pt-40 text-center">
    <SearchHeader />
    <SearchCurrentLocation />
    <SearchBar />
  </section>
);
