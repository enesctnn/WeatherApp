import { FaStar } from 'react-icons/fa';
import { PinnedButton } from '../ui/pinned-button';

export function FavoritesTrigger({ onClick }: { onClick: () => void }) {
  return (
    <PinnedButton className="top-36">
      <div
        className="h-full mr-6 py-3 select-none cursor-pointer w-full flex items-center justify-evenly border-r border-gray-50 text-gray-100 hover:scale-110 transition-all"
        onClick={onClick}
      >
        Favorites <FaStar fill="#ffdf00" />
      </div>
    </PinnedButton>
  );
}
