import ReactCountryFlag from "react-country-flag";

export const CountryFlag = ({ nation }: { nation: string }) => (
  <ReactCountryFlag className="mx-2 text-xl" countryCode={nation} svg />
);
