/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-hg': [
          '96px',
          {
            lineHeight: '100%',
            fontWeight: 800,
          },
        ],
        'heading-xl': [
          '48px',
          {
            lineHeight: '100%',
            fontWeight: 800,
          },
        ],
        'heading-lg': [
          '32px',
          {
            lineHeight: '120%',
            fontWeight: 700,
          },
        ],
        'heading-md': [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: 700,
          },
        ],
        'heading-sm': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: 700,
          },
        ],
        'heading-xs': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: 700,
          },
        ],
        lg: [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: 400,
          },
        ],
        md: [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: 400,
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: 400,
          },
        ],
        xs: [
          '12px',
          {
            lineHeight: '140%',
            fontWeight: 400,
          },
        ],
      },
      colors: {
        gray: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#BFBFD4',
          300: '#ABABC4',
          400: '#7F7F98',
          500: '#3B3B54',
          600: '#22222F',
          700: '#1C1C27',
          800: '#16161F',
          900: '#13131A',
        },
        blue: {
          light: '#8FB2F5',
        },
        'input-bg': '#1E1E29',
      },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
