import Image from 'next/image';
import React from 'react';
import image from "../../image/Blue_And_Yellow_Typography_Company_Logo-removebg-preview.png";

const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-75'>
           <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className=""
              ></Image>
        </div>
    );
};

export default Loading;