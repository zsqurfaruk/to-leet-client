/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import image1 from "../../../images/banner/homepage-banner-pc (1).png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";
import NavBar from "@/components/Shared/NavBar/NavBar";
// import styles from "../../../styles/homeRound.module.css";

const SlideBanner = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeColor, setActiveColor] = useState<string | number>(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (currentSlide: number) => {
      const stringValues: string[] = [
        "String Value 1",
        "String Value 2",
        "String Value 3",
        "String Value 4",
      ];
      setActiveColor(stringValues[currentSlide]);
    },
  };

  interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    afterChange: (currentSlide: number) => void;
  }

  const handleButtonClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setActiveColor(index);
  };
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          <div className="relative  ">
            <>
              <img
                className="w-screen h-[730px] -mt-4"
                src="https://gsquare.wpengine.com/wp-content/uploads/2023/03/amenities-3.jpg"
                alt=""
              />
            </>
            <div className="absolute h-full w-full bg-opacity-50 -top-5 bg-black"></div>
            <div className="absolute top-16 left-32 text-white w-10/12 mx-auto">
              <Banner></Banner>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-screen"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/377145869_3568997106676865_2968274154930936567_n.png?stp=dst-png_s240x240&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeF8NjIrlC4uMVi0xfafWfGrXb37w1tRd3NdvfvDW1F3cxvD6BZvegxv23V8jwPMSTVOb1T5n__-2DD_P4m3j0cB&_nc_ohc=ph5xtulE_bwAX-DBNHc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRckMtgUYvth_egPXKa4rV96Ra1ybmOG_dhAuzSQB9LaA&oe=652CE0BF"
              alt=""
            />
            {/* <div className="absolute h-full w-full bg-opacity-50 -top-5 bg-black"></div> */}
            <div className="absolute top-16 left-32 text-white w-10/12 mx-auto">
              <Banner></Banner>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-screen h-[730px] -mt-4"
              src="https://gsquare.wpengine.com/wp-content/uploads/2023/03/amenities-4.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-opacity-50 -top-5 bg-black"></div>
            <div className="absolute top-16 left-32 text-white w-10/12 mx-auto">
              <Banner></Banner>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-[1800px] h-[730px] -mt-4"
              src="https://gsquare.wpengine.com/wp-content/uploads/2023/03/amenities-2.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-opacity-50 -top-5 bg-black"></div>
            <div className="absolute top-16 left-32 text-white w-10/12 mx-auto">
              <Banner></Banner>
            </div>
          </div>
        </Slider>
      </div>
      <div className="absolute top-1 left-0 w-full">
        <NavBar></NavBar>
      </div>
      <div className=" z-50 bottom-0 left-0 w-full fixed">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default SlideBanner;
