import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PinnedButton } from '../ui/pinned-button';
import { useTranslation } from 'react-i18next';

export const HomeButton = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'nav' });
  return (
    <PinnedButton className="top-24">
      <Link
        to="/"
        className="h-full pl-6 mr-6 py-3 select-none cursor-pointer active:cursor-grabbing flex items-center justify-between w-full border-r border-gray-50 text-gray-100 user-drag-none"
      >
        {t('search')} <BiSearchAlt className="mr-1 dark:text-[#22222F]" size={20} />
      </Link>
    </PinnedButton>
  );
};
