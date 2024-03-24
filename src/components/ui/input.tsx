import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-9 rounded-md bg-input-bg px-4 py-6 text-md shadow-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 caret-blue-light w-72 sm:w-80 md:w-96 transition-[width] mx-auto text-white capitalize',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
