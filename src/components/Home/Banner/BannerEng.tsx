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
    <div className="scale-90 md:scale-100">
      <p
        className={
          filterTypeDivision ? "md:text-xl  text-black" : "md:text-2xl "
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
        your perfect destination with{" "}
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
        extensive listings for rent.
      </p>
      <div className="relative">
        <p
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className=" mt-2  text-xs md:text-xl"
        >
          Start your search today and let us be a part of your journey to
          finding the destination of your dreams.
        </p>{" "}
        <BsArrowDownCircleFill
          className={
            filterTypeCity || filterTypeDivision
              ? "absolute top-5 md:top-9 left-40 md:left-64 lg:left-72 w-4 h-4 md:w-5 md:h-5 text-black"
              : "absolute top-5 md:top-9 left-40 md:left-64 lg:left-72 w-4 h-4 md:w-5 md:h-5"
          }
        />
      </div>
    </div>
  );
};

export default BannerEng;
