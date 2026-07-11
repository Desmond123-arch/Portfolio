import ThemeContext from '#/contexts/ThemeContext';
import type { ThemeMode } from '#/types';
import { useState, useEffect } from 'react';
import { applyThemeMode, getInitialMode } from '#/lib/utils';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);
    applyThemeMode(initialMode);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = media.matches ? 'dark' : 'light';
    const onChange = () => applyThemeMode(theme);

    media.addEventListener('change', onChange);

    return () => {
      media.removeEventListener('change', onChange);
    };
  }, [mode]);

  function toggleMode() {
    const nextMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    document.startViewTransition(() => applyThemeMode(nextMode));
    window.localStorage.setItem('theme', nextMode);
  }

  return (
    <ThemeContext.Provider
      value={{ mode, toggleMode, isDarkMode: mode === 'dark' }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
