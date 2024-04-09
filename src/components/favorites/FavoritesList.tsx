import { motion } from 'framer-motion';
import { CiCircleRemove } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useFavoriteSearchsContext } from '../../hooks/context/useFavoriteSearchsContext';

export function FavoritesList({ favorites }: { favorites: string[] }) {
  const { removeFavoriteSearch } = useFavoriteSearchsContext();
  return favorites.map((favorite, index) => (
    <motion.li
      key={favorite}
      initial={{ x: 100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 0.9,
        transition: { delay: index * 0.05 },
      }}
      exit={{
        x: 200,
        transition: { delay: index * 0.05 },
        opacity: 0,
      }}
      whileHover={{ x: -10, opacity: 1 }}
      className="px-2 bg-gray-500 dark:bg-blue-light flex overflow-ellipsis rounded-l-full text-gray-100 weather-heading items-center gap-x-1 max-lg:max-w-30 border-t-2 border-l-2 border-b-2 md:border-t-4 md:border-l-4 md:border-b-4 border-gray-600"
    >
      <Link
        to={`/weather/${favorite}`}
        className="w-full h-full md:h-12 py-1 whitespace-pre-line flex items-center user-drag-none"
      >
        {favorite}
      </Link>
      <motion.button
        whileHover={{ scale: 1.3 }}
        onClick={() => removeFavoriteSearch(favorite)}
      >
        <CiCircleRemove size={23} />
      </motion.button>
    </motion.li>
  ));
}
