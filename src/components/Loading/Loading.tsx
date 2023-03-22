import Image from 'next/image';
import React from 'react';
import image from "../../image/logo.png";

const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
           <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" bg-accent"
              ></Image>
        </div>
    );
};

export default Loading;