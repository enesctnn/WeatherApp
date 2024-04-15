import { useSlideShowImages } from "../../hooks/useSlideShowImages";
import { Card } from "../ui/card";
import { QueryImages } from "./QueryImages";

export function SlideShow({ searchTerm }: { searchTerm?: string }) {
  const { images, dataImages, alt } = useSlideShowImages(searchTerm);

  return (
    <Card className="relative h-80 w-[359px] overflow-hidden transition-all sm:w-full lg:h-full">
      <QueryImages images={dataImages || images} alt={alt} />
    </Card>
  );
}
