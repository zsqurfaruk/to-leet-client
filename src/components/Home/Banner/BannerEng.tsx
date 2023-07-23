/* eslint-disable react/no-unescaped-entities */
import React  from "react";
import style from "../../../styles/banner.module.css";

const BannerEng = () => {
  return (
    <div className="scale-90 md:scale-100 ml-2 -mt-14">
      <div className="text-lg md:text-2xl lg:text-xl text-gray-700 hidden md:block">
        <span
          id={style.bannerTextColorChange}
          className="text-[30px] md:text-[42px] font-semibold"
        >
          Find</span> <span id={style.textHandle2}>your</span> <span id={style.textHandle}>the suitable</span> rental solution with <span
          id={style.bannerTextColorChange}
          className="text-[30px] md:text-[40px] font-semibold"
        >
          QuickVara's 
        </span> <br className="hidden lg:flex"/>
        extensive listings for a hassle-free renting experience.
      </div>
      <h1 className="block md:hidden text-lg px-[6px]"><span className="text-4xl text-warning font-semibold -ml-[2px]">QuickVara</span> is the hassle-free way to find your rental solution with extensive listings for rent.</h1>
      <div>
        <div
          id={style.bannerTextColorChange}
          className="mt-2 px-[6px] md:px-0"
        >
         <h1 className="relative text-[16px] md:text-[17.7px]"> Start your search today and let us be a part of your journey to <br className="hidden lg:flex"/>
          finding the rental <br className="hidden md:flex lg:hidden"/> solution of your dreams.</h1>
        </div> 
      </div>
    </div>
  );
};

export default BannerEng;
