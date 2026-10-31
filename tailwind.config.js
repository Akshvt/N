/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#CBEC6F',
          bright: '#B9FF00',
        },
        lime: '#CBEC6F',
        cobalt: {
          DEFAULT: '#2A24BD',
          soft: '#3B35D4',
          deep: '#1C1885',
          light: '#EEEDFC',
        },
        'cobalt-deep': '#1C1885',
        ink: {
          DEFAULT: '#121212',
          soft: '#1E1E1E',
          muted: '#666666',
        },
        lilac: {
          DEFAULT: '#D7CBF5',
          soft: '#EEE9FB',
        },
        ivory: '#FBF8EF',
        silver: '#C7C7CC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        card: '28px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
