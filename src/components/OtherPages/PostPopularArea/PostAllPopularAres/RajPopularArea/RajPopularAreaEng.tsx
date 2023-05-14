import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const RajPopularAreaEng = () => {
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
                    eng: "New Market",
                    ban: "নিউ মার্কেট",
                  })
                }
              />
              {lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Shaheb Bazar",
                    ban: "সাহেব বাজার",
                  })
                }
              />
              {lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Uposahar",
                    ban: "উপশহর",
                  })
                }
              />
              {lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Kazla",
                    ban: "কাজলা",
                  })
                }
              />
              {lang ? (
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
                  setGetPostPopularAreaName({
                    eng: "Motihar",
                    ban: "মতিহার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Motihar</span>
              ) : (
                <span className="-mt-[2px]"> মতিহার</span>
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

export default RajPopularAreaEng;
