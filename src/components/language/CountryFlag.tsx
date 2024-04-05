import ReactCountryFlag from 'react-country-flag';

export const CountryFlag = ({ language }: { language: string }) => (
  <ReactCountryFlag
    className="mx-2 text-xl"
    countryCode={
      language.split('-').join('').slice(2, 4) || language.includes('tr')
        ? 'tr'
        : 'us'
    }
    svg
  />
);
