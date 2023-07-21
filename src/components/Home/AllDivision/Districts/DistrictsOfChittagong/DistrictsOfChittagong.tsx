/* eslint-disable react/no-unescaped-entities */
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";

const DistrictsOfChittagong = () => {
  const {
    setFilterModal,
  }: any = useContext(StateContext);

  const dispatch = useDispatch();
  const districtsName = useSelector(
    (state: RootState) => state.districtsName.districtsName
  );

  const handleFilter = (v: any) => {
    dispatch(setDistrictsName(v));
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
      <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Bandarban", ban: "বান্দরবান" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Bandarban</span>
            ) : (
              <span className="-mt-[2px]">বান্দরবান</span>
            )}
          </label>
        </li>

        <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({
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
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Chittagong", ban: "চট্টগ্রাম" })
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
              onClick={() => handleFilter({ eng: "Comilla", ban: "কুমিল্লা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Comilla</span>
            ) : (
              <span className="-mt-[2px]">কুমিল্লা</span>
            )}
          </label>
        </li>

        <li>
          <label   className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Chandpur", ban: "চাঁদপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Chandpur</span>
            ) : (
              <span className="-mt-[2px]">চাঁদপুর</span>
            )}
          </label>
        </li>

        <li>
          <label   className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Cox's Bazar", ban: "কক্সবাজার" })
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
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Feni", ban: "ফেনী" })}
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
                handleFilter({ eng: "Khagrachhari", ban: "খাগড়াছড়ি" })
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
          <label   className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Lakshmipur", ban: "লক্ষ্মীপুর" })
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
          <label   className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Noakhali", ban: "নোয়াখালী" })
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
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Rangamati", ban: "রাঙ্গামাটি" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Rangamati</span>
            ) : (
              <span className="-mt-[2px]">রাঙ্গামাটি</span>
            )}
          </label>
        </li>
        
      </ul>
    </div>
  );
};

export default DistrictsOfChittagong;
