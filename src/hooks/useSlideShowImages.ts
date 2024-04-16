import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { images } from "../lib/slide-images";
import { fetchImageBySearchTerm } from "../util/http-image";

/**
 * Custom hook to fetch and prepare slideshow images based on a search term.
 * This hook uses the `fetchImageBySearchTerm` function to retrieve images from Unsplash based on a search query.
 * @param {string} [searchTerm] The optional search term used as the query parameter for fetching images.
 */
export function useSlideShowImages(searchTerm?: string) {
  const {
    i18n: { language: lang },
  } = useTranslation();

  const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  const { data } = useQuery({
    queryKey: ["photos", searchTerm, lang],
    queryFn: ({ signal }) =>
      fetchImageBySearchTerm(searchTerm!, signal, {
        per_page: 20,
        content_filter: "high",
        lang: lang.includes("tr") ? "tr" : "en",
      }),
    enabled: !!UNSPLASH_API_KEY && !!searchTerm && searchTerm?.length >= 1,
    gcTime: Infinity,
  });

  const dataImages: { src: string; alt: string }[] = [];

  if (data) {
    data.results.map((photos) =>
      dataImages.push({ src: photos.urls.full, alt: photos.alt_description }),
    );
    if (data.results.length <= 0) return { images };
    return { dataImages, alt: searchTerm! };
  }

  return { images };
}
