import { motion } from "framer-motion";
import { DayTabs } from "./DayTabs";

type AvailableDayListProps = {
  days: string[];
  activeDay: string;
  onClick: (day: string) => void;
};

export function AvailableDayList({
  days,
  activeDay,
  onClick,
}: AvailableDayListProps) {
  return (
    <motion.ul
      drag="x"
      dragConstraints={{ left: -300, right: 150 }}
      className="mx-auto flex w-max cursor-grab items-center gap-x-4 rounded-md border px-2 py-3 active:cursor-grabbing"
    >
      {days.map((day) => (
        <DayTabs
          key={day}
          isActive={day === activeDay}
          day={day}
          onClick={onClick.bind("", day)}
        />
      ))}
    </motion.ul>
  );
}
