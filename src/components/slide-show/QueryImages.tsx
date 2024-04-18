import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SlideImagesT } from "../../lib/slide-images";
import { cn } from "../../lib/utils";
import { CursorClicking } from "../ui/cursor-clicking";
import { ForwardBackButtons } from "../ui/direction-buttons";
import { SlideImage } from "../ui/slide-image";

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
  }, [images.length, activeImageIndex]);

  const onBackClick = () =>
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    );
  const onForwardClick = () =>
    setActiveImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0,
    );

  const { t } = useTranslation(undefined, { keyPrefix: "slideImages" });

  return (
    <>
      {images.length > 1 && (
        <ForwardBackButtons
          onBackClick={onBackClick}
          onForwardClick={onForwardClick}
        />
      )}
      {images.map((image, index) => (
        <React.Fragment key={image.src}>
          <SlideImage
            src={image.src}
            alt={image.alt}            
            isActive={activeImageIndex === index}
          />
          <div
            className={cn(
              "absolute bottom-3 mx-2 scale-125 select-none rounded-md bg-gray-600/40 px-2 py-1 text-2xl capitalize text-gray-100 opacity-0 blur-lg drop-shadow-border transition-all duration-500 max-lg:text-heading-lg",
              activeImageIndex === index &&
                "z-20 rotate-0 scale-100 opacity-100 blur-none",
            )}
          >
            {alt ?? <p className="text-heading-sm">{t("searchMessage")}</p>}
            {"coords" in image && (
              <Link
                className="user-drag-none relative whitespace-nowrap text-heading-md underline decoration-1 transition-all hover:scale-110 hover:animate-pulse"
                to={`/weather/${image.coords.lat},${image.coords.lon}`}
              >
                {image.alt}
                <CursorClicking className="-right-[18px] top-5" />
              </Link>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
