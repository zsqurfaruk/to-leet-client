import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./KhulDataBan";
import { option } from "./KhulDataEng";
import { useDispatch, useSelector } from "react-redux";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
const selectStyles = {
  control: (styles: any, { isFocused }: any) => ({
    ...styles,
    borderColor: isFocused ? "#1598ac" : "#1598ac",
    boxShadow: isFocused ? "0 0 0 .5px #1598ac" : "none",
  }),
};
const PopularAreaOfKhulna = () => {
  const { setFilterModal }: any = useContext(StateContext);

  const dispatch = useDispatch();
  const homePopularAreaName = useSelector(
    (state: any) => state.homePopularArea.homePopularAreaName
  );

  const handleFilter = (v: any) => {
    if (v?.name) {
      if (v?.name === "eng") {
        const newName = {
          eng: v?.label,
          ban: v?.value,
        };
        dispatch(setHomePopularAreaName(newName));
        setFilterModal(true);
      } else if (v?.name === "ban") {
        const newName = {
          eng: v?.value,
          ban: v?.label,
        };
        dispatch(setHomePopularAreaName(newName));
        setFilterModal(true);
      }
    } else {
      dispatch(setHomePopularAreaName(v));
    }
  };

  if (
    homePopularAreaName?.eng === "Khulna Sadar" ||
    homePopularAreaName?.eng === "Daulatpur" ||
    homePopularAreaName?.eng === "Khalishpur" ||
    homePopularAreaName?.eng === "Sonadanga" ||
    homePopularAreaName?.eng === "Boyra Bazar" ||
    homePopularAreaName?.eng === "Zero Point" ||
    homePopularAreaName?.eng === "Dumuria"
  ) {
    setFilterModal(true);
  }
  const lang = useSelector((state: any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Boyra Bazar",
                    ban: "বয়রা বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Boyra Bazar</span>
              ) : (
                <span className="-mt-[2px]"> বয়রা বাজার</span>
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
                    eng: "Daulatpur",
                    ban: "দৌলতপুর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Daulatpur</span>
              ) : (
                <span className="-mt-[2px]"> দৌলতপুর</span>
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
                    eng: "Dumuria",
                    ban: "ডুমুরিয়া",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Dumuria</span>
              ) : (
                <span className="-mt-[2px]"> ডুমুরিয়া</span>
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
                    eng: "Khulna Sadar",
                    ban: "খুলনা সদর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Khulna Sadar</span>
              ) : (
                <span className="-mt-[2px]">খুলনা সদর</span>
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
                    eng: "Khalishpur",
                    ban: "খালিশপুর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Khalishpur</span>
              ) : (
                <span className="-mt-[2px]"> খালিশপুর</span>
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
                    eng: "Sonadanga",
                    ban: "সোনাডাংগা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Sonadanga</span>
              ) : (
                <span className="-mt-[2px]"> সোনাডাংগা</span>
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
                    eng: "Zero Point",
                    ban: "জিরো পয়েন্ট",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Zero Point</span>
              ) : (
                <span className="-mt-[2px]">জিরো পয়েন্ট</span>
              )}
            </label>
          </li>

          <li
            className={
              homePopularAreaName?.eng === "Select others" ? "hidden" : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={(e: any) =>
                  handleFilter({
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
                name="Select-others"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Select others</span>
              ) : (
                <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              )}
            </label>
          </li>

          {!lang ? (
            <div>
              {homePopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="Search"
                    isSearchable
                    options={option}
                    onChange={handleFilter}
                    className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                    styles={selectStyles}
                  />
                </li>
              )}
            </div>
          ) : (
            <div>
              {homePopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="অনুসন্ধান"
                    isSearchable
                    options={options}
                    onChange={handleFilter}
                    className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                    styles={selectStyles}
                  />
                </li>
              )}
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default PopularAreaOfKhulna;
