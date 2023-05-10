import React from "react";

const DistrictsOfDhakaBan = () => {
  return (
    <div>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 text-black">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="ঢাকা"
            />
            <span>ঢাকা</span>
          </label>
        </li>
      
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="গাজীপুর"
            />
            <span>গাজীপুর</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="ফরিদপুর"
            />
            <span >ফরিদপুর</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="গোপালগঞ্জ"
            />
            <span >গোপালগঞ্জ</span>
          </label>
        </li>
        
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="কিশোরগঞ্জ"
            />
            <span >কিশোরগঞ্জ</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="মাদারীপুর"
            />
            <span >মাদারীপুর</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="মানিকগঞ্জ"
            />
            <span >মানিকগঞ্জ</span>
          </label>
        </li>

        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="মুন্সিগঞ্জ"
            />
            <span >মুন্সিগঞ্জ</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="নারায়ণগঞ্জ"
            />
            <span >নারায়ণগঞ্জ</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="নরসিংদী"
            />
            <span >নরসিংদী</span>
          </label>
        </li>
        
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="রাজবাড়ী"
            />
            <span >রাজবাড়ী</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="শরীয়তপুর"
            />
            <span >শরীয়তপুর</span>
          </label>
        </li>
        <li>
          {" "}
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="টাঙ্গাইল"
            />
            <span >টাঙ্গাইল</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
 
export default DistrictsOfDhakaBan;
