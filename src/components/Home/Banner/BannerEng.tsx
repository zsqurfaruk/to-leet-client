/* eslint-disable react/no-unescaped-entities */
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
 

const BannerEng = () => {
  const {
    filterTypeCity,

    filterTypeDivision,
  }: any = useContext(StateContext);

  return (
    <div>
      <p
        className={
          filterTypeDivision
            ? "md:text-xl lg:scale-110 w-10/12 lg:w-full mx-auto text-black"
            : "md:text-2xl lg:scale-110 w-10/12 lg:w-full mx-auto"
        }
      >
        {/* <p id={style.bannerTextColor} className="text-6xl font-semibold"></p>  */}
        <span
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className="text-2xl md:text-5xl font-semibold"
        >
          Find
        </span>{" "}
        your perfect destination with
        <span
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className="text-2xl md:text-5xl font-semibold"
        >
          To-Leet's
        </span>
        <br />
        extensive listings of apartments, houses, and mess for rent. <br />
      </p>
      <div className="relative">
        <p
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className="lg:-ml-8 mt-2 w-10/12 lg:w-full mx-auto text-xs md:text-xl"
        >
          Start your search today and let us be a part of your journey to
          finding the destination of your dreams.
        </p>{" "}
        <BsArrowDownCircleFill
          className={
            filterTypeCity || filterTypeDivision
              ? "absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5 text-black"
              : "absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5"
          }
        />
      </div>
    </div>
  );
};

export default BannerEng;
