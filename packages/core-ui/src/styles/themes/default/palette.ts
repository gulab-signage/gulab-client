import type { PaletteOptions } from '@mui/material/styles/createPalette';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#BBB8F4',
    main: '#6159E6',
    dark: '#221BB1',
  },
  secondary: {
    light: '#E5FEC3',
    main: '#AFFC41',
    dark: '#76C903',
  },
  error: {
    light: '#F5CDCC',
    main: '#D63230',
    dark: '#661614',
  },
  warning: {
    light: '#FCE1C5',
    main: '#F58F29',
    dark: '#884707',
  },
  info: {
    light: '#C2F0FF',
    main: '#00BBF9',
    dark: '#003D52',
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
