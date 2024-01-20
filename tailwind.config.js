/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0c0a09',
        'secondary': '#3c3a39',
        'accent': '#fafaf9'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'league': ['League Spartan']
      },
    },
  },
  plugins: [],
}

