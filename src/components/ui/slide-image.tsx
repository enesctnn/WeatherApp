import * as React from "react";
import { cn } from "../../lib/utils";
import { ImageSkeleton } from "./loading-skeletons/image-skeleton";

type SlideImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  isActive: boolean;
};

export const SlideImage = React.forwardRef<HTMLImageElement, SlideImageProps>(
  ({ isActive, ...props }, ref) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);

    return (
      <>
        {!loaded && isActive && (
          <ImageSkeleton className={cn("z-50 opacity-100")} />
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
      </>
    );
  },
);
