import React, { useContext } from "react";

const PostBariDistrictsEng = () => {
  // const {setDistrictLocation}:any= useContext(StateContext)
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Barguna"
            />
            <span className="-mt-[2px]">Barguna</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Barisal"
            />
            <span className="-mt-[2px]">Barisal</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Bhola"
            />
            <span className="-mt-[2px]">Bhola</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Jhalokati"
            />
            <span className="-mt-[2px]">Jhalokati</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Patuakhali"
            />
            <span className="-mt-[2px]">Patuakhali</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Pirojpur"
              // onClick={(e: any) => setDistrictLocation(e.target.name)}
            />
            <span className="-mt-[2px]">Pirojpur</span>
          </label>{" "}
        </li>
      </ul>
    </div>
  );
};

export default PostBariDistrictsEng;
