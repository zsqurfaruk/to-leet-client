import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataRangBan";
import { option } from "./DataRangEng";
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

const RangPopularAreaEng = () => {
  const { getPostPopularAreaName,setGetPostPopularAreaName,setPostOpenModal }: any = useContext(PostStateContext);
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
    getPostPopularAreaName?.eng === "Shapla Chottor" ||
    getPostPopularAreaName?.eng === "Dhap" ||
    getPostPopularAreaName?.eng === "Lalbag Mor" ||
    getPostPopularAreaName?.eng === "Bodorganj" ||
    getPostPopularAreaName?.eng === "Pouro bazar" ||
    getPostPopularAreaName?.eng === "Vinno Jogot" ||
    getPostPopularAreaName?.eng === "College Para"
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
                  setGetPostPopularAreaName({
                    eng: "Bodorganj",
                    ban: "বদরগঞ্জ",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]">Bodorganj</span>
              ) : (
                <span className="-mt-[2px]"> বদরগঞ্জ</span>
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
                    eng: "College Para",
                    ban: "কলেজপাড়া",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> College Para</span>
              ) : (
                <span className="-mt-[2px]"> কলেজপাড়া</span>
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
                    eng: "Dhap",
                    ban: "ধাপ",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Dhap</span>
              ) : (
                <span className="-mt-[2px]"> ধাপ</span>
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
                    eng: "Lalbag Mor",
                    ban: "লালবাগ মোড়",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Lalbag Mor</span>
              ) : (
                <span className="-mt-[2px]"> লালবাগ মোড়</span>
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
                    eng: "Pouro bazar",
                    ban: "পৌর বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Pouro bazar</span>
              ) : (
                <span className="-mt-[2px]"> পৌর বাজার</span>
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
                    eng: "Shapla Chottor",
                    ban: "শাপলা চত্বর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Shapla Chottor</span>
              ) : (
                <span className="-mt-[2px]"> শাপলা চত্বর</span>
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
                    eng: "Vinno Jogot",
                    ban: "ভিন্ন জগত",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Vinno Jogot</span>
              ) : (
                <span className="-mt-[2px]"> ভিন্ন জগত</span>
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

export default RangPopularAreaEng;
