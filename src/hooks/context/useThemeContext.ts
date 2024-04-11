import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

/**
 * A custom hook to access the theme context.
 * @returns {object} The theme context object containing theme and toggleTheme function.
 * @throws {Error} If used outside of a ThemeContextProvider.
 */
export function useThemeContext() {
  /**
   * Retrieves the theme context.
   * @type {object | undefined}
   */
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be wrapped with ThemeContextProvider",
    );
  }

  return context;
}
