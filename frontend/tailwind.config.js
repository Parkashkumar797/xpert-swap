/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'serif': ['Poppins', 'serif'],
        'mono': ['Poppins', 'monospace'],
         robotoMono: ['"Roboto Mono"', 'monospace'],
          inter: ['Inter', 'sans-serif'],
           roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
