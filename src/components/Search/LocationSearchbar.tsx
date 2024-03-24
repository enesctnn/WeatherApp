import { IState } from 'country-state-city';
import { getAllStates } from 'country-state-city/lib/state';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';

const LocationSearchbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentCity, setCurrentCity] = useState<
    IState[] | IState | undefined
  >();

  useEffect(() => {
    if (searchTerm.trim().length !== 0) {
      const cities = getAllStates()
        .filter((c) =>
          c.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        .slice(0, 5);
      setCurrentCity(cities.map((city) => city));
    }
  }, [searchTerm]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  console.log({ searchTerm, currentCity });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    //Redirect to lochalhost:5173/weather/:city
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="location" hidden>
        Location
      </label>
      <Input
        type="search"
        placeholder="Search location"
        id="location"
        name="user-location"
        onChange={onChange}
      />
    </form>
  );
};

export default LocationSearchbar;
