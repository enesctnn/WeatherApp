import { FaStar } from 'react-icons/fa';
import { useFavoriteSearchsContext } from '../../hooks/useFavoriteSearchsContext';
import { cn } from '../../lib/utils';
import { PinnedButton } from '../ui/pinned-button';

export function FavoritesTrigger({ onClick }: { onClick: () => void }) {
  const { favorites, isExceededLimit } = useFavoriteSearchsContext();
  return (
    <PinnedButton
      className="top-10"
      toolTip={
        isExceededLimit ? 'Favorites are Full' : `10/${favorites.length}`
      }
    >
      <div
        className="h-full mr-6 py-3 select-none cursor-pointer w-full flex items-center justify-evenly border-r border-gray-50 text-gray-100 relative"
        onClick={onClick}
      >
        Favorites <FaStar fill="#ffdf00" />
        <div
          key={favorites.length}
          className={cn(
            isExceededLimit && 'text-purple-800',
            'absolute -right-5 transition-all animate-bump'
          )}
        >
          {favorites.length}
        </div>
      </div>
    </PinnedButton>
  );
}
