import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";

export function ToggleFavoriteButton({
  placeName,
  lat,
  lon,
}: {
  placeName: string;
  lat: number;
  lon: number;
}) {
  const ref = useRef<number>(0);
  const {
    toggleFavoriteSearch,
    removeFavoriteSearch,
    favorites,
    favoritesLength,
  } = useFavoriteSearchsContext();

  function handleToggleFavorite() {
    if (favoritesLength < 10) toggleFavoriteSearch(placeName, lat, lon);
    else removeFavoriteSearch(placeName);
  }

  const isFavoriteCity = Object.keys(favorites).includes(placeName);

  return (
    <button
      className="relative h-6 w-6 sm:h-8 sm:w-8"
      onClick={handleToggleFavorite}
    >
      <AnimatePresence>
        {isFavoriteCity && (
          <motion.div
            key="fill"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0"
          >
            <FaStar fill="#8FB2F5" className="h-full w-full" />
          </motion.div>
        )}
        {!isFavoriteCity && favoritesLength < 10 && (
          <motion.div
            key="border"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0"
          >
            <FaRegStar color="#8FB2F5" className="h-full w-full" />
          </motion.div>
        )}
        {favoritesLength >= 10 && !isFavoriteCity && (
          <motion.div
            key={ref.current}
            className="animate-shake absolute inset-0 transition ease-in-out"
            onClick={() => ref.current++}
          >
            <MdBlock color="red" className="h-full w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
