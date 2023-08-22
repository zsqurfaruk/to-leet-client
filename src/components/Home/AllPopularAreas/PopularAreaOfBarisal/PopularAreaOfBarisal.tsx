import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./BariDataBan";
import { option } from "./BariDataEng";
import { useDispatch, useSelector } from "react-redux";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
const selectStyles = {
  control: (styles: any, { isFocused }: any) => ({
    ...styles,
    borderColor: isFocused ? "#1598ac" : "#1598ac",
    boxShadow: isFocused ? "0 0 0 .5px #1598ac" : "none",
  }),
};

const PopularAreaOfBarishal = () => {
  const { setFilterModal }: any = useContext(StateContext);
  // const handleFilter = (v: any) => {
  //   if (v?.name) {
  //     if (v?.name === "eng") {
  //       const newName = {
  //         eng: v?.label,
  //         ban: v?.value,
  //       };
  //       setHomePopularAreaName(newName);
  //       setTitleArea(newName?.eng)
  //       setFilterValue({ ...filterValue, homePopularAreaName: newName });
  //       Cookies.set("area", JSON.stringify(newName),{ expires: 1 })
  //       setFilterModal(true);
  //     } else if (v?.name === "ban") {
  //       const newName = {
  //         eng: v?.value,
  //         ban: v?.label,
  //       };
  //       setHomePopularAreaName(newName);
  //       setTitleArea(newName?.eng)
  //       setFilterValue({ ...filterValue, homePopularAreaName: newName });
  //       Cookies.set("area", JSON.stringify(newName),{ expires: 1 })
  //       setFilterModal(true);
  //     }
  //   } else {
  //     setHomePopularAreaName(v);
  //     setFilterValue({ ...filterValue, homePopularAreaName: v });
  //     Cookies.set("area", JSON.stringify(v),{ expires: 1 })
  //   }
  // };

  const dispatch = useDispatch();
  // const homePopularAreaName = useSelector(
  //   (state: any) => state.homePopularArea.homePopularAreaName
  // );
  const homePopularAreaName = useSelector(
    (state: any) => state['qv-hpa'].homePopularAreaName
  );

  const handleFilter = (v: any) => {
    if (v?.name) {
      if (v?.name === "eng") {
        const newName = {
          eng: v?.label,
          ban: v?.value,
        };
        dispatch(setHomePopularAreaName(newName));
        setFilterModal(true);
      } else if (v?.name === "ban") {
        const newName = {
          eng: v?.value,
          ban: v?.label,
        };
        dispatch(setHomePopularAreaName(newName));
        setFilterModal(true);
      }
    } else {
      dispatch(setHomePopularAreaName(v));
    }
  };

  if (
    homePopularAreaName?.eng === "Sadar Road" ||
    homePopularAreaName?.eng === "Nattullabad" ||
    homePopularAreaName?.eng === "Rupatali" ||
    homePopularAreaName?.eng === "Gournadi" ||
    homePopularAreaName?.eng === "Nobogram Road" ||
    homePopularAreaName?.eng === "Kashipur Bazar" ||
    homePopularAreaName?.eng === "Amtala"
  ) {
    setFilterModal(true);
  }
  const lang = useSelector((state: any) => state.language.language);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() => handleFilter({ eng: "Amtala", ban: "আমতলা" })}
                name="Amtala"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Amtala</span>
              ) : (
                <span className="-mt-[2px]"> আমতলা</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Kashipur Bazar",
                    ban: "কাসিপুর বাজার",
                  })
                }
                name="Kashipur-Bazar"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Kashipur Bazar</span>
              ) : (
                <span className="-mt-[2px]"> কাসিপুর বাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() => handleFilter({ eng: "Gournadi", ban: "গৌরনদী" })}
                name="Gournadi"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Gournadi</span>
              ) : (
                <span className="-mt-[2px]"> গৌরনদী</span>
              )}
            </label>
          </li>

          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Nattullabad",
                    ban: "নথুল্লাবাদ",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Nattullabad</span>
              ) : (
                <span className="-mt-[2px]"> নথুল্লাবাদ</span>
              )}
            </label>
          </li>

          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({ eng: "Rupatali", ban: "রুপাতলি" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Rupatali</span>
              ) : (
                <span className="-mt-[2px]"> রুপাতলি</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Sadar Road",
                    ban: "সদর রোড",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Sadar Road</span>
              ) : (
                <span className="-mt-[2px]"> সদর রোড</span>
              )}
            </label>
          </li>

          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={(e: any) =>
                  handleFilter({
                    eng: "Nobogram Road",
                    ban: "নবগ্রাম রোড",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Nobogram Road</span>
              ) : (
                <span className="-mt-[2px]"> নবগ্রাম রোড</span>
              )}
            </label>
          </li>

          <li
            className={
              homePopularAreaName?.eng === "Select others" ? "hidden" : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
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
                    className="bg-primary border-none h-4 text-gray-700 font-medium text-xs"
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

export default PopularAreaOfBarishal;
