import React from "react";

const DistrictsOfSylhetBan = () => {
  return (
    <div>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-3">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="সিলেট"
            />
            <span className="-mt-[2px]">সিলেট</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="মৌলভীবাজার"
            />
            <span className="-mt-[2px]">মৌলভীবাজার</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="হবিগঞ্জ"
            />
            <span className="-mt-[2px]">হবিগঞ্জ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="সুনামগঞ্জ"
            />
            <span className="-mt-[2px]">সুনামগঞ্জ</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default DistrictsOfSylhetBan;
