import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useState, useEffect, useContext } from "react";

const PopularAreaOfBariBan = () => {
  const { handlePostOpenModal, postAreaName, setPostAreaName, setSize , size}: any =
    useContext(PostStateContext);

  useEffect(() => {
    if (postAreaName) {
      handlePostOpenModal("xxl");
      // setSize(null);
    }
  }, [handlePostOpenModal, postAreaName]);
 console.log(size)
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setPostAreaName(e.target.name)}
                name="সদররোড"
              />
              <span className="-mt-[2px]"> সদর রোড</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setPostAreaName(e.target.name)}
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
                onClick={(e: any) => setPostAreaName(e.target.name)}
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
                onClick={(e: any) => setPostAreaName(e.target.name)}
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
                onClick={(e: any) => setPostAreaName(e.target.name)}
                name="নবগ্রামরোড"
              />
              <span className="-mt-[2px]"> নবগ্রাম রোড</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setPostAreaName(e.target.name)}
                name="অন্যান্যএলাকা"
              />
              <span className="-mt-[2px]"> অন্যান্য এলাকা </span>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularAreaOfBariBan;
