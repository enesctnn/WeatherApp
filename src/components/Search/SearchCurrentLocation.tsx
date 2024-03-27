import { MapPinLine, SpinnerGap } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { fetchCityNameByCoords } from '../../util/http';

export const SearchCurrentLocation = () => {
  const [error, setError] = useState<string | undefined>();

  const loaderData = useLoaderData() as {
    lat?: number | undefined;
    lon?: number | undefined;
    permission?: boolean;
    message?: string;
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ['user-location'],
    queryFn: ({ signal }) =>
      fetchCityNameByCoords(loaderData.lat, loaderData.lon, signal),
    // refreshing user location after 5 minutes
    staleTime: 1000 * 60 * 5,
    enabled: loaderData.lat !== undefined && loaderData.lon !== undefined,
  });

  useEffect(() => {
    if (loaderData.message) {
      setError(loaderData.message);
      const timer = setTimeout(() => {
        setError(undefined);
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (isError) {
      setError('Something went wrong while fetching user location !');
      const timer = setTimeout(() => {
        setError(undefined);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loaderData, isError]);

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
      {!error && isPending && (
        <h2 className="flex text-gray-100 location-heading animate-pulse items-center gap-x-3">
          Fetching User Location...{' '}
          <SpinnerGap className="animate-spin" size={32} />
        </h2>
      )}
    </>
  );
};
