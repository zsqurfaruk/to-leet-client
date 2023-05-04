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
            primary: "#eff3fc",
  
            secondary: "#3E54AC",
  
            accent: "#00ffc8",
  
            neutral: "#73A38B",
  
            "base-100": "#FFFFFF",
  
            info: "#3ABFF8",
  
            success: "#16d8a7ec",
  
            warning: "#FBBD23",
  
            error: "#F87272",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }
)
