const path = require('path');
const { merge } = require('webpack-merge');

const toPath = (location) => path.join(process.cwd(), location);

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: true,
  },
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    });
  },
};
