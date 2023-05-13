import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";

const PostAllCityEng = () => {
  const { setPostCityNameEng }: any = useContext(PostStateContext);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-black text-sm md:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
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
              onClick={(e: any) => setPostCityNameEng(e.target.name)}
              name="Mymensingh"
            />
            <span className="-mt-[2px]"> Mymensingh City</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PostAllCityEng;
