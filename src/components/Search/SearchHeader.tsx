import { Trans, useTranslation } from 'react-i18next';

export const SearchHeader = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'home' });
  return (
    <header className="flex flex-col gap-y-1">
      <Trans i18nKey="home.header">
        <h2 className="text-gray-50 text-heading-md sm:text-heading-lg md:text-heading-xl transition-[font-size]">
          Welcome to <span className="!text-blue-light">TypeWeather</span>
        </h2>
      </Trans>
      <p className="text-gray-200 text-sm sm:text-md md:text-lg transition-[font-size]">
        {t('description')}
      </p>
    </header>
  );
};
