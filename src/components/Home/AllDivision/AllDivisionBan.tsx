import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext } from "react";

const AllDivisionBan = () => {
  const { divisionNameBan, setDivisionNameBan }: any = useContext(StateContext);
  console.log(divisionNameBan);
  return (
    <div className="lg:mr-10 lg:-ml-4 ">
      <ul className="grid grid-cols-3 gap-3">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="ঢাকা"
            />
            <span className="-mt-[2px]"> ঢাকা বিভাগ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="চট্টগ্রাম"
            />
            <span className="-mt-[2px]"> চট্টগ্রাম বিভাগ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="রাজশাহী"
            />
            <span className="-mt-[2px]">রাজশাহী বিভাগ</span>
          </label>
         
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="সিলেট"
            />
            <span className="-mt-[2px]"> সিলেট বিভাগ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="বরিশাল"
            />
            <span className="-mt-[2px]">বরিশাল বিভাগ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="খুলনা"
            />
            <span className="-mt-[2px]">খুলনা বিভাগ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="রংপুর"
            />
            <span className="-mt-[2px]"> রংপুর বিভাগ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameBan(e.target.name)}
              name="ময়মনসিংহ"
            />
            <span className="-mt-[2px]"> ময়মনসিংহ বিভাগ</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AllDivisionBan;
