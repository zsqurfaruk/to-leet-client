import { Checkbox } from "@material-tailwind/react";
import React from "react";

const PopularAreaOfKhulnaBan = () => {
  return (
    <section>
      <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 text-black">
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />{" "}
            খুলনা সদর
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
            দৌলতপুর
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
            খালিশপুর
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
            সোনাডাংগা
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
            বয়রা বাজার
          </li>
          <li>
            <Checkbox
              color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Khulna"
            />{" "}
            অন্যান্য এলাকা
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularAreaOfKhulnaBan;
