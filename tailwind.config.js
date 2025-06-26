/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue":"#163158",
        "primary-lemon-green":"#59790b",
        "primary-dark-green":"#033e28",
      }
    },
  },
  plugins: [],
}