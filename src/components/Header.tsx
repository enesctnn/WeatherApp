import logo from '/logo.png';

const Header = () => (
  <header className="my-5 h-8 sm:h-14 md:h-20 flex justify-center transition-[height]">
    <img src={logo} alt="iWeather logo" className="object-cover" />
  </header>
);

export default Header;
