const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  /**
   * Update config.resolve.alias if this file is moved.
   */
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, '../pages/'),
      '@src': path.resolve(__dirname, '../src/'),
      '@root': path.resolve(__dirname, '../'),
      '@styles': path.resolve(__dirname, '../styles/'),
    };
    return config;
  },
};
