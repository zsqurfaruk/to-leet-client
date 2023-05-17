import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DhaDataBan";
import { option } from "./DhaDataEng"
import { StateContext } from "@/Context/StateContext/StateContext";

const PopularAreaOfDhaka = () => {
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
                    eng: "Mirpur",
                    ban: "মিরপুর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Mirpur</span>
              ) : (
                <span className="-mt-[2px]"> মিরপুর</span>
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
                    eng: "Uttara",
                    ban: "উত্তরা",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Uttara</span>
              ) : (
                <span className="-mt-[2px]"> উত্তরা</span>
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
                    eng: "Farmgate",
                    ban: "ফার্মগেট",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Farmgate</span>
              ) : (
                <span className="-mt-[2px]"> ফার্মগেট</span>
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
                    eng: "New Market",
                    ban: "নিউমার্কেট",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> New Market</span>
              ) : (
                <span className="-mt-[2px]"> নিউমার্কেট</span>
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
                    eng: "Mohakhali",
                    ban: "মহাখালী",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Mohakhali</span>
              ) : (
                <span className="-mt-[2px]"> মহাখালী</span>
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
                    eng: "Savar",
                    ban: "সাভার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Savar</span>
              ) : (
                <span className="-mt-[2px]"> সাভার</span>
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
                    eng: "Dhamrai",
                    ban: "ধামরাই",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Dhamrai</span>
              ) : (
                <span className="-mt-[2px]"> ধামরাই</span>
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

export default PopularAreaOfDhaka;
