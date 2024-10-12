/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '200px', 'max': '425px'},

    }
  },
  plugins: [
    require('daisyui'),
  ],
}