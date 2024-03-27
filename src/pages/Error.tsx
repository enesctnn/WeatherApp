import { KeyReturn } from '@phosphor-icons/react';

import { Link, useRouteError } from 'react-router-dom';

import { Header } from '../components/search/Header';
import { Card } from '../components/ui/card';

function ErrorPage() {
  const error = useRouteError();
  let message: string = 'Something went wrong!';
  if (error instanceof Error) message = error.message;

  return (
    <div className="flex-grow bg-gray-900 relative text-white">
      <Header />
      <Card className="flex mx-auto !mt-60 !bg-red-800 w-3/4 gap-y-10 !shadow-red-800/40 !py-20">
        <h1 className="text-red-300 text-heading-md sm:text-heading-lg md:text-heading-xl text-center">
          {message}
        </h1>
        <Link
          to={'/'}
          className="text-sm sm:text-md md:text-lg lg:text-xl flex items-center w-max gap-x-3 text-red-200 font-bold mx-auto"
        >
          Back to TypeWeather
          <KeyReturn />
        </Link>
      </Card>
    </div>
  );
}

export default ErrorPage;
