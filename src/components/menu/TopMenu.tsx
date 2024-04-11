import { LanguageSelect } from "../language/LanguageSelect";
import { ThemeSwitch } from "../theme/ThemeSwitch";

export const TopMenu = () => (
  <div className="mt-2 flex flex-col items-end px-2 lg:px-4">
    <LanguageSelect />
    <ThemeSwitch />
  </div>
);
