/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
   
    fontFamily:{
      'font' :['Karla', 'sans-serif'],
    },
    extend: {
      colors:{
        'Cyan': 'hsl(179, 62%, 43%)',
        'Bright_Yellow': 'hsl(71, 73%, 54%)',
        'Light_Gray': 'hsl(204, 43%, 93%)',
        'Grayish_Blue': 'hsl(218, 22%, 67%)',
        'light-cyan':'rgb(32,178,170)',
      },
      fontSize:{
        'paragraph-size':'16px',
      },
    },
  },
  plugins: [],
}

