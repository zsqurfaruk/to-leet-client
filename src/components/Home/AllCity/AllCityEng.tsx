import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";
import { useDispatch, useSelector } from "react-redux";
import { setCityName } from "@/redux/features/FilterCity/FilterCitySlice";
import { RootState } from "@/redux/app/store";
 
 
const AllCityEng = () => {
 
    const dispatch = useDispatch();
    const handleFilter = (city: { eng: string; ban: string }) => {
      dispatch(setCityName(city));
      // Cookies.set("city", JSON.stringify(city)); 
    };
  
    // Access the cityName from the Redux state using useSelector
    const cityName = useSelector((state: RootState) => state.cityName.cityName);

   
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-0 gap-y-3 text-gray-700 text-sm md:text-base">
        <li>
          <label  className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Dhaka", ban: "ঢাকা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Dhaka City</span>
            ) : (
              <span className="-mt-[2px]"> ঢাকা শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Chittagong", ban: "চট্টগ্রাম" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]"> Chittagong City</span>
            ) : (
              <span className="-mt-[2px]"> চট্টগ্রাম শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Rajshahi", ban: "রাজশাহী" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Rajshahi City</span>
            ) : (
              <span className="-mt-[2px]"> রাজশাহী শহর</span>
            )}
          </label>
        </li>
      
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Barisal", ban: "বরিশাল" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Barisal City</span>
            ) : (
              <span className="-mt-[2px]"> বরিশাল শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Khulna", ban: "খুলনা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Khulna City</span>
            ) : (
              <span className="-mt-[2px]"> খুলনা শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Rangpur", ban: "রংপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]"> Rangpur City</span>
            ) : (
              <span className="-mt-[2px]"> রংপুর শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Sylhet", ban: "সিলেট" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]"> Sylhet City</span>
            ) : (
              <span className="-mt-[2px]"> সিলেট শহর</span>
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
              <span className="-mt-[2px]"> Mymensingh City</span>
            ) : (
              <span className="-mt-[2px]"> ময়মনসিংহ শহর</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AllCityEng;
