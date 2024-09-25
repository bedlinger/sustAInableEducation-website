/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      minHeight: {
        'content-container': 'calc(100vh-10rem)',
        'content-container-nav': 'calc(100vh-17rem)',
      }
    },
  },
  plugins: [require('tailwindcss-primeui'), require('@tailwindcss/typography')],
}

