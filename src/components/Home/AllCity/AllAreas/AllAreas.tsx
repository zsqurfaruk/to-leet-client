import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import PopularAreaOfBarishal from "../../AllPopularAreas/PopularAreaOfBarisal/PopularAreaOfBarisal";
import PopularAreaOfChit from "../../AllPopularAreas/PopularAreaOfChittagong/PopularAreaOfChittagong";
import PopularAreaOfDhaka from "../../AllPopularAreas/PopularAreaOfDhaka/PopularAreaOfDhaka";
import PopularAreaOfKhulna from "../../AllPopularAreas/PopularAreaOfKhulna/PopularAreaOfKhulna";
import PopularAreaOfMym from "../../AllPopularAreas/PopularAreaOfMymensingh/PopularAreaOfMymensingh";
import PopularAreaOfRajshahi from "../../AllPopularAreas/PopularAreaOfRajshahi/PopularAreaOfRajshahi";
import PopularAreaOfRangpur from "../../AllPopularAreas/PopularAreaOfRangpur/PopularAreaOfRangpur";
import FilterModal from "../../Banner/Modal/FilterModal";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const AllAreas = () => {
  const { cityName, setCityName, setHomePopularAreaName }: any = useContext(StateContext);
  const {lang}:any = useContext(FilterContext)
  const handlePrevious = () => {
    setCityName({});
    setHomePopularAreaName({})
  };

  return (
    <section className="w-full px-8 md:px-0">
      <h1
        onClick={handlePrevious}
        className="text-warning text-sm mb-5 cursor-pointer hover:underline"
      >
        {!lang ? "Change city?" : "শহর পরিবর্তন?"}
      </h1>
      <h1 className="text-xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700 w-12/12 md:w-full">
        {!lang ? (
          <span>Popular areas of {cityName?.eng}:</span>
        ) : (
          <span className="text-xl">{cityName?.ban} এর জনপ্রিয় এলাকাসমূহঃ</span>
        )}
      </h1>
      <FilterModal></FilterModal>
      {cityName?.eng === "Dhaka" && <PopularAreaOfDhaka></PopularAreaOfDhaka>}
      {cityName?.eng === "Rajshahi" && (
        <PopularAreaOfRajshahi></PopularAreaOfRajshahi>
      )}
      {cityName?.eng === "Chittagong" && (
        <PopularAreaOfChit></PopularAreaOfChit>
      )}
      {cityName?.eng === "Barisal" && (
        <PopularAreaOfBarishal></PopularAreaOfBarishal>
      )}
      {cityName?.eng === "Khulna" && (
        <PopularAreaOfKhulna></PopularAreaOfKhulna>
      )}
      {cityName?.eng === "Rangpur" && (
        <PopularAreaOfRangpur></PopularAreaOfRangpur>
      )}
      {cityName?.eng === "Sylhet" && (
        <PopularAreaOfRangpur></PopularAreaOfRangpur>
      )}
      {cityName?.eng === "Mymensingh" && <PopularAreaOfMym></PopularAreaOfMym>}
    </section>
  );
};

export default AllAreas;
