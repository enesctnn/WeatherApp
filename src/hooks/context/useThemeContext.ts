import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be wrapped with ThemeContextProvider",
    );
  }
  return context;
}
