import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlideImagesT } from "../../lib/slide-images";
import { cn } from "../../lib/utils";

export const QueryImages = ({
  images,
  alt,
}: {
  images: SlideImagesT | { src: string; alt: string }[];
  alt?: string;
}) => {
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
  }, [images.length]);

  return images.map((image, index) => (
    <React.Fragment key={image.src}>
      <img
        className={cn(
          "user-drag-none absolute left-0 top-0 h-full w-full -translate-x-4 rotate-6 scale-125 overflow-hidden object-cover opacity-0 blur-lg transition-all duration-500 ease-in-out",
          activeImageIndex === index &&
            "z-10 translate-x-0 rotate-0 scale-100 opacity-100 blur-none",
        )}
        src={image.src}
        alt={image.alt}
      />
      <div
        className={cn(
          "absolute bottom-3 left-4 w-4/5 scale-125 select-none text-heading-md capitalize text-gray-100 opacity-0 blur-lg drop-shadow-border transition-all duration-500 max-lg:text-heading-lg",
          activeImageIndex === index &&
            "z-10 rotate-0 scale-100 opacity-100 blur-none",
        )}
      >
        {alt ? (
          alt
        ) : (
          <p className="text-heading-sm">You May want to visit these places</p>
        )}
        {"coords" in image && (
          <Link
            className="underline"
            to={`/weather/${image.coords.lat},${image.coords.lon}`}
          >
            {image.alt}
          </Link>
        )}
      </div>
    </React.Fragment>
  ));
};
