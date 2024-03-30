import { MapPinLine, SpinnerGap } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGeolocation } from '../../hooks/useGeolocation';
import { fetchCityNameByCoords } from '../../util/http';

export const SearchCurrentLocation = () => {
  const [error, setError] = useState<string | undefined>();

  const coords = useGeolocation();

  const { data, isPending, isError } = useQuery({
    queryKey: ['user-location'],
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
      setFeedback('Location permission denied !');
    if (isError)
      setFeedback("Something went wrong while fetching user's location !");
  }, [coords, isError, data]);

  const initialAnimation = { opacity: 0, x: -20 };
  const animate = { opacity: 1, x: 0 };

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.h2
            className="text-red-600 location-heading"
            initial={initialAnimation}
            animate={animate}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring' }}
          >
            {error}
          </motion.h2>
        )}
      </AnimatePresence>
      {data && (
        <motion.h2
          className="text-gray-100 hover:scale-105 hover:animate-pulse group location-heading"
          initial={initialAnimation}
          animate={animate}
        >
          <Link
            to={`/weather/${data.name.toLowerCase()}`}
            className="flex items-center gap-x-3"
          >
            <MapPinLine className="animate-bounce group-hover:animate-none" />
            Check Weather for {data.name + ' - ' + data.country}
          </Link>
        </motion.h2>
      )}
      {!!coords && !!coords.lat && !!coords.lon && !error && isPending && (
        <h2 className="flex text-gray-100 location-heading animate-pulse items-center gap-x-3">
          Fetching User Location...
          <SpinnerGap className="animate-spin" size={32} />
        </h2>
      )}
    </>
  );
};
