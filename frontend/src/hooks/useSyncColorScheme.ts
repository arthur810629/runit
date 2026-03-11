import { useEffect } from 'react';

export function useSyncColorScheme(isDarkMode: boolean) {
  useEffect(() => {
    const nextTheme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', nextTheme);
    document.documentElement.setAttribute(
      'data-mantine-color-scheme',
      nextTheme,
    );
  }, [isDarkMode]);
}
