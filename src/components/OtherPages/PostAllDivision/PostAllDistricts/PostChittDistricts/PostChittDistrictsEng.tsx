/* eslint-disable react/no-unescaped-entities */
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Cookies from 'js-cookie';
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const PostChittDistrictsEng = () => {
  const { postDistrictsName, setPostDistrictsName,setPostOpenModal }: any = useContext(PostStateContext);
  const {lang}:any = useContext(FilterContext)
  if (postDistrictsName?.eng) {
    setPostOpenModal(true);
  }
  
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Chittagong", ban: "চট্টগ্রাম" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({
                  eng: "Brahmanbaria",
                  ban: "ব্রাহ্মণবাড়িয়া",
                })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Comilla", ban: "কুমিল্লা" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Chandpur", ban: "চাঁদপুর" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Cox's Bazar", ban: "কক্সবাজার" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => setPostDistrictsName({ eng: "Feni", ban: "ফেনী" })}
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Khagrachhari", ban: "খাগড়াছড়ি" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Lakshmipur", ban: "লক্ষ্মীপুর" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Noakhali", ban: "নোয়াখালী" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Rangamati", ban: "রাঙ্গামাটি" })
              }
            />
            {!lang ? (
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
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Bandarban", ban: "বান্দরবান" })
              }
            />
            {!lang ? (
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

export default PostChittDistrictsEng;
