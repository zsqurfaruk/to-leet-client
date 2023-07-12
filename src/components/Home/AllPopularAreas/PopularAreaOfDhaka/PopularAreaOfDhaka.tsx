import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DhaDataBan";
import { option } from "./DhaDataEng";
import { StateContext } from "@/Context/StateContext/StateContext";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
const selectStyles = {
  control: (styles: any, { isFocused }: any) => ({
    ...styles,
    borderColor: isFocused ? "#1598ac" : "#1598ac",
    boxShadow: isFocused ? "0 0 0 .5px #1598ac" : "none",
  }),
};
const PopularAreaOfDhaka = () => {
  const {
    setHomePopularAreaName,
    setFilterValue,
    filterValue,
    homePopularAreaName,
    setFilterModal,
    setTitleArea,
  }: any = useContext(StateContext);
  const handleFilter = (v: any) => {
    if (v?.name) {
      if (v?.name === "eng") {
        const newName = {
          eng: v?.label,
          ban: v?.value,
        };
        setHomePopularAreaName(newName);
        setTitleArea(newName?.eng);
        setFilterValue({ ...filterValue, homePopularAreaName: newName });
        Cookies.set("area", JSON.stringify(newName), { expires: 1 });
        setFilterModal(true);
      } else if (v?.name === "ban") {
        const newName = {
          eng: v?.value,
          ban: v?.label,
        };
        setHomePopularAreaName(newName);
        setTitleArea(newName?.eng);
        setFilterValue({ ...filterValue, homePopularAreaName: newName });
        Cookies.set("area", JSON.stringify(newName), { expires: 1 });
        setFilterModal(true);
      }
    } else {
      setHomePopularAreaName(v);
      setFilterValue({ ...filterValue, homePopularAreaName: v });
      Cookies.set("area", JSON.stringify(v), { expires: 1 });
    }
  };
  // if (homePopularAreaName?.name === "eng") {
  //   const newName = {
  //     eng: homePopularAreaName?.label,
  //     ban: homePopularAreaName?.value,
  //   };
  //   setHomePopularAreaName(newName);
  //   setFilterModal(true);
  // } else if (homePopularAreaName?.name === "ban") {
  //   const newName = {
  //     eng: homePopularAreaName?.value,
  //     ban: homePopularAreaName?.label,
  //   };
  //   setHomePopularAreaName(newName);
  //   setFilterModal(true);
  // }

  if (
    homePopularAreaName?.eng === "Mirpur" ||
    homePopularAreaName?.eng === "Uttara" ||
    homePopularAreaName?.eng === "New Market" ||
    homePopularAreaName?.eng === "Savar" ||
    homePopularAreaName?.eng === "Mohakhali" ||
    homePopularAreaName?.eng === "Dhamrai" ||
    homePopularAreaName?.eng === "Farmgate"
  ) {
    setFilterModal(true);
  }
  const lang = useSelector((state: any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
          <li>
            <label
              onClick={() => setTitleArea("Dhamrai")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Dhamrai",
                    ban: "ধামরাই",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Dhamrai</span>
              ) : (
                <span className="-mt-[2px]"> ধামরাই</span>
              )}
            </label>
          </li>
          <li>
            <label
              onClick={() => setTitleArea("Farmgate")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Farmgate",
                    ban: "ফার্মগেট",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Farmgate</span>
              ) : (
                <span className="-mt-[2px]"> ফার্মগেট</span>
              )}
            </label>
          </li>
          <li>
            <label
              onClick={() => setTitleArea("Mirpur")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Mirpur",
                    ban: "মিরপুর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Mirpur</span>
              ) : (
                <span className="-mt-[2px]"> মিরপুর</span>
              )}
            </label>
          </li>
          <li>
            <label
              onClick={() => setTitleArea("Mohakhali")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Mohakhali",
                    ban: "মহাখালী",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Mohakhali</span>
              ) : (
                <span className="-mt-[2px]"> মহাখালী</span>
              )}
            </label>
          </li>
          <li>
            <label
              onClick={() => setTitleArea("New Market")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "New Market",
                    ban: "নিউমার্কেট",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> New Market</span>
              ) : (
                <span className="-mt-[2px]"> নিউমার্কেট</span>
              )}
            </label>
          </li>
          <li>
            <label onClick={() => setTitleArea("Savar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Savar",
                    ban: "সাভার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Savar</span>
              ) : (
                <span className="-mt-[2px]"> সাভার</span>
              )}
            </label>
          </li>
          <li>
            <label
              onClick={() => setTitleArea("Uttara")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Uttara",
                    ban: "উত্তরা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Uttara</span>
              ) : (
                <span className="-mt-[2px]"> উত্তরা</span>
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

export default PopularAreaOfDhaka;
