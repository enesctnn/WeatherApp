import { useEffect, useState } from "react";
import { DataImagesT } from "../../hooks/useSlideShowImages";
import { ForwardBackButtons } from "../ui/direction-buttons";
import { SlideImage } from "../ui/slide-image";

export const QueryImages = ({ images }: { images: DataImagesT }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setActiveImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0,
        ),
      4000,
    );
    return () => clearInterval(interval);
  }, [images.length, activeImageIndex]);

  const onBackClick = () =>
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    );
  const onForwardClick = () =>
    setActiveImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0,
    );

  return (
    <>
      {images.length > 1 && (
        <ForwardBackButtons
          onBackClick={onBackClick}
          onForwardClick={onForwardClick}
        />
      )}
      {images.map((image, index) => (
        <SlideImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          isActive={activeImageIndex === index}
          image={image}
        />
      ))}
    </>
  );
};
