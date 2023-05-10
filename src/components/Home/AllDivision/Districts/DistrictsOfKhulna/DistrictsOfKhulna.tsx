import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";

const DistrictsOfKhulna = () => {
  const { setDistrictLocation }: any = useContext(StateContext);
  return (
    <div>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-3">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Khulna"
            />
            <span className="-mt-[2px]">Khulna</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Bagerhat"
            />
            <span className="-mt-[2px]">Bagerhat</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Chuadanga"
            />
            <span className="-mt-[2px]">Chuadanga</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Jessore"
            />
            <span className="-mt-[2px]">Jessore</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Jhenaidah"
            />
            <span className="-mt-[2px]">Jhenaidah</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Kushtia"
            />
            <span className="-mt-[2px]">Kushtia</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Magura"
            />
            <span className="-mt-[2px]">Magura</span>
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Meherpur"
            />
            <span className="-mt-[2px]">Meherpur</span>
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Narail"
            />
            <span className="-mt-[2px]">Narail</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Satkhira"
            />
            <span className="-mt-[2px]">Satkhira</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfKhulna;
