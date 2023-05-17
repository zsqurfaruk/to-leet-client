/* eslint-disable react/no-unescaped-entities */
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfChittagong = () => {
  const { setDistrictsName, districtsName, setFilterModal }: any =
    useContext(StateContext);
  if (districtsName?.eng) {
    setFilterModal(true);
  }
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Chittagong", ban: "চট্টগ্রাম" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Chittagong</span>
            ) : (
              <span className="-mt-[2px]">চট্টগ্রাম</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({
                  eng: "Brahmanbaria",
                  ban: "ব্রাহ্মণবাড়িয়া",
                })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Brahmanbaria</span>
            ) : (
              <span className="-mt-[2px]">ব্রাহ্মণবাড়িয়া</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Comilla", ban: "কুমিল্লা" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Comilla</span>
            ) : (
              <span className="-mt-[2px]">কুমিল্লা</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Chandpur", ban: "চাঁদপুর" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Chandpur</span>
            ) : (
              <span className="-mt-[2px]">চাঁদপুর</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Cox's Bazar", ban: "কক্সবাজার" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]"> Cox's Bazar</span>
            ) : (
              <span className="-mt-[2px]"> কক্সবাজার</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => setDistrictsName({ eng: "Feni", ban: "ফেনী" })}
            />
            {lang ? (
              <span className="-mt-[2px]">Feni</span>
            ) : (
              <span className="-mt-[2px]">ফেনী</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Khagrachhari", ban: "খাগড়াছড়ি" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Khagrachhari</span>
            ) : (
              <span className="-mt-[2px]">খাগড়াছড়ি</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Lakshmipur", ban: "লক্ষ্মীপুর" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Lakshmipur</span>
            ) : (
              <span className="-mt-[2px]">লক্ষ্মীপুর</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Noakhali", ban: "নোয়াখালী" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Noakhali</span>
            ) : (
              <span className="-mt-[2px]">নোয়াখালী</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Rangamati", ban: "রাঙ্গামাটি" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Rangamati</span>
            ) : (
              <span className="-mt-[2px]">রাঙ্গামাটি</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Bandarban", ban: "বান্দরবান" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Bandarban</span>
            ) : (
              <span className="-mt-[2px]">বান্দরবান</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfChittagong;
