import React from "react";

const SylPopularAreaBan = () => {
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm md:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> জিন্দা বাজার</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> বন্দর বাজার</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> আম্বরখানা</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> সাউথ সুরমা</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> উপশহর</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> অন্যান্য এলাকা </span>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SylPopularAreaBan;
