import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  screens: {
    ...defaultTheme.screens,
    xs: '280px',
    sm: '360px',
  },
  extend: {
    fontFamily: {
      geomanist: ['Geomanist', 'sans-serif'],
    },
  },
};
export const plugins = [];
