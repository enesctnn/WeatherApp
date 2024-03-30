import { useContext } from 'react';
import { FavoriteSearchsContext } from '../context/favorite-searchs-context';

/**
 * A hook for consuming the FavoriteSearchsContext.
 * @returns {FavoriteSearchsContextT} - Returns the context value for favorite searches and toggleFavorites function.
 * @throws Will throw an error if used outside of the FavoriteSearchsContextProvider.
 */
export function useFavoriteSearchsContext() {
  const context = useContext(FavoriteSearchsContext);
  if (!context) {
    throw new Error(
      'useFavoriteSearchsContext must be wrapped with useFavoriteSearchsContextProvider'
    );
  }
  return context;
}
