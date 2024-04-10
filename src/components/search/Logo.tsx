import logo from "/logo.png";

export const Logo = () => (
  <header className="mt-12 flex h-8 justify-center transition-[height] sm:h-14 md:h-20">
    <img
      src={logo}
      alt="iWeather logo"
      className="object-cover drop-shadow-border dark:drop-shadow-none"
    />
  </header>
);
