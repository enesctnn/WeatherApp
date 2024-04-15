import { useQuery } from "@tanstack/react-query";
import { images } from "../lib/slide-images";
import { fetchImageBySearchTerm } from "../util/http-image";

/**
 * Custom hook to fetch and prepare slideshow images based on a search term.
 * This hook uses the `fetchImageBySearchTerm` function to retrieve images from Unsplash based on a search query.
 * @param {string} [searchTerm] The optional search term used as the query parameter for fetching images.
 */
export function useSlideShowImages(searchTerm?: string) {
  const { data } = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: ({ signal }) => fetchImageBySearchTerm(searchTerm!, signal),
    enabled: !!searchTerm && searchTerm?.length >= 1,
    gcTime: Infinity,
  });

  const dataImages: { src: string; alt: string }[] = [];

  if (data) {
    data.results.map((photos) =>
      dataImages.push({ src: photos.urls.full, alt: photos.alt_description }),
    );
    if (data.results.length <= 0) return { images };
    return { dataImages, alt: searchTerm!.replace("where is ", "") };
  }

  return { images };
}
