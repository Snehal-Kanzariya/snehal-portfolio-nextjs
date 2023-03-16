/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts, tsx}",
    "./components/**/*.{js,jsx,ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#2ecc71",
      },
    },
  },
  plugins: [],
};
