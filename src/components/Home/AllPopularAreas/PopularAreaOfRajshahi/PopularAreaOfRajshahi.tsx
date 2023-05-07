import { Checkbox } from "@material-tailwind/react";
import React from "react";

const PopularCityOfRajshahi = () => {
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
            New Market
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
            Shaheb Bazar
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
            Uposahar
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
            Kazla
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
            Motihar
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

export default PopularCityOfRajshahi;
