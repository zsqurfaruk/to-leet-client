/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT(
  {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#ECF2FF",
  
            secondary: "#3E54AC",
  
            accent: "#62B6B7",
  
            neutral: "#3D4451",
  
            "base-100": "#FFFFFF",
  
            info: "#3ABFF8",
  
            success: "#36D399",
  
            warning: "#FBBD23",
  
            error: "#F87272",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }
)
