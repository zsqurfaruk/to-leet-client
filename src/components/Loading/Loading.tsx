import { Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
 
function Loading() {
//   useEffect(() => {
//     // Set the value when the user visits the website
//     document.cookie = "myValue=exampleValue; path=/";

//     return () => {
//       // Remove the value when the user closes the website
//       document.cookie = "myValue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     };
//   }, []);
//  const value = Cookies.get("myValue")
  return (
    <div className="sweet-loading flex justify-center h-screen items-center bg-neutral">
     
       <div>
      <Typography className="mr-4 text-center text-4xl font-bold text-warning">
        QuickVara
       </Typography>
       <Typography className="mr-4 cursor-pointer text-warning text-xl font-semibold">
       The Ultimate Rental Solution
       </Typography>
      </div>
    
    </div>
  );
}

export default Loading;
