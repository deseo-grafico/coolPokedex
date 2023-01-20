/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#0000E5',
          800: '#5800F1',
          700: '#7800F3',
          600: '#9700F8',
          500: '#AC00FD',
          400: '#BD00FF',
          300: '#C952FF',
          200: '#DA89FE',
          100: '#E9BAFE',
          50: '#F7E3FF',
        },
      },
    },
    plugins: [],
  }
}