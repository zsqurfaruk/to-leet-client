/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import lottiImage from "../../../image/lf30_p5tali1o (1).json";
import Lottie from "lottie-react";
import style from "../../../styles/banner.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Checkbox, Radio } from "@material-tailwind/react";
import AllCity from "../AllCity/AllCity";
import AllDivision from "../AllDivision/AllDivision";
import { StateContext } from "@/Context/StateContext/StateContext";
import { useIntl } from "react-intl";
import BannerBan from "./BannerBan";
import BannerEng from "./BannerEng";
import AllAreas from "../AllCity/AllAreas/AllAreas";
import AllDivisionEng from "../AllDivision/AllDivisionEng";
import AllDistricts from "../AllDivision/Districts/AllDistricts/AllDistricts";
import ModalEng from "./Modal/ModalEng";
import PostAreaModalEng from "./Modal/PostAreaModalEng";

const Banner = () => {
  const {
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    cityName,
    setCityName,
    divisionNameEng,
    divisionNameBan,
    setDivisionNameBan,
    setDivisionNameEng,
    handleOpenModalBan,
    handleOpenModalEng,
    openModalValue,
  }: any = useContext(StateContext);
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
  const lan = localStorage.getItem("lan");

  return (
    <section className="pt-6">
      {lan ? (
        <div className="md:flex justify-center gap-2 text-lg md:text-xl mx-8 md:mx-0">
          <h1 className="cursor-pointer">
            Are you searching near your university?
          </h1>
          <h2
            className=" text-center gap-2 border shadow-lg shadow-accent border-accent rounded-lg px-2 cursor-pointer mt-2 md:mt-0"
            onClick={handleOpenModalEng}
          >
            Yes
          </h2>
        </div>
      ) : (
        <div className="md:flex md:justify-center gap-2 text-sm md:text-base mx-8 md:mx-0">
          <h1>আপনি কি বিশ্ববিদ্যালয়ের কাছাকাছি বাসস্থান খুঁজছেন?</h1>

          <h2
            className="border shadow-lg shadow-accent border-accent rounded-lg px-3 cursor-pointer text-center mt-2 md:mt-0"
            onClick={handleOpenModalEng}
          >
            হ্যাঁ
          </h2>
        </div>
      )}
      <ModalEng></ModalEng>
      <PostAreaModalEng></PostAreaModalEng>
      <div className="pt-5 md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:h-screen flex items-center mt-8 lg:-mt-16 text-white">
            <div>
              <div className="-mt-5 lg:-mt-32 mb-5 lg:mb-0">
                {cityName?.eng && <AllAreas></AllAreas>}
                {/* {!cityName && cityNameBan && <AllAreas></AllAreas>} */}
                {filterTypeCity && !cityName?.eng && <AllCity></AllCity>}
              </div>
              {lan && !filterTypeCity && !cityName?.eng && (
                <BannerEng></BannerEng>
              )}
              {!lan && !filterTypeCity && <BannerBan></BannerBan>}

              <div className="hidden lg:block">
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
          </div>

          {divisionNameEng?.eng && filterTypeDivision && (
            <AllDistricts></AllDistricts>
          )}

          {/* {divisionNameBan && <AllDivisionBan></AllDivisionBan>} */}

          {filterTypeDivision && !divisionNameEng?.eng && (
            <AllDivision></AllDivision>
          )}

          <div className={"lg:hidden block"}>
            <div>
              {lan ? (
                <h1
                  className={
                    filterTypeCity || filterTypeDivision
                      ? "text-black mt-5 lg:mt-10 text-2xl ml-7 md:ml-1 lg:ml-7"
                      : "mt-5 lg:mt-10 text-2xl ml-7 md:ml-1 lg:ml-7"
                  }
                >
                  Search by:
                </h1>
              ) : (
                <h1
                  className={
                    filterTypeCity || filterTypeDivision
                      ? "text-black mt-5 lg:mt-10 text-xl  ml-7 md:ml-1 lg:ml-7"
                      : "mt-5 lg:mt-10 text-2xl ml-7 md:ml-1 lg:ml-7"
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
          {!filterTypeDivision && (
            <Lottie
              className="lg:scale-110 hidden lg:flex"
              animationData={lottiImage}
              loop={true}
            ></Lottie>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
