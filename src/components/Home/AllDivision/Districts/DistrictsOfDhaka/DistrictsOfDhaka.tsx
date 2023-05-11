import { Checkbox } from "@material-tailwind/react";
import React from "react";

const DistrictsOfDhaka = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Dhaka"
            />
            <span className="-mt-[2px]">Dhaka</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-[6px]">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Faridpur"
            />
            <span className="-mt-[2px]">Faridpur</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Gazipur"
            />
            <span className="-mt-[2px]">Gazipur</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Gopalganj"
            />
            <span className="-mt-[2px]">Gopalganj</span>
          </label>
        </li>
        
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Kishoreganj"
            />
            <span className="-mt-[2px]">Kishoreganj</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Madaripur"
            />
            <span className="-mt-[2px]">Madaripur</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Manikganj"
            />
            <span className="-mt-[2px]">Manikganj</span>
          </label>
        </li>

        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Munshiganj"
            />
            <span className="-mt-[2px]">Munshiganj</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Narayanganj"
            />
            <span className="-mt-[2px]">Narayanganj</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Narsingdi"
            />
            <span className="-mt-[2px]">Narsingdi</span>
          </label>
        </li>
        
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Rajbari"
            />
            <span className="-mt-[2px]">Rajbari</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Shariatpur"
            />
            <span className="-mt-[2px]">Shariatpur</span>
          </label>
        </li>
        
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Tangail"
            />
            <span className="-mt-[2px]">Tangail</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfDhaka;
