import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const ForwardBackButtons = ({
  onForwardClick,
  onBackClick,
}: {
  onForwardClick: () => void;
  onBackClick: () => void;
}) => (
  <div className="absolute inset-0 z-[70] flex items-center justify-between text-2xl sm:text-4xl">
    <button
      className="ml-1 h-max w-max rounded-full bg-gray-400/40 text-gray-100 drop-shadow-md transition-all hover:scale-105"
      onClick={onBackClick}
    >
      <MdOutlineKeyboardArrowLeft />
    </button>
    <button
      className="mr-1 h-max w-max rounded-full bg-gray-400/40 text-gray-100 drop-shadow-md transition-all hover:scale-105"
      onClick={onForwardClick}
    >
      <MdOutlineKeyboardArrowRight />
    </button>
  </div>
);
