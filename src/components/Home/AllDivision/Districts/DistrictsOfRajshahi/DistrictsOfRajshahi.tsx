import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfRajshahi = () => {
  const { setDistrictLocation }: any = useContext(StateContext);
  return (
    <div>
      {" "}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        {" "}
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Rajshahi"
            />
            <span className="-mt-[2px]">Rajshahi</span>
          </label>
       
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Sirajganj"
            />
            <span className="-mt-[2px]">Sirajganj</span>
          </label>
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Pabna"
            />
            <span className="-mt-[2px]">Pabna</span>
          </label>
       
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Bogra"
            />
            <span className="-mt-[2px]">Bogra</span>
          </label>
         
          
        </li>
       
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Joypurhat"
            />
            <span className="-mt-[2px]">Joypurhat</span>
          </label>
         
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Naogaon"
            />
            <span className="-mt-[2px]">Naogaon</span>
          </label>
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Natore"
            />
            <span className="-mt-[2px]">Natore</span>
          </label>
         
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Chapainawabganj"
            />
            <span className="-mt-[2px]">Chapainawabganj</span>
          </label>
         
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfRajshahi;
