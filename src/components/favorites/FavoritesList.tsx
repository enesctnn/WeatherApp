import { motion } from 'framer-motion';
import { CiCircleRemove } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useFavoriteSearchsContext } from '../../hooks/useFavoriteSearchsContext';

export function FavoritesList() {
  const { favorites, toggleFavoriteSearch } = useFavoriteSearchsContext();
  return favorites.map((favorite, index) => (
    <motion.li
      key={favorite}
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 0.9,
        transition: { delay: index * 0.05 },
      }}
      exit={{
        x: -200,
        opacity: 0,
        transition: { delay: index * 0.05 },
      }}
      whileHover={{ x: 10, opacity: 1 }}
      className="px-2 bg-blue-light flex overflow-ellipsis rounded-r-full text-gray-100 weather-heading items-center gap-x-3"
    >
      <Link to={`/weather/${favorite}`} className="w-full h-full py-1">
        {favorite}
      </Link>
      <motion.button
        whileHover={{ scale: 1.3 }}
        onClick={() => toggleFavoriteSearch(favorite)}
      >
        <CiCircleRemove />
      </motion.button>
    </motion.li>
  ));
}
