// import { StorybookConfig } from '@storybook/react/types';

// TODO: Make it work with typescript.
// TODO: The linter is not linting this file.

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // https://github.com/mui-org/material-ui/issues/24282
    // This is required to fix a problem with @emotion but it might break something.
    // TODO: Check occasionally if fix is applied

    if (config.resolve && config.resolve.alias) {
      delete config.resolve.alias['emotion-theming'];
      delete config.resolve.alias['@emotion/styled'];
      delete config.resolve.alias['@emotion/core'];
    }

    return config;
  },
};
