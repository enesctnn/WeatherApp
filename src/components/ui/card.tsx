import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ type: "tween", ease: "easeInOut" }}
    className={cn(
      "mx-auto flex flex-col rounded-xl bg-gray-400 p-3 shadow-md dark:bg-gray-800 dark:shadow-black",
      className,
    )}
  >
    {children}
  </motion.div>
);
