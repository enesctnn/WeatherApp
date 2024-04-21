import { useQuery } from "@tanstack/react-query";
import { images } from "../lib/slide-images";
import { fetchImageBySearchTerm } from "../util/http-image";

export type DataImagesT = {
  src: string;
  alt: string;
  title?: string;
  coords?: { lat: number; lon: number };
}[];

/**
 * Custom hook to fetch and prepare slideshow images based on a search term.
 * This hook uses the `fetchImageBySearchTerm` function to retrieve images from Unsplash based on a search query.
 * @param {string} [searchTerm] The optional search term used as the query parameter for fetching images.
 */
export function useSlideShowImages(
  searchTerm: string | undefined,
): DataImagesT {
  const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  const { data } = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: ({ signal }) =>
      fetchImageBySearchTerm(searchTerm!, signal, {
        per_page: 15,
        content_filter: "high",
      }),
    enabled: !!UNSPLASH_API_KEY && !!searchTerm && searchTerm?.length >= 1,
    gcTime: Infinity,
  });

  const dataImages: DataImagesT = [];

  if (!!data && !!searchTerm) {
    data.results.map((photos) =>
      dataImages.push({
        src: photos.urls.full,
        alt: photos.alt_description,
        title: searchTerm,
      }),
    );
    if (data.results.length <= 0) dataImages.push(...images);
  } else dataImages.push(...images);

  return dataImages;
}
