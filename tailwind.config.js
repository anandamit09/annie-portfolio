/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      /* Berry & Bone — drawn from the four project palettes so the shell and
         the work read as one collection. `woad` and `rust` are the secondary
         accents (Gramin's indigo, Postscript's brick). */
      colors: {
        bone: '#F7F1E6',
        cream: '#EFE6D9',
        ink: '#1C1A17',
        night: '#141017',
        surface: '#1F1A24',
        berry: '#A11E59',
        woad: '#1B344D',
        rust: '#BC2E1F',
      },
    },
  },
  plugins: [],
};
