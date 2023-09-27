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
import AllDistricts from "../AllDivision/Districts/AllDistricts/AllDistricts";
import ModalEng from "./Modal/ModalEng";
import PostAreaModalEng from "./Modal/PostAreaModalEng";
import { useDispatch, useSelector } from "react-redux";
import { setCityName } from "@/redux/features/FilterCity/FilterCitySlice";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
import { RootState } from "@/redux/app/store";
import { setDivisionNameEng } from "@/redux/features/DivisionFilter/DivisionFilterSlice";
import style from "../../../styles/button.module.css";

const Banner = () => {
  const {
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    handleOpenModalEng,
  }: any = useContext(StateContext);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      // Check if running in a browser environment
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const dispatch = useDispatch();
  const handleFilterTypeCity = () => {
    dispatch(
      setCityName({
        eng: "",
        ban: "",
      })
    );
    dispatch(
      setHomePopularAreaName({
        eng: "",
        ban: "",
      })
    );
    setFilterTypeCity(!filterTypeCity);
  };
  const handleFilterTypeDivision = () => {
    dispatch(
      setDivisionNameEng({
        eng: "",
        ban: "",
      })
    );
    setFilterTypeDivision(!filterTypeDivision);
  };
  const divisionNameEng = useSelector(
    (state: RootState) => state["qv-dn"].divisionNameEng
  );
  const cityName = useSelector((state: RootState) => state["qv-cn"].cityName);
  const lang = useSelector((state: any) => state.language.language);
  return (
    <section className=" ">
      {!lang ? (
        <div className="bg-white md:shadow-lg pt-3 md:py-4 md:flex justify-center gap-2 text-lg mx-8 md:mx-0">
          <h1 >
            <span className="hidden md:inline">Are you</span> searching near{" "}
            <span className="hidden md:inline">your</span> educational
            institution?
          </h1>
          <h1
            className="text-center gap-2 border-2 text-sm md:text-base border-warning shadow shadow-warning rounded px-2 mt-2 md:mt-0 cursor-pointer"
            onClick={handleOpenModalEng}
          >
            Yes
          </h1>
        </div>
      ) : (
        <div className="bg-white md:shadow-lg pt-3 md:py-4 md:flex md:justify-center gap-2 mx-8 md:mx-0 ">
          <h1>
            {" "}
            <span className="hidden md:inline">আপনি কি আপনার</span> শিক্ষা
            প্রতিষ্ঠানের কাছাকাছি বাসস্থান খুঁজছেন?
          </h1>
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
                {filterTypeCity && cityName?.eng && <AllAreas></AllAreas>}
                {/* {!cityName && cityNameBan && <AllAreas></AllAreas>} */}
                {filterTypeCity && !cityName?.eng && <AllCity></AllCity>}
              </div>
              {!lang && !filterTypeCity && !cityName?.eng && (
                <BannerEng></BannerEng>
              )}
              {lang && !filterTypeCity && !cityName?.eng && (
                <BannerBan></BannerBan>
              )}

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
                        <span className=" ">
                          {!lang ? "Division" : "বিভাগ"}
                        </span>
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

          <div className="lg:hidden block px-[5.5px]">
            <div>
              {!lang ? (
                <h1
                  className={
                    filterTypeCity || filterTypeDivision
                      ? "mt-5 lg:mt-10 text-xl text-gray-700 ml-[30px] md:ml-20"
                      : "mt-1 lg:mt-10 text-xl text-gray-700 ml-[27px] md:ml-0"
                  }
                >
                  Search by:
                </h1>
              ) : (
                <h1
                  className={
                    filterTypeCity || filterTypeDivision
                      ? "mt-5 lg:mt-10 text-lg text-gray-700 ml-[30px] md:ml-20"
                      : "mt-2 lg:mt-10 text-lg text-gray-700 ml-[30px] md:ml-0"
                  }
                >
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
                    <span>{!lang ? "Division" : "বিভাগ"}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-36 xl:mt-20">
            {!filterTypeDivision && (
              <Lottie
                className="lg:scale-125 xl:scale-110 hidden lg:flex"
                animationData={lottiImage}
                loop={true}
                draggable="false"
              ></Lottie>
            )}
            <a
              aria-label="Scroll down"
              className="flex items-center justify-center w-4 h-4 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 animate-ping"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
