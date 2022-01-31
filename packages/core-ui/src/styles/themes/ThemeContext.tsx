import type { Theme } from '@mui/material/styles';
import React from 'react';

export type TypeThemeContext = {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = React.createContext<TypeThemeContext>({});

export default ThemeContext;
