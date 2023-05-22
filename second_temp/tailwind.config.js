/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'Libre': ['Libre Franklin', 'sans-serif'],
    },
    screens:{
     'sm':'375px',
     'lg':'1440px',
    },
    extend: {
      colors:{
      'Blue': 'hsl(223, 87%, 63%)',
      'Pale_Blue': 'hsl(223, 100%, 88%)',
      'Light Red': 'hsl(354, 100%, 66%)', 
      'Gray': 'hsl(0, 0%, 59%)',
      'Very_Dark_Blue': 'hsl(209, 33%, 12%)',
      }
    },
  },
  plugins: [],
}

