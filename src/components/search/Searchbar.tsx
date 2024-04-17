import { useEffect, useRef, useState } from "react";
import { useNavigation } from "react-router-dom";

import { Input } from "../ui/input";

import { SearchForm } from "./SearchForm";

import { SearchMatchingResults } from "./SearchMatchingResults";

import { SpinnerGap } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAutoCompletePlaces } from "../../hooks/useAutoCompletePlaces";
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
  const { t } = useTranslation(undefined, { keyPrefix: "home.input" });

  const [inputVariants, setInputVariants] = useState<string | null>(null);
  const [inputTyped, setInputTyped] = useState<boolean>(false);

  const errorInputVariants =
    "!outline-1 !outline-red-600 outline-offset-1 dark:!bg-red-300/10 !bg-red-600/20 animate-shake";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onBlur = () => {
    if (searchTerm.trim().length <= 0) {
      setInputVariants((prevVariants) =>
        prevVariants === null ? errorInputVariants : prevVariants,
      );
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim().length <= 0) {
      e.preventDefault();
      setInputVariants((prevVariants) =>
        prevVariants === null ? errorInputVariants : prevVariants,
      );
    }
  };

  useEffect(() => {
    if (inputTyped && searchTerm.trim().length <= 0) {
      setInputVariants((prevVariants) =>
        prevVariants === null ? errorInputVariants : prevVariants,
      );
      setCurrentPlaces(undefined);
    } else setCurrentPlaces(places);
  }, [searchTerm, places, inputTyped]);

  useEffect(() => {
    const timeOut = setTimeout(() => setInputVariants(null), 800);
    return () => clearTimeout(timeOut);
  }, [inputVariants]);

  useEffect(() => {
    if (searchTerm.trim().length > 0) setInputTyped(true);
  }, [searchTerm]);

  useEffect(() => {
    const timeOut = setTimeout(() => setInputTyped(false), 800);
    return () => clearTimeout(timeOut);
  }, [inputTyped]);

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
          onKeyDown={onKeyDown}
          value={searchTerm}
          disabled={state === "loading"}
          min={1}
          required
        />
        <p
          className={`translate-y-10 text-heading-sm text-red-600 opacity-0 transition-all dark:text-red-700 ${inputVariants ? " !translate-y-3 !opacity-100" : ""}`}
        >
          {t("invalid")}
        </p>
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
