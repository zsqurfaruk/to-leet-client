import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import style from "../../../styles/banner.module.css";

const BannerBan = () => {
  const { filterTypeDivision }: any = useContext(StateContext);
  return (
    <div className="scale-90 px-3 md:px-0 md:scale-100 lg:scale-110 lg:ml-5 -mt-14">
      <div
        className={
          filterTypeDivision ? "text-gray-700 lg:leading-[27px] md:block hidden" : "mx-auto text-gray-700  lg:leading-[27px] md:block hidden"
        }
      >
       
        <span
          id={style.bannerTextColorChange}
          className="text-[30px] md:text-[31px] font-semibold"
        >
         কুইকভাড়া </span>
        এর বিস্তৃত তালিকার সাথে সহজে এবং দ্রুত <br className="hidden lg:flex"/> ঝামেলা-মুক্ত ভাড়া সমাধান খুঁজে নিন। 
        {/* <span> যেখানে আপনার বিশ্বাস নির্ভরযোগ্য, সেখানে  <span
          id={style.bannerTextColorChange}
          className="text-xl font-semibold"
        >
         QuickVara
        </span> রয়েছে অপূর্ণিত। </span> */}
      </div>
      <div
        className={
          filterTypeDivision ? "text-gray-700 lg:leading-[27px] block md:hidden px-1" : "mx-auto text-gray-700 lg:leading-[27px] block md:hidden px-1"
        }
      >
       
        <span
          id={style.bannerTextColorChange}
          className="text-[30px] md:text-[39px] font-semibold -ml-[.5px]"
        >
         কুইকভাড়া  </span>
         একটি বিস্তৃত তালিকাসহ ঝামেলা-মুক্ত ভাড়া সমাধান খোঁজার সহজ এবং দ্রুততম উপায়। 
        {/* <span> যেখানে আপনার বিশ্বাস নির্ভরযোগ্য, সেখানে  <span
          id={style.bannerTextColorChange}
          className="text-xl font-semibold"
        >
         QuickVara
        </span> রয়েছে অপূর্ণিত। </span> */}
      </div>
      <div className="relative">
        <div
          id={style.bannerTextColorChange}
          className="mt-3 md:mt-3 text-sm text-justify leading-5 md:leading-6 lg:leading-[11px] px-1 md:px-0"
        >
          আজই আপনার অনুসন্ধান শুরু করুন এবং আপনার ভাড়ার সর্বোত্তম সমাধান খুঁজে
          পেতে
          <br className="hidden lg:flex" />
          <br className="hidden lg:flex" /> আপনার{" "}
          <br className="hidden md:flex lg:hidden" /> যাত্রার অংশ হতে দিন।
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
