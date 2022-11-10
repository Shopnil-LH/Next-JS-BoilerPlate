/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {},
      container: {},
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
      },
      colors: {},
      backgroundImage: {},
      fontSize: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
