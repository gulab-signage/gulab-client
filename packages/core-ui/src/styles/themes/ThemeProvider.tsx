import type { Theme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { PropsWithChildren } from 'react';
import React, { useMemo, useState } from 'react';
import themeDefault from './default';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }: PropsWithChildren<unknown>) {
  const [theme, setTheme] = useState<Theme>(themeDefault);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
