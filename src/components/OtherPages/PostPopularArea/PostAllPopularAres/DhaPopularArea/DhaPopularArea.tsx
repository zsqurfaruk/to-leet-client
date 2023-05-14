import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const DhaPopularArea = () => {
  const { getPostPopularAreaName,setGetPostPopularAreaName,setPostOpenModal }: any = useContext(PostStateContext);
  if (getPostPopularAreaName?.eng) {
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
                  setGetPostPopularAreaName({
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
                  setGetPostPopularAreaName({
                    eng: "Mohammadpur",
                    ban: "মোহাম্মদপুর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Mohammadpur</span>
              ) : (
                <span className="-mt-[2px]"> মোহাম্মদপুর</span>
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
                  setGetPostPopularAreaName({
                    eng: "Jatrabari",
                    ban: "যাত্রাবাড়ি",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Jatrabari</span>
              ) : (
                <span className="-mt-[2px]"> যাত্রাবাড়ি</span>
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
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
              />
              {
                lang ?
                <span className="-mt-[2px]"> Select others</span>: <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              }
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DhaPopularArea;
