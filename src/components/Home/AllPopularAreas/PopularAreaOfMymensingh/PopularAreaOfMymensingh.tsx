import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./MymDataBan";
import { option } from "./MymDataEng";
import { StateContext } from "@/Context/StateContext/StateContext";

const PopularAreaOfMym = () => {
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
    homePopularAreaName?.eng === "Ganginar par" ||
    homePopularAreaName?.eng === "Chorpara" ||
    homePopularAreaName?.eng === "Valuka" ||
    homePopularAreaName?.eng === "Town Hall" ||
    homePopularAreaName?.eng === "Muktagacha" ||
    homePopularAreaName?.eng === "Cantonment" ||
    homePopularAreaName?.eng === "Naumahal"
  ) {
    setFilterModal(true);
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
                  handleFilter({
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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

export default PopularAreaOfMym;
