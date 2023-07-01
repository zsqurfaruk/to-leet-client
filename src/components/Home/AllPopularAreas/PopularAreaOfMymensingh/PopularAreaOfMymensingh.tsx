import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./MymDataBan";
import { option } from "./MymDataEng";
import { StateContext } from "@/Context/StateContext/StateContext";
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

const PopularAreaOfMym = () => {
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
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
            <label onClick={()=>setTitleArea("Cantonment")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
            <label onClick={()=>setTitleArea("Chorpara")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
            <label onClick={()=>setTitleArea("Ganginar par")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
            <label onClick={()=>setTitleArea("Valuka")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
            <label onClick={()=>setTitleArea("Town Hall")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
            <label onClick={()=>setTitleArea("Muktagacha")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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
            <label onClick={()=>setTitleArea("Naumahal")} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
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

export default PopularAreaOfMym;
