import { motion, useDragControls } from 'framer-motion';
import { DayTabs } from './DayTabs';

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
  const dragControls = useDragControls();

  return (
    <motion.ul
      drag="x"
      dragConstraints={{ left: -150, right: 150 }}
      dragControls={dragControls}
      dragListener={false}
      onPointerDown={(e) => {
        if (!(e.target instanceof HTMLButtonElement)) {
          dragControls.start(e);
        }
      }}
      className="flex items-center w-max border rounded-md gap-x-4 mx-auto px-2 py-3 cursor-grab active:cursor-grabbing"
    >
      {days.map((day) => (
        <DayTabs
          key={day}
          isActive={day === activeDay}
          day={day}
          onClick={onClick.bind('', day)}
        />
      ))}
    </motion.ul>
  );
}
