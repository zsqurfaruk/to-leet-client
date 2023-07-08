import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./SylDataBan";
import { option } from "./SylDataEng";
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

const PopularAreaOfSylhet = () => {
  const { setHomePopularAreaName,setFilterValue,filterValue,  homePopularAreaName, setFilterModal,setTitleArea }: any =useContext(StateContext); 
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
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
            <label onClick={()=>setTitleArea("Amber Khana")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Amber Khana",
                    ban: "আম্বরখানা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Amber Khana</span>
              ) : (
                <span className="-mt-[2px]"> আম্বরখানা</span>
              )}
            </label>
          </li>
          <li>
            <label onClick={()=>setTitleArea("Bandar Bazar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Bandar Bazar",
                    ban: "বন্দর বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Bandar Bazar</span>
              ) : (
                <span className="-mt-[2px]"> বন্দর বাজার</span>
              )}
            </label>
          </li>
          <li>
            <label onClick={()=>setTitleArea("Bimanbondor")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Bimanbondor",
                    ban: "বিমানবন্দর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Bimanbondor</span>
              ) : (
                <span className="-mt-[2px]"> বিমানবন্দর</span>
              )}
            </label>
          </li>
         
          <li>
            <label onClick={()=>setTitleArea("Osmani Nagar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Osmani Nagar",
                    ban: "ওসমানী নগর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Osmani Nagar</span>
              ) : (
                <span className="-mt-[2px]"> ওসমানী নগর</span>
              )}
            </label>
          </li>
        
          <li>
            <label onClick={()=>setTitleArea("South Surma")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "South Surma",
                    ban: "সাউথ সুরমা",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> South Surma</span>
              ) : (
                <span className="-mt-[2px]"> সাউথ সুরমা</span>
              )}
            </label>
          </li>
          <li>
            <label onClick={()=>setTitleArea("Uposhohor")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Uposhohor",
                    ban: "উপশহর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Uposhohor</span>
              ) : (
                <span className="-mt-[2px]"> উপশহর</span>
              )}
            </label>
          </li>
          <li>
            <label onClick={()=>setTitleArea("Zinda Bazar")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Zinda Bazar",
                    ban: "জিন্দা বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Zinda Bazar</span>
              ) : (
                <span className="-mt-[2px]"> জিন্দা বাজার</span>
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

export default PopularAreaOfSylhet;
