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
        "group fixed -left-20 z-[100] flex h-max w-32 cursor-grab rounded-r-full bg-ellipse from-gray-400 to-gray-900 text-heading-sm text-gray-200 shadow-md shadow-black active:cursor-grabbing dark:from-gray-200 dark:to-blue-light",
        className,
      )}
      onClick={onClick}
    >
      {children}
      {toolTip && (
        <div className="absolute -right-20 flex h-full scale-0 items-center text-white transition-transform group-hover:scale-100 group-focus:scale-0">
          <div className="flex max-w-20 rounded-md bg-gray-600 px-1 py-[1px] text-xs capitalize md:text-sm lg:text-md">
            {toolTip}
          </div>
        </div>
      )}
    </motion.button>,
    document.getElementById("navroot")!,
  );
