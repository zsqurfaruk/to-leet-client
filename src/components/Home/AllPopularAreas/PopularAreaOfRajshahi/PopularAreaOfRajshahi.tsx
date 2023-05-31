import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./RajDataBan";
import { option } from "./RajDataEng";
import { StateContext } from "@/Context/StateContext/StateContext";

const PopularAreaOfRajshahi = () => {
  const { setHomePopularAreaName,setFilterValue,filterValue,  homePopularAreaName, setFilterModal }: any =useContext(StateContext); 

  const handleFilter=(v:any)=>{
    
    if(v?.name){

      if (v?.name === "eng") {
        const newName = {
          eng: v?.label,
          ban: v?.value,
        };
        setHomePopularAreaName(newName);
        setFilterValue({...filterValue, homePopularAreaName:newName})
        setFilterModal(true);
      } else if (v?.name === "ban") {
        const newName = {
          eng: v?.value,
          ban: v?.label,
        };
        setHomePopularAreaName(newName);
        setFilterValue({...filterValue, homePopularAreaName:newName})
        setFilterModal(true);
      }
    }
    else{
      setHomePopularAreaName(v)
      setFilterValue({...filterValue, homePopularAreaName:v})
    }
   
  }
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
    homePopularAreaName?.eng === "New Market" ||
    homePopularAreaName?.eng === "Shaheb Bazar" ||
    homePopularAreaName?.eng === "Uposahar" ||
    homePopularAreaName?.eng === "Kazla" ||
    homePopularAreaName?.eng === "Binodpur" ||
    homePopularAreaName?.eng === "Laksimipur" ||
    homePopularAreaName?.eng === "Padma Residental Area"
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
                  handleFilter({
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
                  handleFilter({
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
                  handleFilter({
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
                  handleFilter({
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
                  handleFilter({
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
                  handleFilter({
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
                  handleFilter({
                    eng: "Padma Residental Area",
                    ban: "পদ্মা আবাসিক এলাকা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Padma Resident</span>
              ) : (
                <span className="-mt-[2px]"> পদ্মা আবাসিক</span>
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
                    onChange={handleFilter}
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

export default PopularAreaOfRajshahi;
