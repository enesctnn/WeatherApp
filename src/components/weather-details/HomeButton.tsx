import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PinnedButton } from '../ui/pinned-button';

export const HomeButton = () => (
  <PinnedButton className="top-24">
    <Link
      to="/"
      className="h-full pl-6 mr-6 py-3 select-none cursor-pointer active:cursor-grabbing flex items-center justify-between w-full border-r border-gray-50 text-gray-100"
    >
      Search <BiSearchAlt className="mr-1" size={20} fill="#22222F" />
    </Link>
  </PinnedButton>
);
