import { SearchBar } from './Searchbar';
import { SearchCurrentLocation } from './SearchCurrentLocation';
import { SearchHeader } from './SearchHeader';

export const SearchSection = () => (
  <section className="text-center pt-40 pb-20 space-y-8">
    <SearchHeader />
    <SearchCurrentLocation />
    <SearchBar />
  </section>
);
