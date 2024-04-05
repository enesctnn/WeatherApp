import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Defines the structure of the context for managing favorite searches.
 * @typedef {Object} FavoriteSearchsContextT
 * @property {function(string): void} toggleFavoriteSearch - A function to toggle the favorite status of a search term.
 * @property {string[]} favorites - An array containing the list of favorite search terms.
 */

type FavoriteSearchsContextT = {
  toggleFavoriteSearch: (searchTerm: string) => void;
  removeFavoriteSearch: (searchTerm: string) => void;
  favorites: string[];
  isExceededLimit: boolean;
};

/**
 * Context for managing favorite searches.
 * @type {import('react').Context<FavoriteSearchsContextT>}
 */
export const FavoriteSearchsContext = createContext<FavoriteSearchsContextT>({
  toggleFavoriteSearch: () => {},
  removeFavoriteSearch: () => {},
  favorites: [],
  isExceededLimit: false,
});

/**
 * Provides a context provider for managing favorite searches.
 * @param {Object} props - Props for FavoriteSearchsContextProvider.
 * @param {React.ReactNode} props.children - Child components that need access to the favorite searches context.
 * @returns {JSX.Element} - Returns the context provider component.
 */
export function FavoriteSearchsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] = useLocalStorage(
    'favoriteSearches',
    [] as string[]
  );

  const [isExceededLimit, setIsExceededLimit] = useState<boolean>(false);

  function toggleFavoriteSearch(searchTerm: string) {
    if (favorites.length < 10) {
      setFavorites((prevFavorites) => {
        const existingFavIndex = prevFavorites.indexOf(searchTerm);
        if (existingFavIndex !== -1) {
          const updatedFavs = prevFavorites.filter((fav) => fav !== searchTerm);
          return updatedFavs;
        }
        return [...prevFavorites, searchTerm];
      });
    }
  }
  function removeFavoriteSearch(searchTerm: string) {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (fav) => fav !== searchTerm
      );
      return updatedFavorites;
    });
  }
  useEffect(() => {
    if (favorites.length >= 10) setIsExceededLimit(true);
    else setIsExceededLimit(false);
  }, [favorites]);
  return (
    <FavoriteSearchsContext.Provider
      value={{
        toggleFavoriteSearch,
        removeFavoriteSearch,
        favorites,
        isExceededLimit,
      }}
    >
      {children}
    </FavoriteSearchsContext.Provider>
  );
}
