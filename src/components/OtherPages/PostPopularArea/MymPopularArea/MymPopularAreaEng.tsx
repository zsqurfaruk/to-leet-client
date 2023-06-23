import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataMymBan";
import { option } from "./DataMymEng";
import Cookies from 'js-cookie';
import { FilterContext } from "@/Context/FilterContext/FilterContext";
const selectStyles = {
  control: (styles:any, { isFocused }:any) => ({
    ...styles,
    borderColor: isFocused ? '#1598ac' : '#1598ac',
    boxShadow: isFocused ? '0 0 0 .5px #1598ac' : 'none',
  }),
};

const MymPopularAreaEng = () => {
  const {
    getPostPopularAreaName,
    setGetPostPopularAreaName,
    setPostOpenModal,
  }: any = useContext(PostStateContext)
  const {lang}:any = useContext(FilterContext)
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
    getPostPopularAreaName?.eng === "Ganginar par" ||
    getPostPopularAreaName?.eng === "Chorpara" ||
    getPostPopularAreaName?.eng === "Valuka" ||
    getPostPopularAreaName?.eng === "Town Hall" ||
    getPostPopularAreaName?.eng === "Muktagacha" ||
    getPostPopularAreaName?.eng === "Cantonment" ||
    getPostPopularAreaName?.eng === "Naumahal"
  ) {
    setPostOpenModal(true);
  }
  
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
                    eng: "Ganginar par",
                    ban: "গাঙ্গিনার পাড়",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Ganginar par</span>
              ) : (
                <span className="-mt-[2px]"> গাঙ্গিনার পাড়</span>
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
                    eng: "Chorpara",
                    ban: "চরপাড়া",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Chorpara</span>
              ) : (
                <span className="-mt-[2px]"> চরপাড়া</span>
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
                    eng: "Valuka",
                    ban: "ভালুকা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Valuka</span>
              ) : (
                <span className="-mt-[2px]"> ভালুকা</span>
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
                    eng: "Town Hall",
                    ban: "টাউন হল",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Town Hall</span>
              ) : (
                <span className="-mt-[2px]"> টাউন হল</span>
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
                    eng: "Muktagacha",
                    ban: "মুক্তাগাছা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Muktagacha</span>
              ) : (
                <span className="-mt-[2px]"> মুক্তাগাছা</span>
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
                    eng: "Cantonment",
                    ban: "ক্যান্টনমেন্ট",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Cantonment</span>
              ) : (
                <span className="-mt-[2px]"> ক্যান্টনমেন্ট</span>
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
                    eng: "Naumahal",
                    ban: "নওমহল",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Naumahal</span>
              ) : (
                <span className="-mt-[2px]"> নওমহল</span>
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

export default MymPopularAreaEng;
