import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";

export function ToggleFavoriteButton({ cityName }: { cityName: string }) {
  const ref = useRef<number>(0);
  const {
    toggleFavoriteSearch,
    removeFavoriteSearch,
    favorites,
    isExceededLimit,
  } = useFavoriteSearchsContext();

  function handleToggleFavorite() {
    if (!isExceededLimit) toggleFavoriteSearch(cityName);
    else removeFavoriteSearch(cityName);
  }

  const isFavoriteCity = favorites.includes(cityName);

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
        {!isFavoriteCity && !isExceededLimit && (
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
        {isExceededLimit && !isFavoriteCity && (
          <motion.div
            key={ref.current}
            animate={{ x: [0, 2, -2, 0] }}
            transition={{ type: "keyframes", ease: "linear", repeat: 1 }}
            className="absolute inset-0"
            onClick={() => ref.current++}
          >
            <MdBlock color="red" className="h-full w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
