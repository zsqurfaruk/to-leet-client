import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";

const DistrictsOfKhulna = () => {
  const { setDistrictLocation }: any = useContext(StateContext);
  return (
    <div className="grid grid-cols-2 lg:gap-5">
      <ul>
        <li>
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Khulna"
          />
          Khulna
        </li>
        <li>
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Bagerhat"
          />{" "}
          Bagerhat
        </li>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Chuadanga"
          />{" "}
          Chuadanga
        </li>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Jessore"
          />{" "}
          Jessore
        </li>
        <li>
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Jhenaidah"
          />{" "}
          Jhenaidah
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Kushtia"
          />{" "}
          Kushtia
        </li>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Magura"
          />{" "}
          Magura
        </li>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Meherpur"
          />{" "}
          Meherpur
        </li>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Narail"
          />{" "}
          Narail
        </li>
        <li>
          {" "}
          <Checkbox
            onClick={(e: any) => setDistrictLocation(e.target.name)}
            name="Satkhira"
          />{" "}
          Satkhira
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfKhulna;
