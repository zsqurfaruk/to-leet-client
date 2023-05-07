import { Checkbox } from "@material-tailwind/react";
import React from "react";

const PopularCityOfDhaka = () => {

  const lang = localStorage.getItem("lan")
  return (
    <section>
      <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 text-black bg">
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />{" "}
            Mirpur
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
            Uttara
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
            Mohammadpur
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
            Savar
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
            Jatrabari
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

export default PopularCityOfDhaka;
