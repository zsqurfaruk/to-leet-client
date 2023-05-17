import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./BariDataBan";
import { option } from "./BariDataEng";

const PopularAreaOfBarishal = () => {
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
  const lang = localStorage.getItem("lan");
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          {/* <Link href={"/AddProduct"}> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Sadar Road",
                    ban: "সদর রোড",
                  })
                }
                // name={lang ? '' : ""}
              />
              {lang ? (
                <span className="-mt-[2px]"> Sadar Road</span>
              ) : (
                <span className="-mt-[2px]"> সদর রোড</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setHomePopularAreaName({
                    eng: "Nattullabad",
                    ban: "নথুল্লাবাদ",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Nattullabad</span>
              ) : (
                <span className="-mt-[2px]"> নথুল্লাবাদ</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setHomePopularAreaName({ eng: "Rupatali", ban: "রুপাতলি" })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Rupatali</span>
              ) : (
                <span className="-mt-[2px]"> রুপাতলি</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href={"/AddProduct"}> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({ eng: "Gournadi", ban: "গৌরনদী" })
                }
                name="Gournadi"
              />
              {lang ? (
                <span className="-mt-[2px]"> Gournadi</span>
              ) : (
                <span className="-mt-[2px]"> গৌরনদী</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setHomePopularAreaName({
                    eng: "Nobogram Road",
                    ban: "নবগ্রাম রোড",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Nobogram Road</span>
              ) : (
                <span className="-mt-[2px]"> নবগ্রাম রোড</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({
                    eng: "Kashipur Bazar",
                    ban: "কাসিপুর বাজার",
                  })
                }
                name="Kashipur-Bazar"
              />
              {lang ? (
                <span className="-mt-[2px]"> Kashipur Bazar</span>
              ) : (
                <span className="-mt-[2px]"> কাসিপুর বাজার</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setHomePopularAreaName({ eng: "Amtala", ban: "আমতলা" })
                }
                name="Amtala"
              />
              {lang ? (
                <span className="-mt-[2px]"> Amtala</span>
              ) : (
                <span className="-mt-[2px]"> আমতলা</span>
              )}
            </label>
          </li>
          {/* </Link> */}

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
                    className="bg-primary border-none h-4 text-black font-medium text-xs"
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
