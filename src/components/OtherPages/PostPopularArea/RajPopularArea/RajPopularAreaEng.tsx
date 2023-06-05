import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataRajBan";
import { option } from "./DataRajEng";
import Cookies from 'js-cookie';

const RajPopularAreaEng = () => {
  const {
    getPostPopularAreaName,
    setGetPostPopularAreaName,
    setPostOpenModal,
  }: any = useContext(PostStateContext);
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
    getPostPopularAreaName?.eng === "New Market" ||
    getPostPopularAreaName?.eng === "Shaheb Bazar" ||
    getPostPopularAreaName?.eng === "Uposahar" ||
    getPostPopularAreaName?.eng === "Kazla" ||
    getPostPopularAreaName?.eng === "Binodpur" ||
    getPostPopularAreaName?.eng === "Laksimipur" ||
    getPostPopularAreaName?.eng === "Padma Residental Area"
  ) {
    setPostOpenModal(true);
  }
  const lang = Cookies.get("lan");
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "New Market",
                    ban: "নিউ মার্কেট",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> New Market</span>
              ) : (
                <span className="-mt-[2px]"> নিউ মার্কেট</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Shaheb Bazar",
                    ban: "সাহেব বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Shaheb Bazar</span>
              ) : (
                <span className="-mt-[2px]"> সাহেব বাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Uposahar",
                    ban: "উপশহর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Uposahar</span>
              ) : (
                <span className="-mt-[2px]"> উপশহর</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Kazla",
                    ban: "কাজলা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Kazla</span>
              ) : (
                <span className="-mt-[2px]"> কাজলা</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Binodpur",
                    ban: "বিনোদপুর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Binodpur</span>
              ) : (
                <span className="-mt-[2px]"> বিনোদপুর</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Laksimipur",
                    ban: "লক্ষ্মীপুর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Laksimipur</span>
              ) : (
                <span className="-mt-[2px]">লক্ষ্মীপুর </span>
              )}
            </label>
          </li>

          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Padma Residental Area",
                    ban: "পদ্মা আবাসিক এলাকা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Padma Residental Area</span>
              ) : (
                <span className="-mt-[2px]"> পদ্মা আবাসিক এলাকা</span>
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
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
                    className="bg-primary border-none text-sm h-4 text-black font-medium"
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
                    className="bg-primary border-none text-sm h-4 text-black font-medium"
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

export default RajPopularAreaEng;
