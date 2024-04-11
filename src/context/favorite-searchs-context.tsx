import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type FavoritesT = { [key: string]: { lat: number; lon: number } };
/**
 * Defines the structure of the context for managing favorite searches.
 * @typedef {Object} FavoriteSearchsContextT
 * @property {(placeName: string, lat: number, lon: number) => void} toggleFavoriteSearch - A function to toggle the favorite status of a search term.
 * @property {(placeName: string) => void} removeFavoriteSearch - A function to remove a favorite search term.
 * @property {FavoritesT} favorites - An object containing the list of favorite search terms.
 * @property {number} favoritesLength - The length of the favorites list.
 */
type FavoriteSearchsContextT = {
  toggleFavoriteSearch: (placeName: string, lat: number, lon: number) => void;
  removeFavoriteSearch: (placeName: string) => void;
  favorites: FavoritesT;
  favoritesLength: number;
};

/**
 * Context for managing favorite searches.
 * @type {import('react').Context<FavoriteSearchsContextT>}
 */
export const FavoriteSearchsContext = createContext<FavoriteSearchsContextT>({
  toggleFavoriteSearch: () => {},
  removeFavoriteSearch: () => {},
  favorites: {},
  favoritesLength: 0,
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
    "favoriteSearches",
    {} as FavoritesT,
  );

  const [favoritesLength, setFavoritesLength] = useState<number>(0);

  function toggleFavoriteSearch(placeName: string, lat: number, lon: number) {
    setFavorites((prevFavorites) => {
      if (prevFavorites[placeName]) {
        delete prevFavorites[placeName];
        return { ...prevFavorites };
      }
      if (favoritesLength < 10)
        return { ...prevFavorites, [placeName]: { lat, lon } };
      return { ...prevFavorites };
    });
  }
  function removeFavoriteSearch(placeName: string) {
    setFavorites((prevFavorites) => {
      delete prevFavorites[placeName];
      return { ...prevFavorites };
    });
  }

  useEffect(
    () => setFavoritesLength(Object.keys(favorites).length),
    [favorites],
  );

  return (
    <FavoriteSearchsContext.Provider
      value={{
        toggleFavoriteSearch,
        removeFavoriteSearch,
        favorites,
        favoritesLength,
      }}
    >
      {children}
    </FavoriteSearchsContext.Provider>
  );
}
