import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeContext } from "../../hooks/context/useThemeContext";
import { cn } from "../../lib/utils";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();

  const styles = {
    default: "absolute top-0 bottom-0 z-20 my-auto transition",
    active: "rotate-0 opacity-100 duration-300 ease-in",
    inactive: "-rotate-180 scale-0 opacity-0 duration-150 ease-out",
  };

  return (
    <div className="relative mr-9 w-10 select-none py-2">
      <input
        type="checkbox"
        id="themeSwitch"
        checked={theme === "light"}
        onChange={toggleTheme}
        className={`absolute right-0 z-10 h-6 w-6 cursor-pointer appearance-none overflow-hidden rounded-full border-0 bg-gray-300 dark:bg-gray-700 ${
          theme === "light" ? "-translate-x-4" : "translate-x-0"
        } duration-400 transition`}
      />
      <label
        aria-label="Toggle Dark Mode"
        htmlFor="themeSwitch"
        className="transition-background-color relative flex h-6 cursor-pointer overflow-hidden rounded-full bg-gray-400/70 text-gray-800 duration-200 hover:transition-colors dark:bg-gray-700/70 dark:text-gray-100 md:hover:text-gray-400"
      >
        <MdLightMode
          className={cn(
            "left-[2px]",
            styles.default,
            theme === "light" ? styles.active : styles.inactive,
          )}
          size={20}
        />
        <MdDarkMode
          className={cn(
            "right-[2px]",
            styles.default,
            theme === "light" ? styles.inactive : styles.active,
          )}
          size={20}
        />
      </label>
    </div>
  );
};
