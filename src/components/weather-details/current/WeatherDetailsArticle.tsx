import { Icon } from "@phosphor-icons/react";
import { IconType } from "react-icons";
import { Counter } from "../../ui/counter";

type WeatherDetailsArticleProps = {
  icon: Icon | IconType;
  header: string;
  value: number | string;
  symbol?: JSX.Element | string;
  useCounter?: boolean;
};

export const WeatherDetailsArticle = ({
  icon: Icon,
  value,
  header,
  symbol,
  useCounter,
}: WeatherDetailsArticleProps) => (
  <article className="flex w-full items-center justify-between py-4">
    <h2 className="flex items-center gap-x-3 text-heading-xs text-gray-800 dark:text-gray-200 lg:text-heading-sm">
      <Icon className="text-[24px] lg:text-[30px]" />
      {header}
    </h2>
    <p className="ml-auto whitespace-nowrap text-heading-sm text-gray-900 dark:text-gray-100 lg:text-heading-md">
      {useCounter && value !== 0 && typeof value === "number" && (
        <Counter value={value} direction="up" />
      )}
      {useCounter && value === 0 && value}
      {!useCounter && value}
      {symbol}
    </p>
  </article>
);
