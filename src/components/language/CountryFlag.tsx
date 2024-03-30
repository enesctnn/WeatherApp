import ReactCountryFlag from 'react-country-flag';

export const CountryFlag = ({ language }: { language: string }) => (
  <ReactCountryFlag
    className="mx-2 text-xl"
    countryCode={language === 'tr' ? 'TR' : 'US'}
    svg
  />
);
