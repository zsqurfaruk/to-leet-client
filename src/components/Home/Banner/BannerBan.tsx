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
      <div
        className={
          filterTypeDivision
            ? "   text-gray-700"
            : " mx-auto text-gray-700"
        }
      >
        <span
          id={style.bannerTextColorChange}
          className="text-5xl font-semibold"
        >
          {" "}
          To-Leet{" "}
        </span>
        এর বিস্তৃত তালিকা থেকে আপনার ভাড়ার সমাধান খুঁজুন।
      </div>
      <div className="relative">
        <div
          id={style.bannerTextColorChange}
          className="mt-1 md:mt-2 text-xs md:text-sm text-justify leading-5 md:leading-6 lg:leading-[11px]"
        >
          
          আজই আপনার অনুসন্ধান শুরু করুন এবং আপনার ভাড়ার সর্বোত্তম    সমাধান খুঁজে পেতে<br className="hidden lg:flex"/> 
         
         <br className="hidden lg:flex" />  আপনার <br className="hidden md:flex lg:hidden"/> যাত্রার অংশ হতে দিন।
        </div> 
        {/* <BsArrowDownCircleFill
          className={
             "absolute top-5 md:top-7 lg:top-6 left-[227px] md:left-40 lg:left-[267px] w-4 h-4 md:w-5 md:h-5 text-gray-700"
              
          }
        /> */}
      </div>
    </div>
  );
};

export default BannerBan;
