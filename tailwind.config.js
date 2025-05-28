/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#651c32',
        'brand-secondary': '#8b2635', 
        'brand-accent': '#faede2',
      }
    },
  },
  plugins: [],
}