import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { FavoritesList } from './FavoritesList';
import { FavoritesTrigger } from './FavoritesTrigger';

export function Favorites() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const favListRef = useRef<HTMLUListElement | null>(null);
  useOnClickOutside(favListRef, () => setIsOpen(false));
  return (
    <div>
      <FavoritesTrigger onClick={() => setIsOpen(true)} />
      <AnimatePresence>
        {isOpen && (
          <ul
            ref={favListRef}
            className="fixed left-0 top-56 flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-3 max-w-max z-[100]"
          >
            <FavoritesList />
          </ul>
        )}
      </AnimatePresence>
    </div>
  );
}
