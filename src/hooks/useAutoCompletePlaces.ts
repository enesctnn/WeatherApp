import { useQuery } from "@tanstack/react-query";
import { fetchAutoCompletePlaces } from "../util/http-place";

/**
 * Custom React hook for fetching autocomplete places based on a search term.
 * @param {string} searchTerm The term used to search for autocomplete places.
 * @returns {Array<Object>} An array of autocomplete addresses matching the search term.
 */
export function useAutoCompletePlaces(searchTerm: string) {
  const { data } = useQuery({
    queryKey: ["autocomplete", searchTerm],
    queryFn: ({ signal }) => fetchAutoCompletePlaces(searchTerm, signal),
    enabled: searchTerm.trim().length >= 1,
    gcTime: Infinity,
  });

  return data?.addresses;
}
