import { createContext } from 'react';

type ThemeContextProps = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

export default ThemeContext;
