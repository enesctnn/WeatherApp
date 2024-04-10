import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { CountryFlag } from "./CountryFlag";

const languages = ["en", "tr"];

export function LanguageSelect() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleLanguageChange = async (language: (typeof languages)[number]) => {
    await i18n.changeLanguage(language);
    setIsOpen(false);
  };
  const languageSelectRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(languageSelectRef, () => setIsOpen(false));

  return (
    <div className="relative w-max">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        type="button"
        className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium uppercase text-gray-700 shadow-md hover:bg-gray-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <CountryFlag language={i18n.language} />
        {i18n.language}
        <svg
          className="-me-1 ms-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
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
          className="absolute z-[100] mt-2 flex w-full flex-col items-stretch gap-y-1 rounded-md bg-gray-100 p-1 shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageChange(language)}
              className={`${
                i18n.language.includes(language)
                  ? "bg-gray-600 text-white"
                  : "text-gray-700"
              } inline-flex items-center rounded-sm px-4 py-2 text-start text-sm hover:bg-gray-200 hover:text-white`}
              role="menuitem"
            >
              <CountryFlag language={language} />
              <span className="truncate uppercase">{language}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
