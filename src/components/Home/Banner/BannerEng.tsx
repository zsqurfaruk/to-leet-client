/* eslint-disable react/no-unescaped-entities */
import React  from "react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

const BannerEng = () => {

  return (
    <div className="scale-90 md:scale-100 ml-2">
      <div className="md:text-2xl lg:text-xl text-gray-700 text-justify">
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
      <div className="">
        <div
          id={style.bannerTextColorChange}
          className="mt-2 text-xs md:text-xl relative"
        >
          Start your search today and let us be a part of your journey to <br className="hidden lg:flex"/>
          finding the rental solution of your dreams.
        <BsArrowDownCircleFill
          className={
            "absolute top-5 md:top-9 right-[200px] md:right-96  lg:right-36 w-4 h-4 md:w-5 md:h-5 text-gray-700"
          }
        />
        </div>{" "}
      </div>
    </div>
  );
};

export default BannerEng;
