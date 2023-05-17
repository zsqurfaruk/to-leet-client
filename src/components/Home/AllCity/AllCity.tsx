import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import AllCityEng from "./AllCityEng";

const AllCity = () => {
  const { setFilterTypeCity }: any = useContext(StateContext);
  const handlePrevious = () => {
    setFilterTypeCity(false);
  };
  const lang = localStorage.getItem("lan");
  return (
    <section>
      {/* <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline"
      >
        {lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1> */}
      {lang ? (
        <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-accent pl-2 text-black">
          Select your city.
        </h1>
      ) : (
        <h1 className="text-xl mb-5 border-l-4 border-b-4 border-accent text-black pl-2">
          শহর নির্বাচন করুন।
        </h1>
      )}

      <AllCityEng></AllCityEng>
    </section>
  );
};

export default AllCity;
