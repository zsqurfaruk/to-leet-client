/* eslint-disable react/no-unescaped-entities */
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfChittagong = () => {
  const { setDistrictLocation }: any = useContext(StateContext);
  return (
    <div>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-3">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Chittagong"
            />
            <span className="-mt-[2px]">Chittagong</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Brahmanbaria"
            />
            <span className="-mt-[2px]">Brahmanbaria</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Comilla"
            />
            <span className="-mt-[2px]">Comilla</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Chandpur"
            />
            <span className="-mt-[2px]">Chandpur</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Cox's Bazar"
            />
            <span className="-mt-[2px]"> Cox's Bazar</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Feni"
            />
            <span className="-mt-[2px]">Feni</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Khagrachhari"
            />
            <span className="-mt-[2px]">Khagrachhari</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Lakshmipur"
            />
            <span className="-mt-[2px]">Lakshmipur</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Noakhali"
            />
            <span className="-mt-[2px]">Noakhali</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Rangamati"
            />
            <span className="-mt-[2px]">Rangamati</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Bandarban"
              // onClick={(e: any) => setDistrictLocation(e.target.name)}
            />
            <span className="-mt-[2px]">Bandarban</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfChittagong;
