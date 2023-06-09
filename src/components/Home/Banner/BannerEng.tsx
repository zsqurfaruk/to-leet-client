/* eslint-disable react/no-unescaped-entities */
import React  from "react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

const BannerEng = () => {

  return (
    <div className="scale-90 md:scale-100 ml-2">
      <div className="text-lg md:text-2xl lg:text-xl text-gray-700">
        {/* <p id={style.bannerTextColor} className="text-6xl font-semibold"></p>  */}
        <span
          id={style.bannerTextColorChange}
          className="text-2xl md:text-5xl font-semibold"
        >
          Find
        </span>{" "}
         your rental solution with{" "}
        <span
          id={style.bannerTextColorChange}
          className="text-2xl md:text-5xl font-semibold"
        >
          To-Leet's
        </span> <br className="hidden lg:flex"/>
        extensive listings for rent.
      </div>
      <div>
        <div
          id={style.bannerTextColorChange}
          className="mt-2"
        >
         <h1 className="relative text-[16px] md:text-[17.7px]"> Start your search today and let us be a part of your journey to <br className="hidden lg:flex"/>
          finding the rental <br className="hidden md:flex lg:hidden"/> solution of your dreams.</h1>
        {/* <BsArrowDownCircleFill
          className={
            "absolute bottom-0 left-[68%] lg:left-[56%] w-4 h-4 md:w-[18px] md:h-[18px] text-gray-700"
          }
        /> */}
        </div> 
      </div>
    </div>
  );
};

export default BannerEng;
