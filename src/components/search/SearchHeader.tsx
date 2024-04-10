import { Trans, useTranslation } from "react-i18next";

export const SearchHeader = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "home" });
  return (
    <header className="flex flex-col gap-y-1">
      <Trans i18nKey="home.header">
        <h2 className="text-heading-md text-gray-600 transition-[font-size] dark:text-gray-50 sm:text-heading-lg md:text-heading-xl">
          Welcome to
          <span className="!text-blue-light drop-shadow-border dark:drop-shadow-none">
            TypeWeather
          </span>
        </h2>
      </Trans>
      <p className="text-sm text-gray-500 transition-[font-size] dark:text-gray-200 sm:text-md md:text-lg">
        {t("description")}
      </p>
    </header>
  );
};
