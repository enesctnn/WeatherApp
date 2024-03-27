import React from 'react';
import { useSubmit } from 'react-router-dom';
import { cn } from '../../lib/utils';

export const SearchForm = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => {
  const submit = useSubmit();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const location = formData.get('location') as string;
    if (location.trim().length > 0) submit(formData, { method: 'POST' });
  };
  return (
    <form
      ref={ref}
      className={cn(
        'max-w-full w-72 sm:w-80 md:w-96 transition-[width] flex flex-col mx-auto max-sm:px-4',
        className
      )}
      onSubmit={onSubmit}
      {...props}
    />
  );
});
