/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rey: {
          black: '#030704',
          dark: '#0A1A0F',
          gold: '#FFB300',
          green: '#39FF14',
          blue: '#3D9BFF',
          card: '#141008',
          gray: '#B0A184',
        }
      }
    },
  },
  plugins: [],
}
