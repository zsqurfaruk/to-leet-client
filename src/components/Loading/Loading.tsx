// import Image from 'next/image';
// import React from 'react';
// import image from "../../image/Blue_And_Yellow_Typography_Company_Logo-removebg-preview.png";

// const Loading = () => {
//     return (
//         <div className='flex justify-center h-screen items-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-75'>
//           <div>
//           <Image
//                 src={image}
//                 alt="Picture of the author"
//                 // width={100}
//                 // height={100}
//                 className="flex justify-center h-52 w-60 ml-12 -mt-14 lg:-mt-32 lg:ml-28"
//               ></Image>
//               <h1 className='text-xl lg:text-3xl text-center font-semibold text-accent'>To-Leet - The Ultimate Rental Solution</h1>
//               </div>
//         </div>
//     );
// };

// export default Loading;

import { Typography } from "@material-tailwind/react";
import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#00ffc8",
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading flex justify-center h-screen items-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-75">
      {/* <BarLoader
        color="#36d7b7"
        speedMultiplier={0}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
     <div>
     <Typography className="mr-4 text-center text-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
        To-Leet
      </Typography>
      <Typography className="mr-4 cursor-pointer text-primary text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
      The Ultimate Rental Solution
      </Typography>
     </div>
    </div>
  );
}

export default Loading;
