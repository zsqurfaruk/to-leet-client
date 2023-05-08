import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext } from "react";

const AllDivisionBan = () => {
  const {divisionNameBan, setDivisionNameBan}:any = useContext(StateContext)
  console.log(divisionNameBan)
  return (
    <div className="lg:mr-10 lg:-ml-8 ml-12">
      <ul className="grid grid-cols-2 md:grid-cols-3">
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="ঢাকা"
          />{" "}
          ঢাকা বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="চট্টগ্রাম"
          />{" "}
          চট্টগ্রাম বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="রাজশাহী"
          />{" "}
          রাজশাহী বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="সিলেট"
          />{" "}
          সিলেট বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="বরিশাল"
          />{" "}
          বরিশাল বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="খুলনা"
          />{" "}
          খুলনা বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="রংপুর"
          />{" "}
          রংপুর বিভাগ
        </li>
        <li>
          <Checkbox
            color="teal"
            onClick={(e: any) => setDivisionNameBan(e.target.name)}
            name="ময়মনসিংহ"
          />{" "}
          ময়মনসিংহ বিভাগ
        </li>
      </ul>
    </div>
  );
};

export default AllDivisionBan;
