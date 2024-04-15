import { useEffect, useRef, useState } from "react";
import { useNavigation } from "react-router-dom";

import { Input } from "../ui/input";

import { SearchForm } from "./SearchForm";

import { SearchMatchingResults } from "./SearchMatchingResults";

import { SpinnerGap } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAutoCompletePlaces } from "../../hooks/useAutoCompletePlaces";
import { useFirstRender } from "../../hooks/useFirstTimeRender";
import AutoPlaceCompleteAPI from "../../types/auto-complete-response";

export const SearchBar = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { state } = useNavigation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [lat, setLat] = useState<string>(" ");
  const [lon, setLon] = useState<string>(" ");
  const [currentPlaces, setCurrentPlaces] = useState<
    AutoPlaceCompleteAPI.Address[] | undefined
  >();
  const places = useAutoCompletePlaces(searchTerm);

  const isFirstRender = useFirstRender();

  const { t } = useTranslation(undefined, { keyPrefix: "home.input" });

  const [inputVariants, setInputVariants] = useState<string | null>(null);

  const errorInputVariants =
    "!outline-1 !outline-red-600 outline-offset-1 dark:!bg-red-300/10 !bg-red-600/20 animate-shake";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onBlur = () =>
    searchTerm.trim().length <= 0 && setInputVariants(errorInputVariants);

  useEffect(() => {
    if (!isFirstRender && searchTerm.trim().length <= 0) {
      setInputVariants(errorInputVariants);
      setCurrentPlaces(undefined);
    } else setCurrentPlaces(places);
  }, [searchTerm, places, isFirstRender]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setInputVariants(null);
    }, 800);
    return () => clearTimeout(timeOut);
  }, [inputVariants]);

  return (
    <SearchForm ref={formRef}>
      <div className="relative w-full">
        <label htmlFor="location" aria-label="location" />
        <Input
          className={inputVariants ? inputVariants : ""}
          id="location"
          name="location"
          type="text"
          placeholder={t("placeholder")}
          onBlur={onBlur}
          onChange={onChange}
          value={searchTerm}
          disabled={state === "loading"}
        />
        <button type="submit" hidden aria-hidden />
        {state === "loading" && (
          <SpinnerGap
            className="absolute right-2 top-2 animate-spin select-none text-gray-900 text-inherit dark:!text-blue-light"
            size={32}
          />
        )}
      </div>
      <input
        type="text"
        hidden
        aria-hidden
        id="lat"
        name="lat"
        value={lat}
        onChange={(e) => setLon(e.target.value)}
      />
      <input
        type="text"
        hidden
        aria-hidden
        id="lon"
        name="lon"
        value={lon}
        onChange={(e) => setLat(e.target.value)}
      />
      <AnimatePresence>
        {!!currentPlaces && (
          <SearchMatchingResults
            currentPlaces={currentPlaces}
            onSelect={async ({ name, lat, lon }) => {
              setLat(lat);
              setLon(lon);
              await setSearchTerm(name);
              // Waiting for to set search term for better user experience on loading screen
              formRef.current?.requestSubmit();
            }}
          />
        )}
      </AnimatePresence>
    </SearchForm>
  );
};
