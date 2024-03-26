import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'h-9 rounded-lg bg-input-bg px-4 py-6 text-md shadow-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 caret-blue-light text-white capitalize w-full',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
