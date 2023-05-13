import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataBariBan";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";

const BariPopularAreaBan = () => {
  const {getPopularAreaName, setGetPopularAreaName}:any = useContext(PostStateContext)
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="সদর-রোড"
              />
              <span className="-mt-[2px]"> সদর রোড</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="নথুল্লাবাদ"
              />
              <span className="-mt-[2px]"> নথুল্লাবাদ</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="রুপাতলি"
              />
              <span className="-mt-[2px]"> রুপাতলি</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="গৌরনদী"
              />
              <span className="-mt-[2px]"> গৌরনদী</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e:any) => setGetPopularAreaName(e.target.name)}
                name="নবগ্রাম"
              />
              <span className="-mt-[2px]"> নবগ্রাম রোড</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e:any) => setGetPopularAreaName(e.target.name)}
                name="কাসিপুর"
              />
              <span className="-mt-[2px]"> কাসিপুর বাজার</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e:any) => setGetPopularAreaName(e.target.name)}
                name="আমতলা"
              />
              <span className="-mt-[2px]"> আমতলা</span>
            </label>
          </li>
          {
           <li className={getPopularAreaName === "অন্যান্য" ? "hidden" : "flex"}>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e:any) => setGetPopularAreaName(e.target.name)}
                name="অন্যান্য"
              />
              <span className="-mt-[2px]"> অন্যান্য এলাকা </span>
            </label>
          </li>
          }
          {getPopularAreaName === "অন্যান্য" && (
            <li>
              <Select
                placeholder="অনুসন্ধান"
                isSearchable
                options={options}
                // onChange={setOpenModalBan}
                className="text-sm h-4 text-black font-medium"
              />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default BariPopularAreaBan;
