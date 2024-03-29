import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';

export const PinnedButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) =>
  createPortal(
    <motion.button
      initial={{ x: -100, opacity: 0.8 }}
      animate={{ x: 0 }}
      whileHover={{ x: 80, opacity: 1 }}
      drag="x"
      dragConstraints={{ left: -20, right: 80 }}
      className={cn(
        'fixed -left-20 text-gray-200 shadow-md shadow-black bg-blue-light rounded-r-full text-heading-sm z-[100] flex w-32 h-max cursor-grab active:cursor-grabbing overflow-hidden',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>,
    document.getElementById('navroot')!
  );
