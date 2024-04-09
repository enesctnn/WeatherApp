/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
      keyframes: {
        bump: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.8)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        bump: 'bump 0.2s',
      },
      backgroundImage: {
        ellipse: 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
      dropShadow: {
        border: '0px 0px 2px rgba(0, 0, 0, 0.6)',
        'white-border': '0px 0px 2px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
