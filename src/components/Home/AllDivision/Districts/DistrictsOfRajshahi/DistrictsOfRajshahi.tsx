import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";

const DistrictsOfRajshahi = () => {
  const { setFilterModal }: any = useContext(StateContext);

  const dispatch = useDispatch();
  const districtsName = useSelector(
    (state: RootState) => state['qv-dsn'].districtsName
  );

  const handleFilter = (v: any) => {
    dispatch(setDistrictsName(v));
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }
  const lang = useSelector((state: any) => state.language.language);
  return (
    <div>
      {" "}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Bogra", ban: "বগুড়া" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Bogra</span>
            ) : (
              <span className="-mt-[2px]">বগুড়া</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({
                  eng: "Chapainawabganj",
                  ban: "চাঁপাইনবাবগঞ্জ",
                })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Chapainawabganj</span>
            ) : (
              <span className="-mt-[2px]">চাঁপাইনবাবগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Joypurhat", ban: "জয়পুরহাট" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Joypurhat</span>
            ) : (
              <span className="-mt-[2px]">জয়পুরহাট</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Pabna", ban: "পাবনা" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Pabna</span>
            ) : (
              <span className="-mt-[2px]">পাবনা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Naogaon", ban: "নওগাঁ" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Naogaon</span>
            ) : (
              <span className="-mt-[2px]">নওগাঁ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Natore", ban: "নাটোর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Natore</span>
            ) : (
              <span className="-mt-[2px]">নাটোর</span>
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
              <span className="-mt-[2px]">Rajshahi</span>
            ) : (
              <span className="-mt-[2px]">রাজশাহী</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Sirajganj", ban: "সিরাজগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Sirajganj</span>
            ) : (
              <span className="-mt-[2px]">সিরাজগঞ্জ</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfRajshahi;
