import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";

const AllCityEng = () => {
  const { setCityName }: any = useContext(StateContext);
  return (
    <div className="lg:mr-10 lg:-ml-4 ml-7 mr-7">
      <ul className="grid grid-cols-3 gap-4 md:gap-3 text-black">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />
            <span className="-mt-[2px]"> Dhaka City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />
            <span className="-mt-[2px]"> Chittagong City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />
            <span className="-mt-[2px]"> Rajshahi City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />
            <span className="-mt-[2px]"> Sylhet City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />
            <span className="-mt-[2px]"> Barisal City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Khulna"
            />
            <span className="-mt-[2px]"> Khulna City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Rangpur"
            />
            <span className="-mt-[2px]"> Rangpur City</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Mymensingh"
            />
            <span className="-mt-[2px]"> Mymensingh City</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AllCityEng;
