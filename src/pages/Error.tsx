import { KeyReturn } from "@phosphor-icons/react";

import { Link, useRouteError } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Logo } from "../components/search/Logo";
import { Card } from "../components/ui/card";

function ErrorPage() {
  const error = useRouteError();
  const { t } = useTranslation(undefined, { keyPrefix: "error" });
  let message: string = t("errorpage");
  if (error instanceof Error) message = error.message;
  if (typeof error === "string") message = error;

  return (
    <div className="relative flex-grow bg-gray-900 text-white">
      <Logo />
      <Card className="mx-auto !mt-60 flex w-3/4 gap-y-10 !bg-red-800 !py-20 !shadow-red-800/40">
        <h1 className="text-center text-heading-md text-red-300 sm:text-heading-lg md:text-heading-xl">
          {message}
        </h1>
        <Link
          to={"/"}
          className="mx-auto flex w-max items-center gap-x-3 text-heading-sm font-bold text-red-200 transition-all hover:scale-95 sm:text-heading-md md:text-heading-lg lg:text-heading-xl"
        >
          Back to <span className="text-blue-light">TypeWeather</span>
          <KeyReturn />
        </Link>
      </Card>
    </div>
  );
}

export default ErrorPage;
