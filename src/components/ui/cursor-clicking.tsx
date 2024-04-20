import { Icon } from "@phosphor-icons/react";
import { IconType } from "react-icons";
import { PiCursorClickFill } from "react-icons/pi";
import { cn } from "../../lib/utils";

export const CursorClicking = ({
  className,
  icon: SpecialIcon = undefined,
}: {
  className?: string;
  icon?: Icon | IconType | undefined;
}) => (
  <div
    aria-hidden
    className={cn("absolute z-20 text-md dark:drop-shadow-border", className)}
  >
    {!SpecialIcon && <PiCursorClickFill />}
    {SpecialIcon && <SpecialIcon />}
    <div className="relative -z-10" aria-hidden>
      <span
        className="absolute bottom-[9px] right-[10px] h-2 w-2 animate-ping rounded-full bg-gray-500 duration-1000 dark:bg-blue-light"
        aria-hidden
      />
      <span
        className="absolute bottom-[9px] right-[10px] h-2 w-2 rounded-full bg-gray-500/80 dark:bg-blue-light/80"
        aria-hidden
      />
    </div>
  </div>
);
