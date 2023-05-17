import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./SylDataBan";
import { option } from "./SylDataEng";

const PopularAreaOfSylhet = () => {
  const { setHomePopularAreaName,  homePopularAreaName, setFilterModal }: any =useContext(StateContext); 
  if (homePopularAreaName?.name === "eng") {
    const newName = {
      eng: homePopularAreaName?.label,
      ban: homePopularAreaName?.value,
    };
    setHomePopularAreaName(newName);
    setFilterModal(true);
  } else if (homePopularAreaName?.name === "ban") {
    const newName = {
      eng: homePopularAreaName?.value,
      ban: homePopularAreaName?.label,
    };
    setHomePopularAreaName(newName);
    setFilterModal(true);
  }

  if (
    homePopularAreaName?.eng === "Zinda Bazar" ||
    homePopularAreaName?.eng === "Bandar Bazar" ||
    homePopularAreaName?.eng === "Amber Khana" ||
    homePopularAreaName?.eng === "South Surma" ||
    homePopularAreaName?.eng === "Uposhohor" ||
    homePopularAreaName?.eng === "Bimanbondor" ||
    homePopularAreaName?.eng === "Osmani Nagar"
  ) {
    setFilterModal(true);
  }
  const lang = localStorage.getItem("lan");
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
                  setHomePopularAreaName({
                    eng: "Zinda Bazar",
                    ban: "জিন্দা বাজার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Zinda Bazar</span>
              ) : (
                <span className="-mt-[2px]"> জিন্দা বাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Bandar Bazar",
                    ban: "বন্দর বাজার",
                  })
                }
              />
              {lang ? (
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Amber Khana",
                    ban: "আম্বরখানা",
                  })
                }
              />
              {lang ? (
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "South Surma",
                    ban: "সাউথ সুরমা",
                  })
                }
              />
              {lang ? (
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Uposhohor",
                    ban: "উপশহর",
                  })
                }
              />
              {lang ? (
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Bimanbondor",
                    ban: "বিমানবন্দর",
                  })
                }
              />
              {lang ? (
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Osmani Nagar",
                    ban: "ওসমানী নগর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Osmani Nagar</span>
              ) : (
                <span className="-mt-[2px]"> ওসমানী নগর</span>
              )}
            </label>
          </li>
          <li
            className={
              homePopularAreaName?.eng === "Select others"
                ? "hidden"
                : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setHomePopularAreaName({
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
                name="Select-others"
              />
              {lang ? (
                <span className="-mt-[2px]"> Select others</span>
              ) : (
                <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              )}
            </label>
          </li>

          {lang ? (
            <div>
              {homePopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="Search"
                    isSearchable
                    options={option}
                    onChange={setHomePopularAreaName}
                    className="bg-primary border-none text-sm h-4 text-black font-medium"
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
                    onChange={setHomePopularAreaName}
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

export default PopularAreaOfSylhet;
