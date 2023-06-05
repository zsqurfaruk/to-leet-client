import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

const BannerBan = () => {
  const {
    filterTypeCity,
 
    filterTypeDivision,
   
  }: any = useContext(StateContext);
 
 
  return (
    <div className="scale-90 md:scale-100 lg:scale-110 lg:ml-5">
      <p
        className={
          filterTypeDivision
            ? "md:text-xl  text-black"
            : "md:text-xl mx-auto"
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
          className="mt-2 text-xs md:text-[16.2px] text-justify md:leading-6 lg:leading-[13px]"
        >
          আজই আপনার অনুসন্ধান শুরু করুন এবং আপনার স্বপ্নের বাসস্থান খুঁজে পেতে <br className="hidden lg:flex"/><br className="hidden lg:flex"/>
          আপনার যাত্রার একটি অংশ হতে দিন।
        </p>{" "}
       
          <BsArrowDownCircleFill
            className={
              filterTypeCity || filterTypeDivision
                ? "absolute top-5 md:top-7 lg:top-6 left-[232px] md:left-40 lg:left-[267px] w-4 h-4 md:w-5 md:h-5 text-black"
                : "absolute top-5 md:top-7 lg:top-6 left-[232px] md:left-40 lg:left-[267px] w-4 h-4 md:w-5 md:h-5"
            }
          />
        
      </div>
    </div>
  );
};

export default BannerBan;
