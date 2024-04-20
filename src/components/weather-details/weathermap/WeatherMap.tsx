import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useFirstRender } from "../../../hooks/useFirstTimeRender";
import { Card } from "../../ui/card";
import { CursorClicking } from "../../ui/cursor-clicking";
import { ImageSkeleton } from "../../ui/loading-skeletons/image-skeleton";

export function WeatherMap({
  coords: { lat, lon },
}: {
  coords: { lat: number; lon: number };
}) {
  const firstRender = useFirstRender();

  const [loaded, setLoaded] = useState(false);
  const mapLink = `https://www.ventusky.com/?p=${lat};${lon};8;`;

  const { t } = useTranslation();

  return (
    <Card className="weather-card relative h-[500px] !p-0 lg:h-full">
      <div className="absolute top-[370px] flex w-full text-heading-md sm:justify-center md:!top-[70px] lg:!top-20">
        <a
          className="relative flex w-max gap-x-2 px-1 text-gray-100 underline decoration-1 drop-shadow-border transition-all hover:scale-110"
          target="_blank"
          href={mapLink}
        >
          {t("map")} <FaMapMarkedAlt />
          <CursorClicking className="-bottom-1 -right-4" />
        </a>
      </div>
      <iframe
        className="h-full w-full rounded-xl"
        src={mapLink}
        onLoad={() => setLoaded(true)}
        hidden={!firstRender && !loaded}
        onError={(err) => {
          if (err instanceof Error) console.log(err.message);
          throw err;
        }}
      />
      {!loaded && <ImageSkeleton />}
    </Card>
  );
}
