import type { PaletteOptions } from '@mui/material/styles/createPalette';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#90C3CB',
    main: '#58A4B0',
    dark: '#3B747D',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#BD92DD',
    main: '#9854CB',
    dark: '#6D309C',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#EB4C34',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FF7E0D',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#1A67AB',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#23DE84',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#D8DBE2',
  },
};

export default palette;
