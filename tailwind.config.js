/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alien_encounters_solid: ["Alien-Encounters-Solid", "sans-serif"],
        alien_encounters: ["Alien-Encounters", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
};
