/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import lottiImage from "../../../image/lf30_p5tali1o (1).json";
import Lottie from "lottie-react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { useRouter } from "next/router";
import { Checkbox, Radio } from "@material-tailwind/react";
import AllCity from "../AllCity/AllCity";
import AllDivision from "../AllDivision/AllDivision";
import { StateContext } from "@/Context/StateContext/StateContext";
import PopularCities from "../AllCity/PopularCities/PopularCities";

const Banner = () => {
  const { language }: any = useContext(AuthContext);
  const router = useRouter()
  const {
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    cityName,
    setCityName
  }: any = useContext(StateContext);

  const handleFilterTypeCity = () => {
    setCityName("")
    setFilterTypeCity(!filterTypeCity);
    // router.push("/bd")
  };
  const handleFilterTypeDivision = () => {
    setFilterTypeDivision(!filterTypeDivision);
  };
  return (
    <div>
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:h-screen flex items-center mt-8 lg:-mt-20 text-white">
          <div>
            {
              cityName && <PopularCities></PopularCities>
            }
            {language ? (
              <>
                {filterTypeCity && !cityName && (
                  <AllCity></AllCity>
                )}
                {
                  !filterTypeCity && !cityName &&  <>
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
                    extensive listings of apartments, houses, and mess for
                    rent. <br />
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
                      Start your search today and let us be a part of your
                      journey to finding the destination of your dreams.
                    </p>{" "}
                    <BsArrowDownCircleFill className={filterTypeCity || filterTypeDivision ? "absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5 text-black" : "absolute top-5 md:top-9 left-52 md:left-80 lg:left-64 w-4 h-4 md:w-5 md:h-5"} />
                  </div>
                </> 
                }

                <div>
                  <h1
                    className={
                      filterTypeCity || filterTypeDivision
                        ? "text-black mt-5 lg:mt-10 text-2xl lg:-ml-8 md:ml-20 ml-9"
                        : "mt-5 lg:mt-10 text-2xl lg:-ml-8 md:ml-20 ml-9"
                    }
                  >
                    Search by:
                  </h1>
                  <div className="flex justify-around mt-5 ">
                    <div
                      className={
                        filterTypeCity || filterTypeDivision
                          ? "pl-2 pr-4"
                          : "pl-2 pr-4 shadow-lg bg-accent rounded"
                      }
                    >
                      <Checkbox
                      color="teal"
                        onClick={handleFilterTypeCity}
                        className="flex justify-end border border-secondary"
                        label="City"
                      />
                    </div>
                    <div className={
                        filterTypeCity || filterTypeDivision
                          ? "pl-2 pr-4"
                          : "pl-2 pr-4 shadow-lg bg-accent rounded"
                      }>
                      <Checkbox
                      color="teal"
                        onClick={handleFilterTypeDivision}
                        className="flex justify-end border border-secondary"
                        label="Division"
                      />
                    </div>
                  </div>
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
        {filterTypeDivision ? (
          <AllDivision></AllDivision>
        ) : (
          <Lottie
            className="w-screen lg:w-[750px] scale-125 md:scale-100 ml-3 md:ml-0 lg:-ml-6 mt-10"
            animationData={lottiImage}
            loop={true}
          ></Lottie>
        )}
      </div>
    </div>
  );
};

export default Banner;
