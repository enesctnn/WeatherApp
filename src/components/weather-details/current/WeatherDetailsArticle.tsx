import { Icon } from '@phosphor-icons/react';
import { Counter } from '../../ui/counter';

type WeatherDetailsArticleProps = {
  icon: Icon;
  header: string;
  value: number;
  symbol?: JSX.Element | string;
};

export const WeatherDetailsArticle = ({
  icon,
  value,
  header,
  symbol,
}: WeatherDetailsArticleProps) => {
  const Icon = icon;
  return (
    <article className="flex items-center justify-between w-full py-4">
      <h2 className="flex gap-x-3 text-heading-xs text-gray-200 items-center">
        <Icon width={24} height={24} />
        {header}
      </h2>
      <p className="ml-auto text-heading-sm text-gray-100">
        {value !== 0 && <Counter value={value} direction="up" />}
        {value === 0 && value}
        {symbol}
      </p>
    </article>
  );
};
