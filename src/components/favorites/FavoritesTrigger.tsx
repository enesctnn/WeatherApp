import { FaStar } from 'react-icons/fa';
import { useFavoriteSearchsContext } from '../../hooks/useFavoriteSearchsContext';
import { cn } from '../../lib/utils';
import { PinnedButton } from '../ui/pinned-button';
import { useTranslation } from 'react-i18next';

export function FavoritesTrigger({ onClick }: { onClick: () => void }) {
  const { favorites, isExceededLimit } = useFavoriteSearchsContext();
  const { t } = useTranslation(undefined, { keyPrefix: 'nav.favorites' });

  return (
    <PinnedButton
      className="top-10"
      toolTip={isExceededLimit ? t('toolTip.full') : `10/${favorites.length}`}
    >
      <div
        className="h-full mr-6 py-3 select-none cursor-pointer w-full flex items-center justify-evenly border-r border-gray-50 text-gray-100 relative active:cursor-grabbing"
        onClick={onClick}
      >
        {t('label')} <FaStar fill="#ffdf00" />
        <div
          key={favorites.length}
          className={cn(
            isExceededLimit && 'text-purple-800',
            'absolute -right-5 transition-all animate-bump cursor-grab active:cursor-grabbing'
          )}
        >
          {favorites.length}
        </div>
      </div>
    </PinnedButton>
  );
}
