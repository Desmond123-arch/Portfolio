import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ThemeMode } from '#/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function applyThemeMode(mode: ThemeMode) {
  document.documentElement.classList.toggle('dark', mode === 'dark');
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.style.colorScheme = mode;
  return mode;
}

export function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return 'dark';
}
