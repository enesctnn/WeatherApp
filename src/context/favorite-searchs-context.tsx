import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type FavoriteSearchsContextT = {
  toggleFavoriteSearch: (searchTerm: string) => void;
  favorites: string[];
};

export const FavoriteSearchsContext = createContext<FavoriteSearchsContextT>({
  toggleFavoriteSearch: () => {},
  favorites: [],
});

export function FavoriteSearchsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [values, setValues] = useLocalStorage('favoriteSearches', []);
  const [favorites, setFavorites] = useState<string[]>([...values]);

  function toggleFavoriteSearch(searchTerm: string) {
    setFavorites((prevFavorites) => {
      const existingFav = prevFavorites.indexOf(searchTerm);
      if (existingFav !== -1) {
        const updatedFavs = prevFavorites.filter((fav) => fav !== searchTerm);
        setValues(updatedFavs);
        return updatedFavs;
      }
      setValues([...prevFavorites, searchTerm]);
      return [...prevFavorites, searchTerm];
    });
  }

  return (
    <FavoriteSearchsContext.Provider
      value={{
        favorites,
        toggleFavoriteSearch,
      }}
    >
      {children}
    </FavoriteSearchsContext.Provider>
  );
}
