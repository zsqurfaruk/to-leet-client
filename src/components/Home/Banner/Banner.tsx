/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import lottiImage from "../../../image/lf30_p5tali1o (1).json";
import Lottie from "lottie-react";
import AllCity from "../AllCity/AllCity";
import AllDivision from "../AllDivision/AllDivision";
import { StateContext } from "@/Context/StateContext/StateContext";
import BannerBan from "./BannerBan";
import BannerEng from "./BannerEng";
import AllAreas from "../AllCity/AllAreas/AllAreas";
import Cookies from "js-cookie";
import AllDistricts from "../AllDivision/Districts/AllDistricts/AllDistricts";
import ModalEng from "./Modal/ModalEng";
import PostAreaModalEng from "./Modal/PostAreaModalEng";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

const Banner = () => {
  const {
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    cityName,
    setCityName,
    divisionNameEng,
    setDivisionNameEng,
    handleOpenModalEng, 
  }: any = useContext(StateContext);

  // const {lang}:any = useContext(FilterContext)
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleFilterTypeCity = () => {
    setCityName({});
    setFilterTypeCity(!filterTypeCity);
  };
  const handleFilterTypeDivision = () => {
    setDivisionNameEng({});
    setFilterTypeDivision(!filterTypeDivision);
  };
  // const lan = Cookies.get("lan");
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section className="pt-6">
      {!lang ? (
        <div className="text-gray-700 md:flex justify-center gap-2 text-lg md:text-xl mx-8 md:mx-0">
          <h1  >
            Are you searching near your university?
          </h1>
          <h1
            className="text-center gap-2 border-2 text-sm md:text-base border-warning shadow shadow-warning rounded px-2 mt-2 md:mt-0 cursor-pointer"
            onClick={handleOpenModalEng}
          >
            Yes
          </h1>
        </div>
      ) : (
        <div className="text-gray-700 md:flex md:justify-center gap-2 text-sm md:text-base mx-8 md:mx-0 ">
          <h1>আপনি কি বিশ্ববিদ্যালয়ের কাছাকাছি বাসস্থান খুঁজছেন?</h1>
          <h1
            className=" border-2  border-warning shadow shadow-warning  rounded px-3 cursor-pointer text-center mt-2 md:mt-0"
            onClick={handleOpenModalEng}
          >
            হ্যাঁ
          </h1>
        </div>
      )}
      <ModalEng></ModalEng>
      <PostAreaModalEng></PostAreaModalEng>
      <div className="pt-5 md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:h-screen flex items-center mt-8 lg:-mt-16">
            <div>
              <div className="-mt-5 lg:-mt-32 mb-5 lg:mb-0">
                {cityName?.eng && <AllAreas></AllAreas>}
                {/* {!cityName && cityNameBan && <AllAreas></AllAreas>} */}
                {filterTypeCity && !cityName?.eng && <AllCity></AllCity>}
              </div>
              {!lang && !filterTypeCity && !cityName?.eng && (
                <BannerEng></BannerEng>
              )}
              {lang && !filterTypeCity && <BannerBan></BannerBan>}

              <div className="hidden lg:block">
                <div>
                  {!lang ? (
                    <h1 className={"mt-5 lg:mt-10 text-2xl text-gray-700 ml-2"}>
                      Search by:
                    </h1>
                  ) : (
                    <h1 className={"mt-5 lg:mt-10 text-2xl text-gray-700  "}>
                      অনুসন্ধান করুন :
                    </h1>
                  )}
                  <div className="flex justify-around mt-5 ">
                    <div className="pl-2 pr-4 shadow-lg bg-warning rounded py-2 text-primary">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary h-[18px] w-[19px] mt-[2px]"
                          onClick={handleFilterTypeCity}
                        />
                        <span>{!lang ? "City" : "শহর"}</span>
                      </label>
                    </div>
                    <div
                      className={
                        "pl-2 pr-4 shadow-lg bg-warning rounded text-primary pt-2"
                      }
                    >
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary h-[18px] w-[19px] mt-[2px]"
                          onClick={handleFilterTypeDivision}
                        />
                        <span className=" ">{!lang ? "Division" : "বিভাগ"}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {divisionNameEng?.eng && filterTypeDivision && (
            <AllDistricts></AllDistricts>
          )}

          {/* {divisionNameBan && <AllDivisionBan></AllDivisionBan>} */}

          {filterTypeDivision && !divisionNameEng?.eng && (
            <AllDivision></AllDivision>
          )}

          <div className="lg:hidden block">
            <div>
              {!lang ? (
                <h1 className={filterTypeCity || filterTypeDivision ? "mt-5 lg:mt-10 text-xl text-gray-700 ml-[30px] md:ml-20" : "mt-5 lg:mt-10 text-xl text-gray-700 ml-[27px] md:ml-0"}>
                  Search by:
                </h1>
              ) : (
                <h1 className={filterTypeCity || filterTypeDivision ? "mt-5 lg:mt-10 text-lg text-gray-700 ml-[30px] md:ml-20" : "mt-5 lg:mt-10 text-xl text-gray-700 ml-[25px] md:ml-0"}>
                  অনুসন্ধান করুন :
                </h1>
              )}
              <div className="flex justify-around mt-5 ">
                <div className="pl-2 pr-4 shadow-lg bg-warning rounded py-2 text-primary">
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary h-[18px] w-[19px] mt-[2px]"
                      onClick={handleFilterTypeCity}
                    />
                    <span>{!lang ? "City" : "শহর"}</span>
                  </label>
                </div>
                <div
                  className={
                    "pl-2 pr-4 shadow-lg bg-warning rounded text-primary pt-2"
                  }
                >
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary h-[18px] w-[19px] mt-[2px]"
                      onClick={handleFilterTypeDivision}
                    />
                    <span >{!lang ? "Division" : "বিভাগ"}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-36 xl:mt-20">
          {!filterTypeDivision && (
            <Lottie
              className="lg:scale-125 xl:scale-110 hidden lg:flex "
              animationData={lottiImage}
              loop={true}
              draggable= "false"
            ></Lottie>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
