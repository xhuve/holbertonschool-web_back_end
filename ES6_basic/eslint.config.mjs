// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';

// Initialize compat to convert eslintrc settings to flat config
const compat = new FlatCompat({
  baseDirectory: import.meta.url, // Or __dirname if not using ESM
});

export default [
  ...compat.config({
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides: [
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      },
    ],
  }),
];
