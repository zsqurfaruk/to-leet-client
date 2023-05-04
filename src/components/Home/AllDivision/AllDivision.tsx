import { Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";

const AllDivision = () => {
  const [divisionName, setDivisionName] = useState("");
  console.log(divisionName)
  return (
    <div className="lg:ml-12 flex items-center lg:mt-40 w-10/12 mx-auto lg:w-full">
      <div>
        <h1 className="text-3xl mb-5 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2">Select your division</h1>
        <div className="lg:mr-10 lg:-ml-8 ml-12">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            <li>
              {" "}
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Dhaka"
              />{" "}
              Dhaka
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Chittagong"
              />{" "}
              Chittagong
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Rajshahi"
              />{" "}
              Rajshahi
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Sylhet"
              />{" "}
              Sylhet
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Barisal"
              />{" "}
              Barisal
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Khulna"
              />{" "}
              Khulna
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Rangpur"
              />{" "}
              Rangpur
            </li>
            <li>
              <Checkbox
                onClick={(e: any) => setDivisionName(e.target.name)}
                name="Mymensingh"
              />{" "}
              Mymensingh
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllDivision;
