import Image from 'next/image';
import React from 'react';
import image from "../../image/Blue_And_Yellow_Typography_Company_Logo-removebg-preview.png";

const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-75'>
          <div>
          <Image
                src={image}
                alt="Picture of the author"
                // width={100}
                // height={100}
                className="flex justify-center h-52 w-60 ml-12 -mt-14 lg:mt-0 lg:ml-28"
              ></Image>
              <h1 className='text-xl lg:text-3xl text-center font-semibold text-accent'>To-Leet - The Ultimate Rental Solution</h1>
              </div>
        </div>
    );
};

export default Loading;