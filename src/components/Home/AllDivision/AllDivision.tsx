import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext  } from "react";
import AllDivisionName from "./AllDivisionEng";

const AllDivision = () => {
  const { filterTypeCity, setFilterTypeDivision }: any = useContext(StateContext);
  const handlePrevious = () => {
    setFilterTypeDivision(false);
  };

  const lang = localStorage.getItem("lan");
  return (
    <div className="flex items-center lg:mt-16 lg:ml-8 mx-auto lg:w-full">
     
      <div>
      {/* <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 lg:-ml-4 cursor-pointer hover:underline"
      >
        {lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1> */}
        {lang ? (
          <h1
            className={
              filterTypeCity
                ? "text-3xl mb-5 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2"
                : "text-3xl mb-5 border-l-4 border-b-4 border-success lg:-ml-4 pl-2"
            }
          >
            Select your division
          </h1>
        ) : (
          <h1
            className={
              filterTypeCity
                ? "text-xl mb-5 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2"
                : "text-xl mb-5 border-l-4 border-b-4 border-success lg:-ml-4 pl-2"
            }
          >
            {" "}
            বিভাগ নির্বাচন করুন
          </h1>
        )}
        <div>
          <AllDivisionName></AllDivisionName>
        </div>
      </div>
    </div>
  );
};

export default AllDivision;
