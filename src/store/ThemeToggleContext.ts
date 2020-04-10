import { createContext } from 'react';

export type ThemeModeType = 'light' | 'dark';

interface ThemeToggleContextInterface {
  themeMode: ThemeModeType;
  toggleTheme: () => void;
}

export default createContext<ThemeToggleContextInterface>(null!);
