import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";

const AllCityBan = () => {
  const { setCityNameBan }: any = useContext(StateContext);
  return (
    <div className="lg:mr-10 lg:-ml-4 ml-12">
      <ul className="grid grid-cols-3 gap-5 md:gap-3 text-black">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="ঢাকা"
            />
            <span className="-mt-[2px]"> ঢাকা</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="চট্টগ্রাম"
            />
            <span className="-mt-[2px]"> চট্টগ্রাম</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="রাজশাহী"
            />
            <span className="-mt-[2px]"> রাজশাহী</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="সিলেট"
            />
            <span className="-mt-[2px]"> সিলেট</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="বরিশাল"
            />
            <span className="-mt-[2px]"> বরিশাল</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="খুলনা"
            />
            <span className="-mt-[2px]"> খুলনা</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="রংপুর"
            />
            <span className="-mt-[2px]"> রংপুর</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              // onClick={(e: any) => setDivisionNameEng(e.target.name)}
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="ময়মনসিংহ"
            />
            <span className="-mt-[2px]"> ময়মনসিংহ</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AllCityBan;
