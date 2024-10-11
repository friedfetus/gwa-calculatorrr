/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"], // Updated path for root directory
  theme: {
    extend: {
      backgroundImage: {
        'pattern-circle': "url('assets/bg-pat-circ.png')", // Custom background image
      },
    },
    fontFamily: {
        poppins: ['Poppins']
    }
  },
  plugins: [],
}
