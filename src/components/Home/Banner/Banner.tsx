/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import lottiImage from "../../../image/lf30_p5tali1o (1).json";
import Lottie from "lottie-react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";

const Banner = () => {
  const { language }: any = useContext(AuthContext);
  return (
    <div>
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:h-screen flex items-center mt-8 lg:-mt-24 text-white">
          <div>
            {language ? (
              <>
                {" "}
                <p className="md:text-2xl lg:scale-110 w-10/12 lg:w-full mx-auto">
                  {/* <p id={style.bannerTextColor} className="text-6xl font-semibold"></p>  */}
                  <span
                    id={style.bannerTextColor}
                    className="text-2xl md:text-5xl font-semibold"
                  >
                    {" "}
                    Find
                  </span>{" "}
                  your perfect destination with
                  <span
                    id={style.bannerTextColor}
                    className="text-2xl md:text-5xl font-semibold"
                  >
                    {" "}
                    To-Leet's
                  </span>{" "}
                  <br />
                  extensive listings of apartments, houses, and mess for rent.{" "}
                  <br />
                </p>
                <div className="relative">
                  <p
                    id={style.bannerTextColor}
                    className="lg:-ml-8 mt-2 w-10/12 lg:w-full mx-auto text-xs md:text-xl"
                  >
                    Start your search today and let us be a part of your journey
                    to finding the destination of your dreams.
                  </p>{" "}
                  <BsArrowDownCircleFill className="absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5" />
                </div>
              </>
            ) : (
              <>
                {" "}
                <p className="md:text-2xl lg:scale-110 w-10/12 lg:w-full mx-auto">
                  {/* <p id={style.bannerTextColor} className="text-6xl font-semibold"></p>  */}
                  <span
                    id={style.bannerTextColor}
                    className="text-2xl md:text-5xl font-semibold"
                  >
                    {" "}
                    To-Leet{" "}
                  </span>
                  এর সাথে আপনার পছন্দের গন্তব্য খুঁজুন।
                </p>
                <div className="relative">
                  <p
                    id={style.bannerTextColor}
                    className="lg:-ml-8 mt-2 w-10/12 lg:w-full mx-auto text-xs md:text-xl"
                  >
                    আজই আপনার অনুসন্ধান শুরু করুন এবং আপনার স্বপ্নের গন্তব্য
                    খুঁজে পেতে আপনার যাত্রার একটি অংশ হতে দিন।
                  </p>{" "}
                  {language ? (
                    <BsArrowDownCircleFill className="absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <BsArrowDownCircleFill className="absolute top-4 md:top-8 left-[270px] md:left-80 lg:left-[355px] w-4 h-4 md:w-5 md:h-5" />
                  )}
                </div>
              </>
            )}
            {language}
          </div>
        </div>
        <Lottie
          className="w-screen lg:w-[775px] scale-125 md:scale-100 ml-3 md:ml-0 lg:-ml-6 mt-10"
          animationData={lottiImage}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default Banner;
