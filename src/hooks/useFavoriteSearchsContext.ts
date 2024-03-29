import { useContext } from 'react';
import { FavoriteSearchsContext } from '../context/favorite-searchs-context';

export function useFavoriteSearchsContext() {
  const context = useContext(FavoriteSearchsContext);
  if (!context) {
    throw new Error(
      'useFavoriteSearchsContext must be wrapped with useFavoriteSearchsContextProvider'
    );
  }
  return context;
}
