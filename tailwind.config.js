/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F1EFE6',
        'secondary': '#0f2570'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
    },
  },
  plugins: [],
}

