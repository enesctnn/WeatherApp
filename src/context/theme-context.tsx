import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ThemeModeT = "dark" | "light";

type ThemeContextT = {
  theme: ThemeModeT;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextT>({
  theme: "dark",
  toggleTheme: () => {},
});

/**
 * Theme context provider component.
 * @param {object} props - Props for ThemeContextProvider.
 * @param {React.ReactNode} props.children - Child components that need access to the theme context.
 * @returns {JSX.Element} - Returns the theme context provider component.
 */
export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * State hook for managing the theme mode.
   * @type {[ThemeModeT, React.Dispatch<React.SetStateAction<ThemeModeT>>]} - Tuple containing the current theme mode and a function to update it.
   */
  const [theme, setTheme] = useLocalStorage("theme", "dark" as ThemeModeT);

  /**
   * Function to toggle between dark and light theme modes.
   * @returns {void}
   */
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  /**
   * Effect hook to update the document's class based on the theme mode.
   */
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  /**
   * Render the theme context provider component.
   * @returns {JSX.Element} - Returns the theme context provider component.
   */
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
