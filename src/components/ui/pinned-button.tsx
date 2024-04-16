import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";

export const PinnedButton = ({
  children,
  className,
  onClick,
  toolTip,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  toolTip?: string;
}) =>
  createPortal(
    <motion.button
      initial={{ x: -100, opacity: 0.8 }}
      animate={{
        x: [80, -20, 0],
        transition: { type: "tween", ease: "easeInOut", duration: 0.8 },
      }}
      whileHover={{ x: 80, opacity: 1 }}
      drag="x"
      dragConstraints={{ left: 0, right: 80 }}
      className={cn(
        "group fixed -left-20 z-[100] flex h-max w-36 cursor-grab rounded-r-full bg-ellipse from-sky-200 to-blue-light text-heading-sm shadow-md shadow-black active:cursor-grabbing dark:from-gray-400 dark:to-gray-900",
        className,
      )}
      onClick={onClick}
    >
      {children}
      {toolTip && (
        <div className="absolute -right-24 flex h-full w-20 scale-0 items-center justify-center transition-transform group-hover:scale-100 group-focus:scale-0">
          <p className="rounded-md bg-blue-light p-1 text-heading-md text-gray-500  dark:bg-gray-500 dark:text-gray-100">
            {toolTip}
          </p>
        </div>
      )}
    </motion.button>,
    document.getElementById("navroot")!,
  );
