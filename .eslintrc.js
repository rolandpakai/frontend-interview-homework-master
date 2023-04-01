module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'next',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
