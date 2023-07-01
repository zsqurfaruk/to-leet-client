import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

const DistrictsOfDhaka = () => {
  const {
    setDistrictsName,
    districtsName,
    setFilterValue,
    filterValue,
    setFilterModal,
    setTitleDistrict
  }: any = useContext(StateContext);
  // const {lang}:any = useContext(FilterContext)
  const handleFilter = (v: any) => {
    setDistrictsName(v);
    setFilterValue({ ...filterValue, districtsName: v });
    Cookies.set("district", JSON.stringify(v),{ expires: 1 })
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }

  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
          <label onClick={()=>setTitleDistrict("Dhaka")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Dhaka", ban: "ঢাকা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Dhaka</span>
            ) : (
              <span>ঢাকা</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Faridpur")} className="flex gap-[6px]">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Faridpur", ban: "ফরিদপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Faridpur</span>
            ) : (
              <span>ফরিদপুর</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Gazipur")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Gazipur", ban: "গাজীপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Gazipur</span>
            ) : (
              <span>গাজীপুর</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Gopalganj")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Gopalganj", ban: "গোপালগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Gopalganj</span>
            ) : (
              <span>গোপালগঞ্জ</span>
            )}
          </label>
        </li>

        <li>
          <label onClick={()=>setTitleDistrict("Kishoreganj")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Kishoreganj", ban: "কিশোরগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Kishoreganj</span>
            ) : (
              <span>কিশোরগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          <label onClick={()=>setTitleDistrict("Madaripur")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Madaripur", ban: "মাদারীপুর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Madaripur</span>
            ) : (
              <span>মাদারীপুর</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Manikganj")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Manikganj", ban: "মানিকগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Manikganj</span>
            ) : (
              <span>মানিকগঞ্জ</span>
            )}
          </label>
        </li>

        <li>
          <label onClick={()=>setTitleDistrict("Munshiganj")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Munshiganj", ban: "মুন্সিগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Munshiganj</span>
            ) : (
              <span>মুন্সিগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Narayanganj")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Narayanganj", ban: "নারায়ণগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Narayanganj</span>
            ) : (
              <span>নারায়ণগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Narsingdi")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Narsingdi", ban: "নরসিংদী" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Narsingdi</span>
            ) : (
              <span>নরসিংদী</span>
            )}
          </label>
        </li>

        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Rajbari")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Rajbari", ban: "রাজবাড়ী" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Rajbari</span>
            ) : (
              <span>রাজবাড়ী</span>
            )}
          </label>
        </li>
        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Shariatpur")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Shariatpur", ban: "শরীয়তপুর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Shariatpur</span>
            ) : (
              <span>শরীয়তপুর</span>
            )}
          </label>
        </li>

        <li>
          {" "}
          <label onClick={()=>setTitleDistrict("Tangail")} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Tangail", ban: "টাঙ্গাইল" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Tangail</span>
            ) : (
              <span>টাঙ্গাইল</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfDhaka;
