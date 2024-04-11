import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={cn(
        className,
        "select-none rounded-md bg-ellipse from-gray-200 to-gray-400 px-2 py-1 text-heading-sm text-gray-500 transition-all enabled:scale-90 enabled:opacity-50 enabled:hover:scale-100 enabled:hover:opacity-100 enabled:active:scale-110 disabled:pointer-events-none dark:from-gray-400 dark:to-gray-900 dark:text-gray-100 sm:px-4 md:text-heading-md",
      )}
      ref={ref}
      {...props}
    />
  ),
);
