/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    // "./app/components/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

