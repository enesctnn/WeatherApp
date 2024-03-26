import logo from '/logo.png';

export const Header = () => (
  <header className="mt-12 h-8 sm:h-14 md:h-20 flex justify-center transition-[height]">
    <img src={logo} alt="iWeather logo" className="object-cover" />
  </header>
);
