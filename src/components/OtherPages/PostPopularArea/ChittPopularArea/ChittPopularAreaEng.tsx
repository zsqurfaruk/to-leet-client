import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataChittBan";
import { option } from "./DataChittEng";
import Cookies from 'js-cookie';
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";
const selectStyles = {
  control: (styles:any, { isFocused }:any) => ({
    ...styles,
    borderColor: isFocused ? '#1598ac' : '#1598ac',
    boxShadow: isFocused ? '0 0 0 .5px #1598ac' : 'none',
  }),
};

const ChittPopularAreaEng = () => {
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
    getPostPopularAreaName?.eng === "Agrabad" ||
    getPostPopularAreaName?.eng === "Chawkbazar" ||
    getPostPopularAreaName?.eng === "Kotwali" ||
    getPostPopularAreaName?.eng === "Halishahar" ||
    getPostPopularAreaName?.eng === "Nasirabad" ||
    getPostPopularAreaName?.eng === "Oxygen" ||
    getPostPopularAreaName?.eng === "Alankar"
  ) {
    setPostOpenModal(true);
  }
  const lang = useSelector((state:any) => state.language.language);
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
                  setGetPostPopularAreaName({ eng: "Agrabad", ban: "আগ্রাবাদ" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Agrabad</span>
              ) : (
                <span className="-mt-[2px]"> আগ্রাবাদ</span>
              )}
            </label>{" "}
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Chawkbazar",
                    ban: "চকবাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Chawkbazar</span>
              ) : (
                <span className="-mt-[2px]"> চকবাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Kotwali", ban: "কোতয়ালী" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Kotwali</span>
              ) : (
                <span className="-mt-[2px]"> কোতয়ালী</span>
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
                    eng: "Halishahar",
                    ban: "হালিশহর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Halishahar</span>
              ) : (
                <span className="-mt-[2px]"> হালিশহর</span>
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
                    eng: "Nasirabad",
                    ban: "নাসিরাবাদ",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Nasirabad</span>
              ) : (
                <span className="-mt-[2px]"> নাসিরাবাদ</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Oxygen", ban: "অক্সিজেন" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Oxygen</span>
              ) : (
                <span className="-mt-[2px]"> অক্সিজেন</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Alankar", ban: "অলঙ্কার" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Alankar</span>
              ) : (
                <span className="-mt-[2px]"> অলঙ্কার</span>
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
                onClick={(e: any) =>
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

export default ChittPopularAreaEng;
