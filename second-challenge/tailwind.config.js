/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'yellow': '#f4d04e',
        'white': '#ffffff'
      },
      textColor: {
        'grey': '#808080',
        'black': '#121212',
        'yellow': '#f4d04e',
      },
      fontFamily: {
        figtreeBold: ["FigtreeBold", "sans-serif"],
        figtreeRegular: ["FigtreeRegular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

