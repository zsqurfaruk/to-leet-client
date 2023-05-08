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
import { useIntl } from "react-intl";
import AllCityBangla from "../AllCity/AllCityBangla";
import BannerBan from "./BannerBan";
import BannerEng from "./BannerEng";
import AllAreas from "../AllCity/AllAreas/AllAreas";
import AllDivisionEng from "../AllDivision/AllDivisionEng";
import AllDivisionBan from "../AllDivision/AllDivisionBan";
import AllDistricts from "../AllDivision/Districts/AllDistricts/AllDistricts";

const Banner = () => {
  const {
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    cityName,
    setCityName,
    cityNameBan,
    setCityNameBan,
    divisionNameEng,
    divisionNameBan,
    setDivisionNameBan,
    setDivisionNameEng,
  }: any = useContext(StateContext);

  // const [defaultCheck,setDefaultCheck] = useState(false)
  const handleFilterTypeCity = () => {
    setCityName("");
    setCityNameBan("");
    setFilterTypeCity(!filterTypeCity);
    // if(filterTypeCity){
    //   setDefaultCheck(true)
    // }
  };
  const handleFilterTypeDivision = () => {
    setDivisionNameBan("");
    setDivisionNameEng("");
    setFilterTypeDivision(!filterTypeDivision);
  };
  const lan = localStorage.getItem("lan");

  return (
    <div className="lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:-mt-12">
      <div className="lg:h-screen flex items-center mt-8 lg:-mt-20 text-white">
        <div>
          {cityName && !cityNameBan && <AllAreas></AllAreas>}
          {!cityName && cityNameBan && <AllAreas></AllAreas>}
          {filterTypeCity && !cityName && !cityNameBan && <AllCity></AllCity>}
          {lan && !filterTypeCity && !cityName && <BannerEng></BannerEng>}
          {!lan && !filterTypeCity && <BannerBan></BannerBan>}

          <div>
            {lan ? (
              <h1
                className={
                  filterTypeCity || filterTypeDivision
                    ? "text-black mt-5 lg:mt-10 text-2xl lg:-ml-8 md:ml-20 ml-9"
                    : "mt-5 lg:mt-10 text-2xl lg:-ml-8 md:ml-20 ml-9"
                }
              >
                Search by:
              </h1>
            ) : (
              <h1
                className={
                  filterTypeCity || filterTypeDivision
                    ? "text-black mt-5 lg:mt-10 text-xl lg:-ml-8 md:ml-20 ml-9"
                    : "mt-5 lg:mt-10 text-2xl lg:-ml-8 md:ml-20 ml-9"
                }
              >
                অনুসন্ধান করুন :
              </h1>
            )}
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
                  className="flex justify-end border border-secondary defaultCheck"
                  label={lan ? "City" : "শহর"}
                />
              </div>
              <div
                className={
                  filterTypeCity || filterTypeDivision
                    ? "pl-2 pr-4"
                    : "pl-2 pr-4 shadow-lg bg-accent rounded"
                }
              >
                <Checkbox
                  color="teal"
                  onClick={handleFilterTypeDivision}
                  className="flex justify-end border border-secondary"
                  label={lan ? "Division" : "বিভাগ"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {(divisionNameEng || divisionNameBan) && filterTypeDivision && <AllDistricts></AllDistricts>}
      {/* {divisionNameBan && <AllDivisionBan></AllDivisionBan>} */}
      {filterTypeDivision && !divisionNameBan && !divisionNameEng && (
        <AllDivision></AllDivision>
      )}
      {!filterTypeDivision && (
        <Lottie
          className="w-screen lg:w-[740px] scale-125 md:scale-100 ml-3 md:ml-0 lg:-ml-6 mt-10"
          animationData={lottiImage}
          loop={true}
        ></Lottie>
      )}
    </div>
  );
};

export default Banner;
