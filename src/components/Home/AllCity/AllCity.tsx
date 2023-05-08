import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext } from "react";
import AllCityEng from "./AllCityEng";
import AllCityBan from "./AllCityBangla";

const AllCity = () => {
  const { setFilterTypeCity }: any = useContext(StateContext);
  const handlePrevious = () => {
    setFilterTypeCity(false);
  };
  const lang = localStorage.getItem("lan")
  return (
    <section>
      <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline lg:-ml-4"
      >
        {lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1>
     {
      lang ? <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
       Select your city.
       </h1> :  <h1 className="text-xl mb-5 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
      শহর নির্বাচন করুন।
      </h1>
     }
    {
      lang ?  <AllCityEng></AllCityEng> : <AllCityBan></AllCityBan>
    }
    </section>
  );
};

export default AllCity;
