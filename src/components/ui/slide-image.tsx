import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DataImagesT } from "../../hooks/useSlideShowImages";
import { cn } from "../../lib/utils";
import { CursorClicking } from "./cursor-clicking";
import { ImageSkeleton } from "./loading-skeletons/image-skeleton";

type SlideImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  isActive: boolean;
  image: DataImagesT[number];
};

export const SlideImage = React.forwardRef<HTMLImageElement, SlideImageProps>(
  ({ isActive, image, ...props }, ref) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    const { t } = useTranslation(undefined, { keyPrefix: "slideImages" });

    return (
      <>
        {isActive && (
          <ImageSkeleton
            className={cn(
              "z-50 opacity-100 transition-all",
              loaded && "!-z-50 !opacity-0",
            )}
          />
        )}
        <img
          {...props}
          ref={ref}
          loading="lazy"
          className={cn(
            "user-drag-none absolute left-0 top-0 z-0 h-full w-full -translate-x-4 rotate-6 scale-125 overflow-hidden object-cover opacity-0 blur-lg transition-all duration-500 ease-in-out",
            loaded &&
              isActive &&
              "!z-10 !translate-x-0 !rotate-0 !scale-100 !opacity-100 !blur-none",
          )}
          onLoad={() => setLoaded(true)}
        />
        <div
          className={cn(
            "absolute bottom-3 mx-2 scale-125 select-none rounded-md bg-gray-600/40 px-2 py-1 text-2xl capitalize text-gray-100 opacity-0 blur-lg drop-shadow-border transition-all duration-500 max-lg:text-heading-lg",
            loaded &&
              isActive &&
              "!z-[80] !rotate-0 !scale-100 !opacity-100 !blur-none",
          )}
        >
          {image.title ?? (
            <p className="text-heading-sm">{t("searchMessage")}</p>
          )}
          {!!image.coords && (
            <Link
              className="user-drag-none relative whitespace-nowrap text-heading-md underline decoration-1 transition-all hover:scale-110 hover:animate-pulse"
              to={`/weather/${image.coords.lat},${image.coords.lon}`}
            >
              {image.alt}
              <CursorClicking className="-right-[18px] top-5" />
            </Link>
          )}
        </div>
      </>
    );
  },
);
