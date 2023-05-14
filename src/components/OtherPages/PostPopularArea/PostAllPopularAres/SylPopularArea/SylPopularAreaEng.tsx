import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const SylPopularAreaEng = () => {
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
                    eng: "Zinda Bazar",
                    ban: "জিন্দা বাজার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Zinda Bazar</span>
              ) : (
                <span className="-mt-[2px]"> জিন্দা বাজার</span>
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
                    eng: "Bandar Bazar",
                    ban: "বন্দর বাজার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Bandar Bazar</span>
              ) : (
                <span className="-mt-[2px]"> বন্দর বাজার</span>
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
                    eng: "Amber Khana",
                    ban: "আম্বরখানা",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Amber Khana</span>
              ) : (
                <span className="-mt-[2px]"> আম্বরখানা</span>
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
                    eng: "South Surma",
                    ban: "সাউথ সুরমা",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> South Surma</span>
              ) : (
                <span className="-mt-[2px]"> সাউথ সুরমা</span>
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
                    eng: "Uposhohor",
                    ban: "উপশহর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Uposhohor</span>
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
                  setGetPostPopularAreaName({
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
              />
              { lang ?
                <span className="-mt-[2px]"> Select others</span>:
              <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              }
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SylPopularAreaEng;
