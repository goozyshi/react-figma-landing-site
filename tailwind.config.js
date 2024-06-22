/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#f5f7fa',
        'neutralDGray': '#4d4d4d',
        'brandPrimary': '#4caf4f',
        'neutralGray': '#717171',
      }
    },
  },
  plugins: [],
}

