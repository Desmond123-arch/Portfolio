import ThemeContext from '#/contexts/ThemeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error('Theme provider must be used inside theme context');
  }
  return themeContext;
};
