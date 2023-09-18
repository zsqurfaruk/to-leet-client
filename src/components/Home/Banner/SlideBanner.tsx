/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/sliderBanner.module.css";
import NavBar from "@/components/Shared/NavBar/NavBar";
import image1 from "../../../image/banner/image1.jpg";
import image2 from "../../../image/banner/view-modern-entryway-with-interior-decor_23-2150790946.avif";
import image3 from "../../../image/banner/img3.avif";
import image4 from "../../../image/banner/img4.avif";
import Image from "next/image";
import HomeNavBar from "@/components/Shared/NavBar/HomeNavBar";
import Banner from "./Banner";
import style from "../../../styles/banner.module.css";

const SlideBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeColor, setActiveColor] = useState<string | number>(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (currentSlide: number) => {
      const stringValues: (string | number)[] = [
        "String Value 1",
        "String Value 2",
        "String Value 3",
        "String Value 4",
      ];
      setActiveColor(stringValues[currentSlide]); // Update activeIndex when a slide changes
    },
  };

  const handleButtonClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setActiveColor(index); // Update activeIndex when a button is clicked
  };
  // console.log(activeIndex)
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Slider {...settings} ref={sliderRef} className={styles.slickSlider}>
          <div className="relative w-10/12 mx-auto">
            <div>
              <Image className="h-[750px] w-full" src={image1} alt=""></Image>
              <div className="absolute top-0 h-full w-full bg-warning bg-opacity-50"></div>
            </div>
            <div className="absolute top-52 left-32 text-white w-10/12 mx-auto">
              <h1 className="text-5xl font-bold w-8/12 mx-auto leading-tight">Find <span id={style.textHandle2}>your</span> the suitable rental solution with QuickVara's extensive
              listings for a hassle-free renting experience.</h1>
            </div>
            <div className="absolute -bottom-40 left-32 text-white w-10/12 mx-auto">
              <p className="mt-5 font-medium">
                <Banner></Banner>
              </p>
              
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[750px] w-full"
              src="https://psgroup.in/blog/wp-content/uploads/2022/08/The-Sims-4-The-Sims-2-House-Plan-Interior-Design-Services-PNG-Free-Download.jpg"
              alt=""
            />
            {/* <div className="absolute top-52 left-32 text-white w-10/12 mx-auto">
              <h1 className="text-[50px] leading-tight">Leading the Way: Mindray <br /> Supports Top Training Center <br /> in the UK</h1>
              <p className="mt-5 font-medium">
              With its intuitive design and easy to use software, the A9 Anesthesia system was seen as the <br /> optimal solution for Eastwood Park Training Center. 
              </p>
              <button className="btn mt-9 border px-5 py-[10px] text-xs">Explore More</button>
            </div> */}
            <div className="absolute top-0 h-full w-full bg-warning bg-opacity-50"></div>
            <div className="absolute top-4 left-32 text-white w-10/12 mx-auto">
              <p className="mt-5 font-medium">
                <Banner></Banner>
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">
                Learn more
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-[750px] w-full"
              src="https://img.freepik.com/premium-photo/house-searching-rental-housing-market-generative-ai_77190-14564.jpg?size=626&ext=jpg&ga=GA1.2.1277052798.1689859246&semt=ais"
              alt=""
            />
            <div className="absolute top-0 h-full w-full bg-warning bg-opacity-50"></div>
            <div className="absolute top-4 left-32 text-white w-10/12 mx-auto">
              <p className="mt-5 font-medium">
                <Banner></Banner>
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[750px] w-full"
              src="https://img.freepik.com/premium-vector/car-repair-workshop-male-character-coming-station-fix-vehicle-mechanic-worker-uniform-opening-hood_102902-6609.jpg?w=1380"
              alt=""
            />
            <div className="absolute top-0 h-full w-full bg-warning bg-opacity-50"></div>
            <div className="absolute top-4 left-32 text-white w-10/12 mx-auto">
              <p className="mt-5 font-medium">
                <Banner></Banner>
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">
                Learn more
              </button>
            </div>
          </div>
        </Slider>
        {/* <div className={`${styles.leftRounder} mr-20`}></div> */}
        <div>
          <div className="flex gap-5 absolute bottom-[70px] left-24 lg:left-[550px]">
            <div
              onClick={() => handleButtonClick(0)}
              className={
                activeColor === 0 || activeColor === "String Value 1"
                  ? "border-b-2 border-[#B70909] w-12 lg:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-8 lg:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
            <div
              onClick={() => handleButtonClick(1)}
              className={
                activeColor === "String Value 2"
                  ? "border-b-2 border-[#B70909] w-12 lg:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-8 lg:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
            <div
              onClick={() => handleButtonClick(2)}
              className={
                activeColor === "String Value 3"
                  ? "border-b-2 border-[#B70909] w-12 lg:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-8 lg:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
            <div
              onClick={() => handleButtonClick(3)}
              className={
                activeColor === "String Value 4"
                  ? "border-b-2 border-[#B70909] w-12 lg:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-8 lg:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
          </div>
        </div>
      </div>
      <div
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        className={
          isHovered
            ? "fixed top-0  z-50  text-white bg-[#B70909] w-full"
            : "  fixed top-0 z-50  text-white  w-full"
        }
      >
        {/* <TopNavBar></TopNavBar> */}
        <HomeNavBar></HomeNavBar>
      </div>
      <div className="border-t absolute top-[75px] w-full"></div>
      <div className="">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={
            isHovered
              ? "absolute pt-4 pb-3 top-10 hover:text-black text-black bg-white w-full"
              : "absolute top-10 pt-4 pb-3  text-white hover:bg-white w-full"
          }
        >
          {/* <NavBar></NavBar> */}
        </div>
      </div>
      <div className="divider absolute top-6"></div>
    </div>
  );
};

export default SlideBanner;
