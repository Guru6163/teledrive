/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
   
    extend: {
      backgroundColor: {
        'default': 'white', // Set your default background color here
      },
  
    },
  },
  plugins: [],
};
