import { AnimatePresence, motion } from 'framer-motion';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useFavoriteSearchsContext } from '../../hooks/useFavoriteSearchsContext';

export function ToggleFavoriteButton({ cityName }: { cityName: string }) {
  const { toggleFavoriteSearch, favorites } = useFavoriteSearchsContext();
  return (
    <button
      className="w-6 h-6 sm:w-8 sm:h-8 relative"
      onClick={() => toggleFavoriteSearch(cityName)}
    >
      <AnimatePresence>
        {favorites.includes(cityName) ? (
          <motion.div
            key="fill"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0"
          >
            <FaStar fill="#8FB2F5" className="w-full h-full" />
          </motion.div>
        ) : (
          <motion.div
            key="border"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0"
          >
            <FaRegStar color="#BFBFD4" className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
