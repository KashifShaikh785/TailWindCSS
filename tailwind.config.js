/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./Dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}

