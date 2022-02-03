import { GlobalStyles, initI18n, ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    initI18n();
    return (
      <ThemeProvider>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    );
  },
];
