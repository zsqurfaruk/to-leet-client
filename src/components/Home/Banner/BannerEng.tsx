/* eslint-disable react/no-unescaped-entities */
import React  from "react";
import style from "../../../styles/banner.module.css";

const BannerEng = () => {
  return (
    <div className="scale-90 md:scale-100 ml-2 -mt-10">
      <div className="text-lg md:text-2xl lg:text-xl text-gray-700">
        <span
          id={style.bannerTextColorChange}
          className="text-[21px] md:text-[42px] font-semibold"
        >
          Find</span> your rental solution with <span
          id={style.bannerTextColorChange}
          className="text-[21px] md:text-[40px] font-semibold"
        >
          QuickVara's 
        </span> <br className="hidden lg:flex"/>
        extensive listings for a hassle-free renting experience.
      </div>
      <div>
        <div
          id={style.bannerTextColorChange}
          className="mt-2"
        >
         <h1 className="relative text-[16px] md:text-[17.7px]"> Start your search today and let us be a part of your journey to <br className="hidden lg:flex"/>
          finding the rental <br className="hidden md:flex lg:hidden"/> solution of your dreams.</h1>
        </div> 
      </div>
    </div>
  );
};

export default BannerEng;
