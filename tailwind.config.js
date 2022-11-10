const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Axiforma', ...fontFamily.sans],
      },
      container: {
        center: true,
        padding:'1rem'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
        '2xl': '1352px',
        'max-md': { raw: '(max-width: 991px)' },
        'max-sm': { raw: '(max-width: 767px)' },
      },
      colors: {
        primary: '#0C5EE8',
        primaryLight: '#317AF5',
        secondary: '#13A1C5',
        secondaryLight: '#16B8E1',
        success: '#35B958',
        successLight: '#6FD189',
        danger: '#EA4335',
        dangerLight: '#FA6B5F',
        warning: '#FBBC05',
        warningLight: '#FCCB3C',
        black: '#141D2E',
        blackLight: '#3D434F',
        ghost: '#CED4DA',
        gray: '#EDF1F4',
        grayLight: '#F8F9FA',
        white: '#FFFFFF',
        body: '#FBFBFB',
      },
      backgroundImage: {
        primaryGradient:
          'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
        primaryLightGradient:
          'linear-gradient(198.61deg, #0C5EE8 12.59%, #317AF5 87.41%)',
        primaryLightGradientReverse:
          'linear-gradient(198.61deg, #317AF5 12.59%, #0C5EE8 87.41%)',
        secondaryGradient: 'linear-gradient(180deg, #13A1C5 0%, #16B8E1 100%)',
        secondaryLightGradient:
          'linear-gradient(270deg, #16B8E1 0%, #13A1C5 100%)',
        secondaryLightGradientReverse:
          'linear-gradient(180deg, #16B8E1 0%, #13A1C5 100%)',
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.313', letterSpacing: '0.031em' }], // 14px - lh: 21px - ls: 0.5px
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.031em' }], // 16px - lh: 24px - ls: 0.5px
        lg: ['1.25rem', { lineHeight: '1.875' }], // 20px - lh: 30px
        xl: ['1.5rem', { lineHeight: '2.125' }], // 24px - lh: 34px
        '2xl': ['1.75rem', { lineHeight: '2.25' }], // 28px - lh: 36px
        '3xl': ['2rem', { lineHeight: '2.375' }], // 32px - lh: 38px
        '4xl': ['3rem', { lineHeight: '3.313' }], // 48px - lh: 53px
        '5xl': ['5rem', { lineHeight: '6' }], // 80px - lh: 96px
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
