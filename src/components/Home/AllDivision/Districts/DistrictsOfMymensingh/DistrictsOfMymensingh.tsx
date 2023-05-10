import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfMymensingh = () => {
  const { setDistrictLocation }: any = useContext(StateContext);
  return (
    <div>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-3">
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Jamalpur"
            />
            <span className="-mt-[2px]">Jamalpur</span>
          </label>
         
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Netrokona"
            />
            <span className="-mt-[2px]">Netrokona</span>
          </label>
         
          
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Sherpur"
            />
            <span className="-mt-[2px]">Sherpur</span>
          </label>
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Mymensingh"
            />
            <span className="-mt-[2px]">Mymensingh</span>
          </label>
          
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfMymensingh;
