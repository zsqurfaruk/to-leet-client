import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext, useState } from "react";

const AllDivisionEng = () => {
  const {divisionNameEng, setDivisionNameEng}:any = useContext(StateContext)
  console.log(divisionNameEng)
  return (
    <div className="lg:mr-10 lg:-ml-8 ml-12">
      <ul className="grid grid-cols-2 md:grid-cols-3">
        <li>
          {" "}
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Dhaka"
          />{" "}
          Dhaka Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Chittagong"
          />{" "}
          Chittagong Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Rajshahi"
          />{" "}
          Rajshahi Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Sylhet"
          />{" "}
          Sylhet Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Barisal"
          />{" "}
          Barisal Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Khulna"
          />{" "}
          Khulna Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Rangpur"
          />{" "}
          Rangpur Division
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameEng(e.target.name)}
            name="Mymensingh"
          />{" "}
          Mymensingh Division
        </li>
      </ul>
    </div>
  );
};

export default AllDivisionEng;
