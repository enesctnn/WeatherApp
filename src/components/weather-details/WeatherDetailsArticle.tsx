import { Icon } from '@phosphor-icons/react';

type WeatherDetailsArticleProps = {
  icon: Icon;
  header: string;
  description: JSX.Element | string;
};

export function WeatherDetailsArticle({
  icon,
  description,
  header,
}: WeatherDetailsArticleProps) {
  const Icon = icon;
  return (
    <article className="flex items-center justify-between w-full py-4">
      <h2 className="flex gap-x-3 text-heading-xs text-gray-200 items-center">
        <Icon width={24} height={24} />
        {header}
      </h2>
      <p className="ml-auto text-heading-sm text-gray-100">{description}</p>
    </article>
  );
}
