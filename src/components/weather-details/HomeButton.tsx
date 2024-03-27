import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export const HomeButton = () =>
  createPortal(
    <motion.div
      whileHover={{ x: 90, opacity: 0.9 }}
      drag="x"
      dragConstraints={{ left: 0, right: 90 }}
      className="fixed top-20 -left-28 sm:-left-24 text-gray-100 shadow-md shadow-black bg-gray-400 rounded-r-full text-heading-sm z-[100] flex w-36 h-max opacity-60 cursor-grab active:cursor-grabbing"
    >
      <Link
        to="/"
        className="h-full px-8 py-3 select-none cursor-pointer active:cursor-grabbing"
      >
        Search
      </Link>
    </motion.div>,
    document.body,
    'navroot'
  );
