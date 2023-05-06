import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

const BannerBan = () => {
  const {
    filterTypeCity,
 
    filterTypeDivision,
   
  }: any = useContext(StateContext);
 
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <p
        className={
          filterTypeDivision
            ? "md:text-xl lg:scale-110 w-10/12 lg:w-full mx-auto text-black"
            : "md:text-xl lg:scale-110 w-10/12 lg:w-full mx-auto"
        }
      >
        <span
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className="text-5xl font-semibold"
        >
          {" "}
          To-Leet{" "}
        </span>
        এর সাথে আপনার পছন্দের বাসস্থান খুঁজুন।
      </p>
      <div className="relative">
        <p
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className="lg:-ml-8 mt-2 w-10/12 lg:w-full mx-auto text-xs md:text-[16.2px] text-justify md:leading-6 lg:leading-[13px]"
        >
          আজই আপনার অনুসন্ধান শুরু করুন এবং আপনার স্বপ্নের বাসস্থান খুঁজে পেতে <br className="hidden lg:flex"/><br className="hidden lg:flex"/>
          আপনার যাত্রার একটি অংশ হতে দিন।
        </p>{" "}
        {lang ? (
          <BsArrowDownCircleFill
            className={
              filterTypeCity || filterTypeDivision
                ? "absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5 text-black"
                : "absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5"
            }
          />
        ) : (
          <BsArrowDownCircleFill
            className={
              filterTypeCity || filterTypeDivision
                ? "absolute top-[53px] md:top-7 left-28 md:left-64 lg:left-60 w-4 h-4 md:w-5 md:h-5 text-black"
                : "absolute top-[53px] md:top-7 left-28 md:left-56 lg:left-60 w-4 h-4 md:w-5 md:h-5"
            }
          />
        )}
      </div>
    </div>
  );
};

export default BannerBan;
