import * as React from 'react';
import { cn } from '../../lib/utils';

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-xl shadow bg-gray-800', className)}
    {...props} 
  >
    {children}
  </div>
));
