import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfMym = () => {
  const {
    setDistrictsName,
    districtsName,
    setFilterValue,
    filterValue,
    setFilterModal,
  }: any = useContext(StateContext);

  const handleFilter = (v: any) => {
    setDistrictsName(v);
    setFilterValue({ ...filterValue, districtsName: v });
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }
  const lang = Cookies.get("lan");
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Mymensingh", ban: "ময়মনসিংহ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Mymensingh</span>
            ) : (
              <span className="-mt-[2px]">ময়মনসিংহ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Jamalpur", ban: "খুলনা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Jamalpur</span>
            ) : (
              <span className="-mt-[2px]">জামালপুর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Netrokona", ban: "নেত্রকোণা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Netrokona</span>
            ) : (
              <span className="-mt-[2px]">নেত্রকোণা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Sherpur", ban: "শেরপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Sherpur</span>
            ) : (
              <span className="-mt-[2px]">শেরপুর</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfMym;
