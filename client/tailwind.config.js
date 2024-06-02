/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#081b29',
      },
      minHeight: {
        '80vh': '80vh', 
      },
    },
  },
  plugins: [],
}

