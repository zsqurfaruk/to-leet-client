import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const DistrictsOfMym = () => {
  const {
    setDistrictsName,
    districtsName,
    setFilterValue,
    filterValue,
    setFilterModal,
    setTitleDistrict
  }: any = useContext(StateContext);
  const {lang}:any = useContext(FilterContext)
  const handleFilter = (v: any) => {
    setDistrictsName(v);
    setFilterValue({ ...filterValue, districtsName: v });
    Cookies.set("district", JSON.stringify(v),{ expires: 1 })
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }
 
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
      <li>
          <label onClick={()=>setTitleDistrict("Jamalpur")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Jamalpur", ban: "জামালপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Jamalpur</span>
            ) : (
              <span className="-mt-[2px]">জামালপুর</span>
            )}
          </label>
        </li>
        <li>
          <label onClick={()=>setTitleDistrict("Mymensingh")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
          <label onClick={()=>setTitleDistrict("Netrokona")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
          <label onClick={()=>setTitleDistrict("Sherpur")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
