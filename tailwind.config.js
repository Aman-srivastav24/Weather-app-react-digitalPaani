/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '20px 60px 60px 20px rgba(1, 0.3, 0.3, 0.3)',
      }
    },
  },
  plugins: [],
}