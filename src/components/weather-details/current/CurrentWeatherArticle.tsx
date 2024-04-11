import { AnimatePresence, motion } from "framer-motion";

type CurrentWeatherArticleProps = {
  degree: "C" | "F";
  temp: { index: number; max: number; min: number };
  icon: {
    src: string;
    alt: string;
  };
  bg: {
    src: string;
    alt: string;
  };
  weather: string;
};

export const CurrentWeatherArticle = ({
  degree,
  temp,
  bg,
  icon,
  weather,
}: CurrentWeatherArticleProps) => (
  <>
    <article className="z-50 flex place-content-between items-end">
      <section className="flex-1 space-y-2">
        <h2 className="weather-article-heading">
          {temp.index}&deg;{degree}
        </h2>
        <div>
          <h3 className="text-heading-sm transition-[font-size] md:text-heading-md">
            {temp.min}&deg;{degree} / {temp.max}&deg;{degree}
          </h3>
          <p className="text-sm capitalize transition-[font-size] sm:text-md md:text-lg">
            {weather}
          </p>
        </div>
      </section>
      <div className="-mb-5 -mr-5 flex-[1.2] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="ml-auto max-h-44 max-w-40"
          src={icon.src}
          alt={icon.alt}
        />
      </div>
    </article>
    <div className="absolute inset-3 overflow-hidden rounded-xl">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, z: 0, rotate: 5, scale: 1.2 }}
          animate={{ opacity: 1, z: 10, rotate: 0, scale: 1 }}
          exit={{
            opacity: 0,
            z: 0,
            rotate: -5,
            scale: 0,
            transition: { duration: 2 },
          }}
          style={{ backgroundImage: `url(${bg.src})` }}
          transition={{ type: "tween" }}
          className="h-full w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
        />
      </AnimatePresence>
    </div>
  </>
);
