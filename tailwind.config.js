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
        cobalt: {
          DEFAULT: '#2A24BD',
          soft: '#3B35D4',
          deep: '#1C1885',
          light: '#EEEDFC',
        },
        ink: {
          DEFAULT: '#0F1F16',
          soft: '#25362C',
          muted: '#55655B',
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
