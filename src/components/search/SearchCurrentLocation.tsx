import { MapPinLine, SpinnerGap } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGeolocation } from "../../hooks/useGeolocation";
import { fetchCityNameByCoords } from "../../util/http";
import { useTranslation } from "react-i18next";

export const SearchCurrentLocation = () => {
  const [error, setError] = useState<string | undefined>();

  const coords = useGeolocation();

  const { t } = useTranslation(undefined, { keyPrefix: "home.location" });

  const { data, isPending, isError } = useQuery({
    queryKey: ["user-location"],
    queryFn: ({ signal }) =>
      fetchCityNameByCoords(coords.lat, coords.lon, signal),
    enabled: !!coords.lat && !!coords.lon,
  });

  const setFeedback = (message: string) => {
    setError(message);
    const timer = setTimeout(() => setError(undefined), 5000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (coords.permission === false && !data)
      setFeedback(t("feedback.permission"));
    if (isError) setFeedback(t("feedback.error"));
  }, [coords, isError, data, t]);

  const initialAnimation = { opacity: 0, x: -20 };
  const animate = { opacity: 1, x: 0 };

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.h2
            className="location-heading text-red-600"
            initial={initialAnimation}
            animate={animate}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring" }}
          >
            {error}
          </motion.h2>
        )}
      </AnimatePresence>
      {data && (
        <motion.h2
          className="location-heading group text-gray-100 hover:scale-105 hover:animate-pulse"
          initial={initialAnimation}
          animate={animate}
        >
          <Link
            to={`/weather/${data.name.toLowerCase()}`}
            className="flex items-center gap-x-3 text-gray-500 dark:text-gray-50"
          >
            <MapPinLine className="animate-bounce group-hover:animate-none" />
            {t("current")} {data.name + " - " + data.country}
          </Link>
        </motion.h2>
      )}
      {!!coords && !!coords.lat && !!coords.lon && !error && isPending && (
        <h2 className="location-heading flex animate-pulse items-center gap-x-3 text-gray-100">
          {t("feedback.fetch")}
          <SpinnerGap className="animate-spin" size={32} />
        </h2>
      )}
    </>
  );
};
