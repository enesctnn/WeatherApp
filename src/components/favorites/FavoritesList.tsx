import { motion } from "framer-motion";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FavoritesT } from "../../context/favorite-searchs-context";
import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";

export function FavoritesList({ favorites }: { favorites: FavoritesT }) {
  const { removeFavoriteSearch } = useFavoriteSearchsContext();
  return Object.keys(favorites).map((key, index) => (
    <motion.li
      key={key}
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
      className="weather-heading max-lg:max-w-30 flex items-center gap-x-1 overflow-ellipsis rounded-l-full border-b-2 border-l-2 border-t-2 border-gray-200 bg-blue-light px-2 text-gray-100 dark:border-gray-600 dark:bg-gray-500 md:border-b-4 md:border-l-4 md:border-t-4"
    >
      <Link
        to={`/weather/${key}`}
        className="user-drag-none flex h-full w-full items-center whitespace-pre-line py-1 md:h-12"
      >
        {favorites[key]}
      </Link>
      <motion.button
        whileHover={{ scale: 1.3 }}
        onClick={() => removeFavoriteSearch(key)}
      >
        <CiCircleRemove size={23} />
      </motion.button>
    </motion.li>
  ));
}
