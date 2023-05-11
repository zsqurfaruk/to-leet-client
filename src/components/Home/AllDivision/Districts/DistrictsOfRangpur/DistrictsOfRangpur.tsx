import { StateContext } from '@/Context/StateContext/StateContext';
import React, { useContext } from 'react';

const DistrictsOfRangpur = () => {
    const {setDistrictLocation}:any= useContext(StateContext)
    return (
        <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Rangpur"
            />
            <span className="-mt-[2px]">Rangpur</span>
          </label>
          
          </li>
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Panchagarh"
            />
            <span className="-mt-[2px]">Panchagarh</span>
          </label>
           
          </li>
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Thakurgaon"
            />
            <span className="-mt-[2px]">Thakurgaon</span>
          </label>
           
          </li>
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Dinajpur"
            />
            <span className="-mt-[2px]">Dinajpur</span>
          </label>
           
          </li>
       
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Kurigram"
            />
            <span className="-mt-[2px]">Kurigram</span>
          </label>
         
          </li>
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Nilphamari"
            />
            <span className="-mt-[2px]">Nilphamari</span>
          </label>
          
          </li>
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Lalmonirhat"
            />
            <span className="-mt-[2px]">Lalmonirhat</span>
          </label>
          
          </li>
          <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Gaibandha"
            />
            <span className="-mt-[2px]">Gaibandha</span>
          </label>
          
          </li>
        </ul>
      </div>
    );
};

export default DistrictsOfRangpur;