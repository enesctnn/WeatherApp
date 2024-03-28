import { motion } from 'framer-motion';
import { cn } from '../../../../lib/utils';

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
          isActive && '!text-white',
          'text-gray-200 p-2 select-none relative hover:opacity-90 active:opacity-100 transition-opacity'
        )}
        onClick={onClick}
      >
        <span className="relative z-10">{day}</span>
        {isActive && (
          <motion.div
            layoutId="tab"
            className="absolute inset-0 bg-blue-light rounded-full"
          />
        )}
      </button>
    </li>
  );
}
