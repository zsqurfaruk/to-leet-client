import { Checkbox } from "@material-tailwind/react";
import React from "react";
import style from "../../../../../styles/banner.module.css"

const PopularCityOfChittagong = () => {
  return (
    <section>
      <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 text-black">
          <li>
            {" "}
            <Checkbox
           color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />{" "}
            Agrabad
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
         Chawkbazar
          </li>
          <li>
            <Checkbox
             color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
        Kotwali
          </li>
          <li>
            <Checkbox
             color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
        Halishahar
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
         Nasirabad
          </li>
          <li>
            <Checkbox
           color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Khulna"
            />{" "}
            Select others
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularCityOfChittagong;
 

 
