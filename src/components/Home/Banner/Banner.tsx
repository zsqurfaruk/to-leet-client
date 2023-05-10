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
    handleOpenModalEng,
    setOpenModalEng,
    handleOpenModalBan,
    handleClickOpen,
    handleOpen,
    size
  }: any = useContext(StateContext);
const [width, setWidth]= useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[])
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
    <section className="pt-5">
      {lan ? (
        <div className="flex justify-center gap-5 text-xl">
          <h1>Are you searching near your university?</h1>

          <button
          
            className="flex gap-2 border shadow-lg shadow-accent border-accent rounded-lg px-2"
            onClick={handleOpenModalBan}
          >
            Yes
          </button>

          {/* <input type="checkbox" id="EngModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative h-full">
              <label
                htmlFor="EngModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <ModalBanMob></ModalBanMob>
            </div>
          </div> */}

          {/* <li>
              <label className="flex gap-2">
                <input
                  type="radio"
                  className="radio radio-accent h-5 w-5"
                  name="radio-5"
                  // onClick={(e: any) => setDivisionNameBan(e.target.name)}
                  // name="ঢাকা"
                />
                <span className="-mt-[5px]"> No</span>
              </label>
            </li> */}
        </div>
      ) : (
        <div className="flex justify-center gap-5">
          <h1 className="text-center">
            আপনি কি বিশ্ববিদ্যালয়ের কাছাকাছি বাসস্থান খুঁজছেন?
          </h1>

          <h5
            className="flex gap-2 border w-10 ml-10 shadow-lg shadow-accent border-accent rounded-lg px-2 cursor-pointer"
            
            onClick={ handleOpenModalBan }
          >
            হ্যাঁ
          </h5>

          {
            width > 540 ? <ModalBan></ModalBan> :  <ModalBanMob></ModalBanMob>
          }
           
        </div>
      )}
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2">
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
        {(divisionNameEng || divisionNameBan) && filterTypeDivision && (
          <AllDistricts></AllDistricts>
        )}
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
    </section>
  );
};

export default Banner;
function setWindowWidth(innerWidth: number) {
  throw new Error("Function not implemented.");
}

