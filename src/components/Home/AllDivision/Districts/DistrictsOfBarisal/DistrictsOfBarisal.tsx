import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfBarisal = () => {
  const { setDistrictsName, districtsName, setFilterModal}: any = useContext(StateContext);
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
                setDistrictsName({ eng: "Barguna", ban: "বরগুনা" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Barguna</span>
            ) : (
              <span className="-mt-[2px]">বরগুনা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Barisal", ban: "বরিশাল" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Barisal</span>
            ) : (
              <span className="-mt-[2px]">বরিশাল</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Bhola", ban: "ভোলা" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Bhola</span>
            ) : (
              <span className="-mt-[2px]">ভোলা</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Jhalokati", ban: "ঝালকাঠি" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Jhalokati</span>
            ) : (
              <span className="-mt-[2px]">ঝালকাঠি</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Patuakhali", ban: "পটুয়াখালী" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Patuakhali</span>
            ) : (
              <span className="-mt-[2px]">পটুয়াখালী</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setDistrictsName({ eng: "Pirojpur", ban: "পিরোজপুর" })
              }
            />
            {lang ? (
              <span className="-mt-[2px]">Pirojpur</span>
            ) : (
              <span className="-mt-[2px]">পিরোজপুর</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfBarisal;
