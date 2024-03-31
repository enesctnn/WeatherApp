import { KeyReturn } from '@phosphor-icons/react';

import { Link, useRouteError } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { Logo } from '../components/search/Logo';
import { Card } from '../components/ui/card';

function ErrorPage() {
  const error = useRouteError();
  const { t } = useTranslation(undefined, { keyPrefix: 'error' });
  let message: string = t('errorpage');
  if (error instanceof Error) message = error.message;

  return (
    <div className="flex-grow bg-gray-900 relative text-white">
      <Logo />
      <Card className="flex mx-auto !mt-60 !bg-red-800 w-3/4 gap-y-10 !shadow-red-800/40 !py-20">
        <h1 className="text-red-300 text-heading-md sm:text-heading-lg md:text-heading-xl text-center">
          {message}
        </h1>
        <Link
          to={'/'}
          className="text-heading-sm sm:text-heading-md md:text-heading-lg lg:text-heading-xl flex items-center w-max gap-x-3 text-red-200 font-bold mx-auto hover:scale-95 transition-all"
        >
          Back to <span className="text-blue-light">TypeWeather</span>
          <KeyReturn />
        </Link>
      </Card>
    </div>
  );
}

export default ErrorPage;
