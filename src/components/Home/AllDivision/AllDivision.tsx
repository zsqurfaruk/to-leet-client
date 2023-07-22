import React from "react";
import AllDivisionName from "./AllDivisionEng";
import { useSelector } from "react-redux";

const AllDivision = () => {
  const lang = useSelector((state: any) => state.language.language);
  return (
    <div className="w-full flex items-center pl-9 md:pl-0 mt-5 lg:mt-16 lg:ml-8 md:mx-0">
      <div>
        {!lang ? (
          <h1
            className={
              "text-3xl mb-5 border-l-4 border-b-4 border-warning lg:-ml-4 pl-2"
            }
          >
            Select your division
          </h1>
        ) : (
          <h1
            className={
              "text-xl mb-5 border-l-4 border-b-4 border-warning lg:-ml-4 pl-2"
            }
          >
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
