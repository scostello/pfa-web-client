// @flow
module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['flowtype'],
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 'off',
    'react/jsx-curly-brace-presence': 'off',
  },
  env: {
    browser: true,
    mocha: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.config.js',
      },
    },
  },
};
