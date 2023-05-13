import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const PostSylDistrictsEng = () => {
  const { setDistrictLocation }: any = useContext(StateContext);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Sylhet"
            />
            <span className="-mt-[2px]">Sylhet</span>
          </label>
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Moulvibazar"
            />
            <span className="-mt-[2px]">Moulvibazar</span>
          </label>
          
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Habiganj"
            />
            <span className="-mt-[2px]">Habiganj</span>
          </label>
         
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Sunamganj"
            />
            <span className="-mt-[2px]">Sunamganj</span>
          </label>
        
        </li>
      </ul>
    </div>
  );
};

export default PostSylDistrictsEng;
