import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SlideImagesT } from "../../lib/slide-images";
import { cn } from "../../lib/utils";
import { CursorClicking } from "../ui/cursor-clicking";
import { ForwardBackButtons } from "./DirectionButtons";

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
          <img
            className={cn(
              "user-drag-none absolute left-0 top-0 z-0 h-full w-full -translate-x-4 rotate-6 scale-125 overflow-hidden object-cover opacity-0 blur-lg transition-all duration-500 ease-in-out",
              activeImageIndex === index &&
                "z-10 translate-x-0 rotate-0 scale-100 opacity-100 blur-none",
            )}
            src={image.src}
            alt={image.alt}
          />
          <div
            className={cn(
              "absolute bottom-3 left-4 w-4/5 max-w-max scale-125 select-none rounded-md bg-gray-600/40 px-2 py-1 text-2xl capitalize text-gray-100 opacity-0 blur-lg drop-shadow-border transition-all duration-500 max-lg:text-heading-lg",
              activeImageIndex === index &&
                "z-20 rotate-0 scale-100 opacity-100 blur-none",
            )}
          >
            {alt ?? <p className="text-heading-sm">{t("searchMessage")}</p>}
            {"coords" in image && (
              <Link
                className="relative text-heading-md underline decoration-1 transition-all hover:scale-110 hover:animate-pulse"
                to={`/weather/${image.coords.lat},${image.coords.lon}`}
              >
                {image.alt}
                <CursorClicking className="-right-4 top-4" />
              </Link>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
