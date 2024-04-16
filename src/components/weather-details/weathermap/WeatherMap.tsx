import { useState } from "react";
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

  return (
    <Card className="weather-card relative h-[500px] overflow-hidden !p-0 lg:h-full">
      <p className="absolute bottom-[100px] flex w-full justify-center text-heading-md">
        <a
          className="relative flex w-max gap-x-2 text-gray-100 underline decoration-1 transition-all hover:scale-110 2xl:ml-16"
          target="_blank"
          href={mapLink}
        >
          Open Map <FaMapMarkedAlt />
          <CursorClicking className="-bottom-1 -right-4" />
        </a>
      </p>
      <iframe
        className="h-full w-full"
        src={mapLink}
        onLoad={() => setLoaded(true)}
        hidden={!firstRender && !loaded}
      />
      {!loaded && <ImageSkeleton />}
    </Card>
  );
}
