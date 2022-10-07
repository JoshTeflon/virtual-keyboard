/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        magical: 'inset 5px 5px 10px #D1D9E9, inset -5px -5px 10px #ECF0F3',
        btn: '0 2px 4px rgba(0, 0, 0, 0.1)',
        btnLg: '0 4px 8px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
}
