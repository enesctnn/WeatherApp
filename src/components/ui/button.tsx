import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={cn(
        className,
        'disabled:pointer-events-none disabled:opacity-50 disabled: px-2 sm:px-4 py-1 bg-gradient-to-b from-sky-200 to-blue-800 rounded-md text-heading-sm md:text-heading-md !text-gray-100'
      )}
      ref={ref}
      {...props}
    ></button>
  )
);
