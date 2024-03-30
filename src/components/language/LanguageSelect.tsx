import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { CountryFlag } from './CountryFlag';

const languages = ['en', 'tr'];

export function LanguageSelect() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleLanguageChange = async (language: (typeof languages)[number]) => {
    await i18n.changeLanguage(language);
    setIsOpen(false);
  };
  const languageSelectRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(languageSelectRef, () => setIsOpen(false));

  return (
    <div className="mt-2 z-[100]" ref={languageSelectRef}>
      <div className="w-max relative ml-auto mr-2">
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-md px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none uppercase"
          aria-expanded={isOpen}
        >
          <CountryFlag language={i18n.language} />
          {i18n.language}
          <svg
            className="-me-1 ms-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            ref={languageSelectRef}
            className="absolute mt-2 w-full rounded-md shadow-lg bg-gray-100 flex flex-col items-stretch z-[100]"
            role="menu"
            aria-orientation="vertical"
          >
            {languages.map((language) => {
              return (
                <button
                  key={language}
                  onClick={() => handleLanguageChange(language)}
                  className={`${
                    i18n.language === language
                      ? 'bg-gray-600 text-white'
                      : 'text-gray-700'
                  } px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-200 hover:text-white rounded-sm`}
                  role="menuitem"
                >
                  <CountryFlag language={language} />
                  <span className="truncate uppercase">{language}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
