import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataDhaBan";
import { option } from "./DataDhaEng";

const DhaPopularArea = () => {
  const { getPostPopularAreaName,setGetPostPopularAreaName,setPostOpenModal }: any = useContext(PostStateContext);
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
    getPostPopularAreaName?.eng === "Mirpur" ||
    getPostPopularAreaName?.eng === "Uttara" ||
    getPostPopularAreaName?.eng === "New Market" ||
    getPostPopularAreaName?.eng === "Savar" ||
    getPostPopularAreaName?.eng === "Mohakhali" ||
    getPostPopularAreaName?.eng === "Farmgate" ||
    getPostPopularAreaName?.eng === "Alankar"
  ) {
    setPostOpenModal(true);
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
                  setGetPostPopularAreaName({
                    eng: "Mirpur",
                    ban: "মিরপুর",
                  })
                }
              />
              {!lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Uttara",
                    ban: "উত্তরা",
                  })
                }
              />
              {!lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Farmgate",
                    ban: "ফার্মগেট",
                  })
                }
              />
              {!lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "New Market",
                    ban: "নিউমার্কেট",
                  })
                }
              />
              {!lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Mohakhali",
                    ban: "মহাখালী",
                  })
                }
              />
              {!lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Savar",
                    ban: "সাভার",
                  })
                }
              />
              {!lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Dhamrai",
                    ban: "ধামরাই",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Dhamrai</span>
              ) : (
                <span className="-mt-[2px]"> ধামরাই</span>
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

export default DhaPopularArea;
