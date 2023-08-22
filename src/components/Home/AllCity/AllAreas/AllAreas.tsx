import React from "react";
import PopularAreaOfBarishal from "../../AllPopularAreas/PopularAreaOfBarisal/PopularAreaOfBarisal";
import PopularAreaOfChit from "../../AllPopularAreas/PopularAreaOfChittagong/PopularAreaOfChittagong";
import PopularAreaOfDhaka from "../../AllPopularAreas/PopularAreaOfDhaka/PopularAreaOfDhaka";
import PopularAreaOfKhulna from "../../AllPopularAreas/PopularAreaOfKhulna/PopularAreaOfKhulna";
import PopularAreaOfMym from "../../AllPopularAreas/PopularAreaOfMymensingh/PopularAreaOfMymensingh";
import PopularAreaOfRajshahi from "../../AllPopularAreas/PopularAreaOfRajshahi/PopularAreaOfRajshahi";
import PopularAreaOfRangpur from "../../AllPopularAreas/PopularAreaOfRangpur/PopularAreaOfRangpur";
import FilterModal from "../../Banner/Modal/FilterModal";
import PopularAreaOfSylhet from "../../AllPopularAreas/PopularAreaOfSylhet/PopularAreaOfSylhet";
import { useDispatch, useSelector } from "react-redux";
import { setCityName } from "@/redux/features/FilterCity/FilterCitySlice";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
import { RootState } from "@/redux/app/store";

const AllAreas = () => {
  const dispatch = useDispatch();
  const handlePrevious = () => {
    dispatch(setCityName({
      eng: "",
      ban: ""
    }));
    dispatch(setHomePopularAreaName({
      eng: "",
      ban: ""
    }));
     
  };
  // const cityName = useSelector((state: any) => state.cityName.cityName);
  const cityName = useSelector((state: RootState) => state['qv-cn'].cityName);
  console.log(cityName)
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section className="w-full pl-9 md:pl-0">
      <div>
      <h1
        onClick={handlePrevious}
        className="text-warning text-sm mb-5 cursor-pointer hover:underline"
      >
        {!lang ? "Change city?" : "শহর পরিবর্তন?"}
      </h1>
      <h1 className="w-12/12 md:w-full text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700 ">
        {!lang ? (
          <span>Popular areas of {cityName?.eng}:</span>
        ) : (
          <span className="text-lg">{cityName?.ban} এর জনপ্রিয় এলাকাসমূহঃ</span>
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
        <PopularAreaOfSylhet></PopularAreaOfSylhet>
      )}
      {cityName?.eng === "Mymensingh" && <PopularAreaOfMym></PopularAreaOfMym>}
      </div>
    </section>
  );
};

export default AllAreas;
