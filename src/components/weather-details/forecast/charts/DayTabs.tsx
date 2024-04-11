import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export function DayTabs({
  day,
  isActive,
  onClick,
}: {
  day: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li key={day}>
      <button
        type="button"
        className={cn(
          isActive && "!text-gray-100 dark:!text-gray-600",
          "relative select-none px-2 py-1 text-heading-sm font-bold text-gray-800 transition-all hover:opacity-90 active:opacity-100 dark:text-gray-200",
        )}
        onClick={onClick}
      >
        <span className="relative z-10">{day}</span>
        {isActive && (
          <motion.div
            layoutId="tab"
            className="absolute inset-0 rounded-full bg-ellipse from-gray-400 to-gray-800 dark:from-sky-200 dark:to-blue-light"
          />
        )}
      </button>
    </li>
  );
}
