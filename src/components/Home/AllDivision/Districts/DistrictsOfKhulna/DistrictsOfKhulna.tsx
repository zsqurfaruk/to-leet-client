import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfKhulna = () => {
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
              onClick={() => setDistrictsName({ eng: "Khulna", ban: "খুলনা" })}
            />
            {lang ? (
              <span className="-mt-[2px]">Khulna</span>
            ) : (
              <span className="-mt-[2px]">খুলনা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Bagerhat", ban: "বাগেরহাট" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Bagerhat</span>
            ) : (
              <span className="-mt-[2px]">বাগেরহাট</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Chuadanga", ban: "চুয়াডাঙ্গা" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Chuadanga</span>
            ) : (
              <span className="-mt-[2px]">চুয়াডাঙ্গা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => setDistrictsName({ eng: "Jessore", ban: "যশোর" })}
            />
            {lang ? (
              <span className="-mt-[2px]">Jessore</span>
            ) : (
              <span className="-mt-[2px]">যশোর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Jhenaidah", ban: "ঝিনাইদহ" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Jhenaidah</span>
            ) : (
              <span className="-mt-[2px]">ঝিনাইদহ</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Kushtia", ban: "কুষ্টিয়া" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Kushtia</span>
            ) : (
              <span className="-mt-[2px]">কুষ্টিয়া</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => setDistrictsName({ eng: "Magura", ban: "মাগুরা" })}
            />
            {lang ? (
              <span className="-mt-[2px]">Magura</span>
            ) : (
              <span className="-mt-[2px]">মাগুরা</span>
            )}
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Meherpur", ban: "মেহেরপুর" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Meherpur</span>
            ) : (
              <span className="-mt-[2px]">মেহেরপুর</span>
            )}
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => setDistrictsName({ eng: "Narail", ban: "নড়াইল" })}
            />
            {lang ? (
              <span className="-mt-[2px]">Narail</span>
            ) : (
              <span className="-mt-[2px]">নড়াইল</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Satkhira", ban: "সাতক্ষীরা" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Satkhira</span>
            ) : (
              <span className="-mt-[2px]">সাতক্ষীরা</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfKhulna;
