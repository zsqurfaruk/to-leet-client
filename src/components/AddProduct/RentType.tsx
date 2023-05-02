import { Radio } from "@material-tailwind/react";
import React from "react";

const RentType = ({setRentType}:any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:gap-5 lg:w-6/12 mx-auto md:my-20">
      <div className="py-32 px-10 shadow-lg bg-white rounded-xl">
        <Radio
          onClick={(e: any) => setRentType(e.target.name)}
          name="Apartment"
          label="Apartment"
        />
      </div>
      <div className="py-32 px-10 shadow-lg bg-white rounded-xl">
        <Radio
          onClick={(e: any) => setRentType(e.target.name)}
          name="House"
          label="House/Flat"
        />
      </div>
      <div className="py-32 px-10 shadow-lg bg-white rounded-xl">
        <Radio
          onClick={(e: any) => setRentType(e.target.name)}
          name="Mess"
          className="flex justify-end"
          id="react"
          label="Mess"
          
        />
      </div>
    </div>
  );
};

export default RentType;
