import { motion } from "framer-motion";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";

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
      className="weather-heading max-lg:max-w-30 flex items-center gap-x-1 overflow-ellipsis rounded-l-full border-b-2 border-l-2 border-t-2 border-gray-600 bg-gray-500 px-2 text-gray-100 dark:bg-blue-light md:border-b-4 md:border-l-4 md:border-t-4"
    >
      <Link
        to={`/weather/${favorite}`}
        className="user-drag-none flex h-full w-full items-center whitespace-pre-line py-1 md:h-12"
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
