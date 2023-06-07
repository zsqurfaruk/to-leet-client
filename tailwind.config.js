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
  
            accent: "#e6ec34",
  
            neutral: "#f1feff",
  
            "base-100": "#FFFFFF",
  
            info: "#3ABFF8",
  
            success: "#e6ec34",
  
            warning: "#1490a3d6",
  
            error: "#F87272",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }
)
