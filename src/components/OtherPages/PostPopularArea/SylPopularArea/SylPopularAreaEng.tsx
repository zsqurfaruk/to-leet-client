import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataSylBan";
import { option } from "./DataSylEng";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";
const selectStyles = {
  control: (styles: any, { isFocused }: any) => ({
    ...styles,
    borderColor: isFocused ? "#1598ac" : "#1598ac",
    boxShadow: isFocused ? "0 0 0 .5px #1598ac" : "none",
  }),
};

const SylPopularAreaEng = () => {
  const {
    getPostPopularAreaName,
    setGetPostPopularAreaName,
    setPostOpenModal,
  }: any = useContext(PostStateContext);
  // const {lang}:any = useContext(FilterContext)
  if (getPostPopularAreaName?.name === "eng") {
    const newName = {
      eng: getPostPopularAreaName?.label,
      ban: getPostPopularAreaName?.value,
    };
    setGetPostPopularAreaName(newName);
    setPostOpenModal(true);
  } else if (getPostPopularAreaName?.name === "ban") {
    const newName = {
      eng: getPostPopularAreaName?.value,
      ban: getPostPopularAreaName?.label,
    };
    setGetPostPopularAreaName(newName);
    setPostOpenModal(true);
  }

  if (
    getPostPopularAreaName?.eng === "Zinda Bazar" ||
    getPostPopularAreaName?.eng === "Bandar Bazar" ||
    getPostPopularAreaName?.eng === "Amber Khana" ||
    getPostPopularAreaName?.eng === "South Surma" ||
    getPostPopularAreaName?.eng === "Uposhohor" ||
    getPostPopularAreaName?.eng === "Bimanbondor" ||
    getPostPopularAreaName?.eng === "Osmani Nagar"
  ) {
    setPostOpenModal(true);
  }
  const lang = useSelector((state: any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Amber Khana",
                    ban: "আম্বরখানা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Amber Khana</span>
              ) : (
                <span className="-mt-[2px]"> আম্বরখানা</span>
              )}
            </label>
          </li>

          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Bandar Bazar",
                    ban: "বন্দর বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Bandar Bazar</span>
              ) : (
                <span className="-mt-[2px]"> বন্দর বাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Bimanbondor",
                    ban: "বিমানবন্দর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Bimanbondor</span>
              ) : (
                <span className="-mt-[2px]"> বিমানবন্দর</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Osmani Nagar",
                    ban: "ওসমানী নগর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Osmani Nagar</span>
              ) : (
                <span className="-mt-[2px]"> ওসমানী নগর</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "South Surma",
                    ban: "সাউথ সুরমা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> South Surma</span>
              ) : (
                <span className="-mt-[2px]"> সাউথ সুরমা</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Uposhohor",
                    ban: "উপশহর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Uposhohor</span>
              ) : (
                <span className="-mt-[2px]"> উপশহর</span>
              )}
            </label>
          </li>

          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Zinda Bazar",
                    ban: "জিন্দা বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Zinda Bazar</span>
              ) : (
                <span className="-mt-[2px]"> জিন্দা বাজার</span>
              )}
            </label>
          </li>
          <li
            className={
              getPostPopularAreaName?.eng === "Select others"
                ? "hidden"
                : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
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
              {getPostPopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="Search"
                    isSearchable
                    options={option}
                    onChange={setGetPostPopularAreaName}
                    className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                    styles={selectStyles}
                  />
                </li>
              )}
            </div>
          ) : (
            <div>
              {getPostPopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="অনুসন্ধান"
                    isSearchable
                    options={options}
                    onChange={setGetPostPopularAreaName}
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

export default SylPopularAreaEng;
