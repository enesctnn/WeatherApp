import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { FavoritesList } from "./FavoritesList";
import { FavoritesTrigger } from "./FavoritesTrigger";

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
              className="bg-gray fixed right-0 top-24 z-[100] flex max-w-full flex-col gap-y-1 md:gap-y-2 lg:gap-y-3"
            >
              <FavoritesList favorites={favorites} />
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </>
  );
}
