import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ type: "tween", ease: "easeInOut" }}
    className={cn(
      "mx-auto flex flex-col rounded-xl bg-gray-500 p-3 shadow-md dark:bg-gray-800",
      className,
    )}
  >
    {children}
  </motion.div>
);
