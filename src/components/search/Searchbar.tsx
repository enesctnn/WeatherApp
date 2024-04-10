import { useEffect, useRef, useState } from "react";
import { useNavigation } from "react-router-dom";

import { Input } from "../ui/input";

import { SearchForm } from "./SearchForm";

import { SearchMatchingResults } from "./SearchMatchingResults";

import { SpinnerGap } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import AutoPlaceCompleteAPI from "../../auto-complete-response";
import { fetchAutoCompletePlaces } from "../../util/http-place";

export const SearchBar = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { state } = useNavigation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPlaces, setCurrentPlaces] = useState<
    AutoPlaceCompleteAPI.Address[] | undefined
  >();

  useEffect(() => {
    if (searchTerm.trim().length >= 2) {
      const timer = setTimeout(() => {
        fetchAutoCompletePlaces(searchTerm).then((data) =>
          setCurrentPlaces(data?.addresses),
        );
      }, 150);
      return () => clearTimeout(timer);
    } else setCurrentPlaces(undefined);
  }, [searchTerm]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const { t } = useTranslation(undefined, { keyPrefix: "home.input" });

  return (
    <SearchForm ref={formRef}>
      <div className="relative w-full">
        <label htmlFor="location" hidden>
          Location
        </label>
        <Input
          id="location"
          name="location"
          type="search"
          placeholder={t("placeholder")}
          value={searchTerm}
          onChange={onChange}
          disabled={state === "loading"}
        />
        {state === "loading" && (
          <SpinnerGap
            className="absolute right-2 top-2 animate-spin select-none !text-blue-light text-inherit"
            size={32}
          />
        )}
      </div>
      <AnimatePresence>
        {!!currentPlaces && (
          <SearchMatchingResults
            currentPlaces={currentPlaces}
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
