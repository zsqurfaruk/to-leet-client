import React from "react";

const DistrictsOfMymBan = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="ময়মনসিংহ"
            />
            <span className="-mt-[2px]">ময়মনসিংহ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="জামালপুর"
            />
            <span className="-mt-[2px]">জামালপুর</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="নেত্রকোণা"
            />
            <span className="-mt-[2px]">নেত্রকোণা</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="শেরপুর"
            />
            <span className="-mt-[2px]">শেরপুর</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default DistrictsOfMymBan;
