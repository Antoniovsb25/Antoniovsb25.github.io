/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FAA500',
        secondary: {
          300: '#FAFAFA',
          400: '#EFEFEF',
          500: '#353535',
        },
        sku: {
          1: '#3C3B79',
          2: '#6497D3',
          3: '#D37164',
          4: '#DEAC71',
          5: '#EAE9E5',
          6: '#CFC9B0',
          7: '#D84E4B',
          8: '#000000',
        },
      },
      width: {
        '308px': '308px',
      },
      maxWidth: {
        '1920px': '1920px',
      },
    },
  },
  plugins: [],
};
