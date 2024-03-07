/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#141414',
        'secondary': '#1f1f1f',
        'green': '#c5f82a',
        'grey': '#333333'
      },
      textColor: {
        'green': '#c5f82a',
        'grey': '#333333'
      },
      fontFamily: {
        interBold: ["InterBold", "sans-serif"],
        interSemiBold: ["InterSemiBold", "sans-serif"],
        interRegular: ["InterRegular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

