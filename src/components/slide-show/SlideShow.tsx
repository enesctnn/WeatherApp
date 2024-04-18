import { useSlideShowImages } from "../../hooks/useSlideShowImages";
import { Card } from "../ui/card";
import { QueryImages } from "./QueryImages";

export function SlideShow({ searchTerm }: { searchTerm: string | undefined }) {
  const dataImages = useSlideShowImages(searchTerm);

  return (
    <Card className="relative h-96 w-[359px] overflow-hidden !p-0 transition-[width] sm:w-full lg:h-full">
      <QueryImages images={dataImages} />
    </Card>
  );
}
