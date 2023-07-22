import React from "react";
import AllCityEng from "./AllCityEng";
import { useSelector } from "react-redux";

const AllCity = () => {
  // const handlePrevious = () => {
  //   setFilterTypeCity(false);
  // };
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section className="min-w-full pl-9 md:pl-0">
      {/* <h1
        onClick={handlePrevious}
        className="text-warning text-sm mb-5 cursor-pointer hover:underline"
      >
        {!lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1> */}
      {!lang ? (
        <h1 className="text-3xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
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
