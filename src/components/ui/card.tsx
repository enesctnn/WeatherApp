import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'tween' }}
      className={cn(
        'rounded-xl shadow-md bg-gray- 00 flex flex-col p-3 mx-auto',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
