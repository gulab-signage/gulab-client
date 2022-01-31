import DarkModeSharp from '@mui/icons-material/DarkModeSharp';
import IconButton from '@mui/material/IconButton';
import React, { useContext, useEffect, useState } from 'react';
import themeDark from './dark';
import themeDefault from './default';
import ThemeContext from './ThemeContext';

export default function ThemeControl() {
  const { setTheme } = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (setTheme) {
      if (isDark) {
        setTheme(themeDark);
      } else {
        setTheme(themeDefault);
      }
    }
  }, [isDark, setTheme]);

  function handleOnClick() {
    setIsDark((currIsDark) => !currIsDark);
  }

  return (
    <IconButton onClick={handleOnClick}>
      <DarkModeSharp />
    </IconButton>
  );
}
