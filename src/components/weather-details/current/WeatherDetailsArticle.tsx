import { Icon } from "@phosphor-icons/react";
import { Counter } from "../../ui/counter";
import { IconType } from "react-icons";

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
    <h2 className="flex items-center gap-x-3 text-heading-xs text-gray-800 dark:text-gray-200">
      <Icon width={24} height={24} size={24} />
      {header}
    </h2>
    <p className="ml-auto whitespace-nowrap text-heading-sm text-gray-900 dark:text-gray-100">
      {useCounter && value !== 0 && typeof value === "number" && (
        <Counter value={value} direction="up" />
      )}
      {useCounter && value === 0 && value}
      {!useCounter && value}
      {symbol}
    </p>
  </article>
);
