import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext } from "react";

const AllDivisionEng = () => {
  const { divisionNameEng, setDivisionNameEng }: any = useContext(StateContext);
  console.log(divisionNameEng);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-black text-sm md:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Dhaka"
            />
            <span className="-mt-[2px]"> Dhaka Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2 lg:gap-0">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Chittagong"
            />
            <span className="-mt-[2px]">Chittagong Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Rajshahi"
            />
            <span className="-mt-[2px]"> Rajshahi Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Sylhet"
            />
            <span className="-mt-[2px]"> Sylhet Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Barisal"
            />
            <span className="-mt-[2px]">Barisal Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Khulna"
            />
            <span className="-mt-[2px]"> Khulna Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Rangpur"
            />
            <span className="-mt-[2px]"> Rangpur Division</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setDivisionNameEng(e.target.name)}
              name="Mymensingh"
            />
            <span className="-mt-[2px]"> Mymensingh D:</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AllDivisionEng;
