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
            : "md:text-2xl lg:scale-110 w-10/12 lg:w-full mx-auto"
        }
      >
        <span
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className=" md:text-5xl font-semibold"
        >
          {" "}
          To-Leet{" "}
        </span>
        এর সাথে আপনার পছন্দের গন্তব্য খুঁজুন।
      </p>
      <div className="relative">
        <p
          id={
            filterTypeCity || filterTypeDivision
              ? style.bannerTextColorChange
              : style.bannerTextColor
          }
          className="lg:-ml-8 mt-2 w-10/12 lg:w-full mx-auto text-xs md:text-xl text-justify"
        >
          আজই আপনার অনুসন্ধান শুরু করুন এবং আপনার স্বপ্নের গন্তব্য খুঁজে পেতে
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
                ? "absolute top-4 md:top-8 left-[270px] md:left-80 lg:left-[355px] w-4 h-4 md:w-5 md:h-5 text-black"
                : "absolute top-4 md:top-8 left-[270px] md:left-80 lg:left-[355px] w-4 h-4 md:w-5 md:h-5"
            }
          />
        )}
      </div>
    </div>
  );
};

export default BannerBan;
