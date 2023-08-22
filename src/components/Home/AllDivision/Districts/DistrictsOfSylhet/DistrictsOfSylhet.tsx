import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";

const DistrictsOfSylhet = () => {
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
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Habiganj", ban: "হবিগঞ্জ" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Habiganj</span>
            ) : (
              <span className="-mt-[2px]">হবিগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Moulvibazar", ban: "মৌলভীবাজার" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Moulvibazar</span>
            ) : (
              <span className="-mt-[2px]">মৌলভীবাজার</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Sunamganj", ban: "সুনামগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Sunamganj</span>
            ) : (
              <span className="-mt-[2px]">সুনামগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Sylhet", ban: "সিলেট" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Sylhet</span>
            ) : (
              <span className="-mt-[2px]">সিলেট</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfSylhet;
