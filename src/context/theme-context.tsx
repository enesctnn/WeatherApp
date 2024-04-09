import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ThemeModeT = 'dark' | 'light';

type ThemeContextT = {
  theme: ThemeModeT;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextT>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark' as ThemeModeT);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
