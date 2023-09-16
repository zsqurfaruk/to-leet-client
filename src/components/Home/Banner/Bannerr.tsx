/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import image1 from "../../../images/banner/homepage-banner-pc (1).png";
// import NavBar from "@/Components/Shared/NavBar/NavBar";
// import TopNavBar from "@/Components/Shared/NavBar/TopNavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

const Bannerr = () => {
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
  // console.log(activeIndex)
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          <div className="relative w-10/12 mx-auto">
            <>
              <img
                src="https://www.mindray.com/content/dam/xpace/en/innovation/love-for-more-smiles-for-all/homepage-banner-pc.png"
                alt=""
              />
            </>
            <div className="absolute top-64 left-32 text-white w-10/12 mx-auto">
              <h1 className="text-[50px]">Love for More, Smiles fro All</h1>
              <p className="mt-5 font-medium">
                Mindray is partnering with Operation Smile to fulfill a 10-year
                commitment to sowing seeds <br /> of hope.
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">Learn more</button>
            </div>
           
          </div>
          <div className="relative">
            <img
              src="https://www.mindray.com/content/dam/xpace/zh/homepage/banner/mindray-a9-anaesthsia-workstation-will-train-the-next-generation-of-healthcare-engineers-pc.png"
              alt=""
            />
             <div className="absolute top-52 left-32 text-white w-10/12 mx-auto">
              <h1 className="text-[50px] leading-tight">Leading the Way: Mindray <br /> Supports Top Training Center <br /> in the UK</h1>
              <p className="mt-5 font-medium">
              With its intuitive design and easy to use software, the A9 Anesthesia system was seen as the <br /> optimal solution for Eastwood Park Training Center. 
              </p>
              <button className="btn mt-9 border px-5 py-[10px] text-xs">Explore More</button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://www.mindray.com/content/dam/xpace/en/site/home/banner/cairns-hospital-home-pc.jpg"
              alt=""
            />
             <div className="absolute top-[230px] left-32 text-white w-10/12 mx-auto">
              <h1 className="text-[50px]">Emergency Care Reimagined</h1>
              <p className="mt-5 font-medium">
              In Australia, the adoption of the latest high-end POC ultrasound - Mindray TEX20 at Cairns <br /> Hospital, Queensland, empowers clinicians to cope with challenges in the Emergency <br /> department.
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">Explore more</button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://www.mindray.com/content/dam/xpace/zh/homepage/banner/cutting-edge-hematology-technology-solves-world-problems-pc.jpg"
              alt=""
            />
            <div className="absolute top-52 left-32 text-white w-10/12 mx-auto">
              <h1 className="text-[50px] w-7/12 leading-tight">Solving Laboratory Testing   Challenges with Advanced  Hematology Technology</h1>
              <p className="mt-5 font-medium">
              Mindray has presented its cutting-edge scientific posters at the 36th ISLH International <br /> Society for Laboratory Hematology Congress.
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">Explore more</button>
            </div>
          </div>
        </Slider>
        {/* <div className={`${styles.leftRounder} mr-20`}></div> */}
        <div>
            <div className="flex gap-5 absolute bottom-[70px] left-[550px]">
            <div  onClick={() => handleButtonClick(0)} className={activeColor === 0 || activeColor === "String Value 1" ? "border-b-2 border-[#B70909] w-40 ease-in-out duration-700" : "border-b-2 border-white w-20 ease-in-out duration-700 cursor-pointer"}></div>
            <div  onClick={() => handleButtonClick(1)} className={activeColor === "String Value 2" ? "border-b-2 border-[#B70909] w-40 ease-in-out duration-700" : "border-b-2 border-white w-20 ease-in-out duration-700 cursor-pointer"}></div>
            <div  onClick={() => handleButtonClick(2)} className={activeColor === "String Value 3" ? "border-b-2 border-[#B70909] w-40 ease-in-out duration-700" : "border-b-2 border-white w-20 ease-in-out duration-700 cursor-pointer"}></div>
            <div  onClick={() => handleButtonClick(3)} className={activeColor === "String Value 4" ? "border-b-2 border-[#B70909] w-40 ease-in-out duration-700" : "border-b-2 border-white w-20 ease-in-out duration-700 cursor-pointer"}></div>
            </div>
            </div>
      </div>
       
       
      
      <div className="divider absolute top-6"></div>
    </div>
  );
};

export default Bannerr;
