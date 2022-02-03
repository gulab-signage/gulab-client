import type { ThemeOptions } from '@mui/material/styles/createTheme';

const components: ThemeOptions['components'] = {
  MuiTextField: {
    defaultProps: {
      hiddenLabel: true,
      size: 'small',
      variant: 'outlined',
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-disabled': {
          backgroundColor: theme.palette.grey['50'],
        },
      }),
    },
  },
};

export default components;
