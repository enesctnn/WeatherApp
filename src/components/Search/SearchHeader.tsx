export const SearchHeader = () => (
  <header className="flex flex-col gap-y-1">
    <h2 className="text-gray-50 text-heading-md sm:text-heading-lg md:text-heading-xl transition-[font-size]">
      Welcome to <span className="!text-blue-light">TypeWeather</span>
    </h2>
    <p className="text-gray-200 text-sm sm:text-md md:text-lg transition-[font-size]">
      Choose a location to see the weather forecast
    </p>
  </header>
);