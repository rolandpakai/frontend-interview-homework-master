import withMT from '@material-tailwind/react/utils/withMT';
/** @type {import('tailwindcss').Config} */
export default withMT({
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geomanist: ['Geomanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
