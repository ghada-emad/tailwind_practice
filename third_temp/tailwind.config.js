/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'sm':'375px',
      'md':'786px',
      'lg':'1440px',
    },
  
    extend: {
      colors:{
        "Soft_Orange": "hsl(35, 77%, 62%)",
        "Soft_Red": "hsl(5, 85%, 63%)",
         "Off_white": "hsl(36, 100%, 99%)",
         "Grayish_blue": "hsl(233, 8%, 79%)",
          "Dark_grayish_blue": "hsl(236, 13%, 42%)",
          "Very_dark_blue": "hsl(240, 100%, 5%)",
      },
      fontFamily:{
        Inter:"['Inter', sans-serif]",
      },
      fontSize:{
        paragraph:'16px',
      },
    },
  },
  plugins: [],
}
