import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { useFavoriteSearchsContext } from '../../hooks/useFavoriteSearchsContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { FavoritesList } from './FavoritesList';
import { FavoritesTrigger } from './FavoritesTrigger';

export function Favorites() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const favListRef = useRef<HTMLUListElement | null>(null);
  useOnClickOutside(favListRef, () => setIsOpen(false));
  const { favorites } = useFavoriteSearchsContext();
  return (
    <>
      <FavoritesTrigger onClick={() => setIsOpen(true)} />
      <AnimatePresence>
        {isOpen && (
          <nav>
            <ul
              ref={favListRef}
              className="fixed right-0 top-20 max-w-full z-[100] bg-gray flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-3"
            >
              <FavoritesList favorites={favorites} />
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </>
  );
}
