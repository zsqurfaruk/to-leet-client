import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./ChitDataBan";
import { option } from "./ChitDataEng";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";
const selectStyles = {
  control: (styles:any, { isFocused }:any) => ({
    ...styles,
    borderColor: isFocused ? '#1598ac' : '#1598ac',
    boxShadow: isFocused ? '0 0 0 .5px #1598ac' : 'none',
  }),
};

const PopularAreaOfChit = () => {
  const { setHomePopularAreaName, setFilterValue,filterValue, homePopularAreaName, setFilterModal,setTitleArea }: any =useContext(StateContext);
  // const {lang}:any = useContext(FilterContext)
  const handleFilter=(v:any)=>{
    if(v?.name){

      if (v?.name === "eng") {
        const newName = {
          eng: v?.label,
          ban: v?.value,
        };
        setHomePopularAreaName(newName);
        setTitleArea(newName?.eng)
        setFilterValue({...filterValue, homePopularAreaName:newName})
        Cookies.set("area", JSON.stringify(newName),{ expires: 1 })
        setFilterModal(true);
      } else if (v?.name === "ban") {
        const newName = {
          eng: v?.value,
          ban: v?.label,
        };
        setHomePopularAreaName(newName);
        setTitleArea(newName?.eng)
        setFilterValue({...filterValue, homePopularAreaName:newName})
        Cookies.set("area", JSON.stringify(newName),{ expires: 1 })
        setFilterModal(true);
      }
    }
    else{
      setHomePopularAreaName(v)
      setFilterValue({...filterValue, homePopularAreaName:v})
      Cookies.set("area", JSON.stringify(v),{ expires: 1 })
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
    homePopularAreaName?.eng === "Agrabad" ||
    homePopularAreaName?.eng === "Chawkbazar" ||
    homePopularAreaName?.eng === "Kotwali" ||
    homePopularAreaName?.eng === "Halishahar" ||
    homePopularAreaName?.eng === "Nasirabad" ||
    homePopularAreaName?.eng === "Oxygen" ||
    homePopularAreaName?.eng === "Alankar"
  ) {
    setFilterModal(true);
  }
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
          <li>
            <label onClick={()=>setTitleArea("Agrabad")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({ eng: "Agrabad", ban: "আগ্রাবাদ" })
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
            <label onClick={()=>setTitleArea("Alankar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({ eng: "Alankar", ban: "অলঙ্কার" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Alankar</span>
              ) : (
                <span className="-mt-[2px]"> অলঙ্কার</span>
              )}
            </label>
          </li>
          <li>
            <label onClick={()=>setTitleArea("Chawkbazar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
            <label onClick={()=>setTitleArea("Kotwali")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({ eng: "Kotwali", ban: "কোতয়ালী" })
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
            <label onClick={()=>setTitleArea("Halishahar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
            <label onClick={()=>setTitleArea("Nasirabad")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
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
            <label onClick={()=>setTitleArea("Oxygen")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({ eng: "Oxygen", ban: "অক্সিজেন" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Oxygen</span>
              ) : (
                <span className="-mt-[2px]"> অক্সিজেন</span>
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
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
                    className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                    styles={selectStyles} 
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

export default PopularAreaOfChit;
