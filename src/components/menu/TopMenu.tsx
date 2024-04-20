import { LanguageSelect } from "../language/LanguageSelect";
import { ThemeSwitch } from "../theme/ThemeSwitch";
import { ToggleUnitsButton } from "../units/ToggleUnitsButton";

export const TopMenu = () => (
  <div className="mt-2 flex w-full justify-end gap-x-2 px-2 lg:px-4">
    <ToggleUnitsButton />
    <div className="flex flex-col items-end gap-y-2">
      <LanguageSelect />
      <ThemeSwitch />
    </div>
  </div>
);
