import React from "react";

const KhulnaPopularAreaEng = () => {
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> Khulna Sadar</span>
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
              <span className="-mt-[2px]"> Daulatpur</span>
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
              <span className="-mt-[2px]"> Khalishpur</span>
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
              <span className="-mt-[2px]"> Sonadanga</span>
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
              <span className="-mt-[2px]"> Boyra Bazar</span>
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
              <span className="-mt-[2px]"> Select others</span>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default KhulnaPopularAreaEng;
