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
          isActive && "!text-white",
          "relative select-none p-2 text-gray-200 transition-opacity hover:opacity-90 active:opacity-100",
        )}
        onClick={onClick}
      >
        <span className="relative z-10">{day}</span>
        {isActive && (
          <motion.div
            layoutId="tab"
            className="absolute inset-0 rounded-full bg-blue-light"
          />
        )}
      </button>
    </li>
  );
}
