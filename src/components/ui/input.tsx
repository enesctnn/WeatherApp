import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-9 w-full rounded-lg bg-gray-400 px-4 py-6 text-md text-white caret-blue-light shadow-sm outline-none placeholder:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input-bg placeholder:dark:text-gray-400",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
