import { LanguageSelect } from '../language/LanguageSelect';
import { ThemeSwitch } from '../theme/ThemeSwitch';

export function TopMenu() {
  return (
    <div className="flex flex-col items-end px-2 lg:px-4 mt-2">
      <LanguageSelect />
      <ThemeSwitch />
    </div>
  );
}
