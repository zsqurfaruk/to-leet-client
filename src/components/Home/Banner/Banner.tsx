/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
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
import ModalEng from "./Modal/ModalEng";
import ModalBan from "./Modal/ModalBan";
import Test from "./Test";
import ModalBanMob from "./Modal/ModalBanMob";

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
    handleOpenModalBan,
  }: any = useContext(StateContext);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleFilterTypeCity = () => {
    setCityName("");
    setCityNameBan("");
    setFilterTypeCity(!filterTypeCity);
  };
  const handleFilterTypeDivision = () => {
    setDivisionNameBan("");
    setDivisionNameEng("");
    setFilterTypeDivision(!filterTypeDivision);
  };
  const lan = localStorage.getItem("lan");

  return (
    <section className="pt-5 w-10/12 mx-auto">
      {lan ? (
        <div className="flex justify-center gap-5 text-xl">
          <h1 className="cursor-pointer">Are you searching near your university?</h1>
          <h2
            className="flex gap-2 border shadow-lg shadow-accent border-accent rounded-lg px-2 cursor-pointer"
            onClick={setDivisionNameEng}
          >
            Yes
          </h2>
          <ModalEng></ModalEng>
        </div>
      ) : (
        <div className="md:flex justify-center gap-2">
          <h1 className="text-center">
            আপনি কি বিশ্ববিদ্যালয়ের কাছাকাছি বাসস্থান খুঁজছেন?
          </h1>

          <h2
            className="border shadow-lg shadow-accent border-accent rounded-lg px-2 cursor-pointer text-center"
            onClick={handleOpenModalBan}
          >
            হ্যাঁ
          </h2>

          <ModalBan></ModalBan>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:h-screen flex items-center mt-8 lg:-mt-16 text-white">
          <div>
            <div className="lg:-mt-32">
              {cityName && !cityNameBan && <AllAreas></AllAreas>}
              {!cityName && cityNameBan && <AllAreas></AllAreas>}
              {filterTypeCity && !cityName && !cityNameBan && (
                <AllCity></AllCity>
              )}
            </div>
            {lan && !filterTypeCity && !cityName && <BannerEng></BannerEng>}
            {!lan && !filterTypeCity && <BannerBan></BannerBan>}

            <div>
              {lan ? (
                <h1
                  className={
                    filterTypeCity || filterTypeDivision
                      ? "text-black mt-5 lg:mt-10 text-2xl"
                      : "mt-5 lg:mt-10 text-2xl "
                  }
                >
                  Search by:
                </h1>
              ) : (
                <h1
                  className={
                    filterTypeCity || filterTypeDivision
                      ? "text-black mt-5 lg:mt-10 text-xl  "
                      : "mt-5 lg:mt-10 text-2xl  "
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
        {(divisionNameEng || divisionNameBan) && filterTypeDivision && (
          <AllDistricts></AllDistricts>
        )}
        {/* {divisionNameBan && <AllDivisionBan></AllDivisionBan>} */}
        {filterTypeDivision && !divisionNameBan && !divisionNameEng && (
          <AllDivision></AllDivision>
        )}
        {!filterTypeDivision && (
          <Lottie
            className="lg:scale-110 hidden lg:flex"
            animationData={lottiImage}
            loop={true}
          ></Lottie>
        )}
      </div>
    </section>
  );
};

export default Banner;
