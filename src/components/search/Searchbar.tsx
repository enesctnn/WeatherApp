import { useEffect, useRef, useState } from 'react';
import { useNavigation } from 'react-router-dom';

import { Input } from '../ui/input';

import { SearchForm } from './SearchForm';

import { IState } from 'country-state-city';
import { getAllStates } from 'country-state-city/lib/state';

import { SearchMatchingResults } from './SearchMatchingResults';

import { SpinnerGap } from '@phosphor-icons/react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const SearchBar = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { state } = useNavigation();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentCities, setCurrentCities] = useState<IState[] | undefined>();

  useEffect(() => {
    if (searchTerm.trim().length >= 1) {
      const cities = getAllStates()
        .filter((c) =>
          c.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
        )
        .slice(0, 5);
      if (cities.length > 0) {
        const timer = setTimeout(
          () => setCurrentCities(() => structuredClone(cities)),
          150
        );
        return () => clearTimeout(timer);
      } else setCurrentCities(undefined);
    } else setCurrentCities(undefined);
  }, [searchTerm]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const { t } = useTranslation(undefined, { keyPrefix: 'home.input' });

  return (
    <SearchForm ref={formRef}>
      <div className="w-full relative">
        <label htmlFor="location" hidden>
          Location
        </label>
        <Input
          id="location"
          name="location"
          type="search"
          placeholder={t('placeholder')}
          value={searchTerm}
          onChange={onChange}
          disabled={state === 'loading'}
        />
        {state === 'loading' && (
          <SpinnerGap
            className="text-inherit absolute right-2 top-2 !text-blue-light select-none animate-spin"
            size={32}
          />
        )}
      </div>
      <AnimatePresence>
        {!!currentCities && (
          <SearchMatchingResults
            currentCities={currentCities}
            onSelect={async (cityName) => {
              await setSearchTerm(cityName);
              // Waiting for to set search term for better user experience on loading screen
              formRef.current?.requestSubmit();
            }}
          />
        )}
      </AnimatePresence>
    </SearchForm>
  );
};
