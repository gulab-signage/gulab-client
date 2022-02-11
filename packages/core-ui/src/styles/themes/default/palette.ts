import type { PaletteOptions } from '@mui/material/styles/createPalette';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#E2E1F5',
    main: '#4840BB',
    dark: '#231F5B',
  },
  secondary: {
    light: '#E8D9DD',
    main: '#975D6E',
    dark: '#3F272E',
  },
  error: {
    light: '#F5CDCC',
    main: '#D63230',
    dark: '#661614',
  },
  warning: {
    light: '#FBE3C5',
    main: '#D17B0F',
    dark: '#4C2C05',
  },
  info: {
    light: '#DEEEF7',
    main: '#449DD1',
    dark: '#1C5373',
  },
  success: {
    light: '#A2EA9A',
    main: '#2B9720',
    dark: '#14430F',
  },
  background: {
    default: '#F0F2F5',
  },
};

export default palette;
