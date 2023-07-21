import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDivisionNameEng } from "@/redux/features/DivisionFilter/DivisionFilterSlice";

const AllDivisionName = () => {
  const dispatch = useDispatch();

  const handleFilter = (division: { eng: string; ban: string }) => {
    dispatch(setDivisionNameEng(division));
  };
 
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div className="lg:-ml-4">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-gray-700 text-sm md:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Dhaka", ban: "ঢাকা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Dhaka Division</span>
            ) : (
              <span className="-mt-[2px]"> ঢাকা বিভাগ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2 lg:gap-0 lg:text-sm">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Chittagong", ban: "চট্টগ্রাম" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px] ml-1">Chittagong Division</span>
            ) : (
              <span className="-mt-[2px] text-base ml-2"> চট্টগ্রাম বিভাগ</span>
            )}
          </label>
        </li>
        <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Rajshahi", ban: "রাজশাহী" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Rajshahi Division</span>
            ) : (
              <span className="-mt-[2px]">রাজশাহী বিভাগ</span>
            )}
          </label>
        </li>
        <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Barisal", ban: "বরিশাল" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Barisal Division</span>
            ) : (
              <span className="-mt-[2px]">বরিশাল বিভাগ</span>
            )}
          </label>
        </li>
        <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Khulna", ban: "খুলনা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Khulna Division</span>
            ) : (
              <span className="-mt-[2px]"> খুলনা বিভাগ</span>
            )}
          </label>
        </li>
        <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Rangpur", ban: "রংপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Rangpur Division</span>
            ) : (
              <span className="-mt-[2px]"> রংপুর বিভাগ</span>
            )}
          </label>
        </li>
         <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Sylhet", ban: "সিলেট" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Sylhet Division</span>
            ) : (
              <span className="-mt-[2px]"> সিলেট বিভাগ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Mymensingh", ban: "ময়মনসিংহ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]"> Mymensingh D:</span>
            ) : (
              <span className="-mt-[2px]"> ময়মনসিংহ বিভাগ</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AllDivisionName;
