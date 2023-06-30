import React,{useContext} from "react";
import AllCityEng from "./AllCityEng";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const AllCity = () => {
  // const handlePrevious = () => {
  //   setFilterTypeCity(false);
  // };
  const {lang}:any = useContext(FilterContext)
  return (
    <section className="min-w-full px-8 md:px-0">
      {/* <h1
        onClick={handlePrevious}
        className="text-warning text-sm mb-5 cursor-pointer hover:underline"
      >
        {!lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1> */}
      {!lang ? (
        <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
          Select your city.
        </h1>
      ) : (
        <h1 className="text-xl mb-5 border-l-4 border-b-4 border-warning text-gray-700 pl-2">
          শহর নির্বাচন করুন।
        </h1>
      )}

      <AllCityEng></AllCityEng>
    </section>
  );
};

export default AllCity;
