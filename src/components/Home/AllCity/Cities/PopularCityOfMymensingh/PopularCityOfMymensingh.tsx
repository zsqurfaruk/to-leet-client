import { Checkbox } from "@material-tailwind/react";
import React from "react";

const PopularCityOfMymensingh = () => {
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
            Ganginar par
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
            Chorpara
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
            Valuka
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
            Town Hall
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
            Muktagacha
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

export default PopularCityOfMymensingh;
