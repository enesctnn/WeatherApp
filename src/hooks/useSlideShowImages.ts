import { useQuery } from "@tanstack/react-query";
import { images } from "../lib/slide-images";
import { fetchImageBySearchTerm } from "../util/http-image";

export function useSlideShowImages(searchTerm?: string) {
  const { data } = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: ({ signal }) => fetchImageBySearchTerm(searchTerm!, signal),
    enabled: !!searchTerm,
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
