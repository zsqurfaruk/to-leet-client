import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import AllDivisionEng from "./AllDivisionEng";
import AllDivisionBan from "./AllDivisionBan";

const AllDivision = () => {
  const { filterTypeCity }: any = useContext(StateContext);

  const lang = localStorage.getItem("lan");
  return (
    <div className="lg:ml-12 flex items-center lg:mt-40 w-10/12 mx-auto lg:w-full">
      <div>
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
          {lang ? (
            <AllDivisionEng></AllDivisionEng>
          ) : (
            <AllDivisionBan></AllDivisionBan>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDivision;
