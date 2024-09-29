/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_yellow: 'rgba(241, 187, 69, 1)',
        custom_purple: 'rgba(70, 29, 124, 1)',
        custom_gray: 'rgba(126, 126, 126, 1)',
        custom_darkblue: 'rgba(0, 33, 130, 1)'
      },
      fontFamily: {
        sriracha: ['Sriracha', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        ruslan_display: ['Ruslan Display', 'sans-serif']
      },
    },
  },
  plugins: [],
}

