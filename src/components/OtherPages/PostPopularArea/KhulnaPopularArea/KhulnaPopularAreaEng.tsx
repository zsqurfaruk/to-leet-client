import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataKhulnaBan";
import { option } from "./DataKhulnaEng";
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

const KhulnaPopularAreaEng = () => {
  const { getPostPopularAreaName,setGetPostPopularAreaName,setPostOpenModal }: any = useContext(PostStateContext)
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
    getPostPopularAreaName?.eng === "Khulna Sadar" ||
    getPostPopularAreaName?.eng === "Daulatpur" ||
    getPostPopularAreaName?.eng === "Khalishpur" ||
    getPostPopularAreaName?.eng === "Sonadanga" ||
    getPostPopularAreaName?.eng === "Boyra Bazar" ||
    getPostPopularAreaName?.eng === "Zero Point" ||
    getPostPopularAreaName?.eng === "Dumuria"
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
                  setGetPostPopularAreaName({
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
                  setGetPostPopularAreaName({
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
                  setGetPostPopularAreaName({
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
                  setGetPostPopularAreaName({
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
                  setGetPostPopularAreaName({
                    eng: "Zero Point",
                    ban: "জিরো পয়েন্ট",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Zero Point</span>
              ) : (
                <span className="-mt-[2px]">  
                জিরো পয়েন্ট</span>
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

export default KhulnaPopularAreaEng;
