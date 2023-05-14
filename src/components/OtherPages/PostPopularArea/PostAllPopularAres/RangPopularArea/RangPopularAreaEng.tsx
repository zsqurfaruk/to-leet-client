import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const RangPopularAreaEng = () => {
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
                    eng: "Shapla Chottor",
                    ban: "শাপলা চত্বর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Shapla Chottor</span>
              ) : (
                <span className="-mt-[2px]"> শাপলা চত্বর</span>
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
                    eng: "Dhap",
                    ban: "ধাপ",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Dhap</span>
              ) : (
                <span className="-mt-[2px]"> ধাপ</span>
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
                    eng: "Lalbag Mor",
                    ban: "লালবাগ মোড়",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Lalbag Mor</span>
              ) : (
                <span className="-mt-[2px]"> লালবাগ মোড়</span>
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
                    eng: "Jahaj Company More",
                    ban: "জাহাজ কোম্পানি মোড়",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Jahaj Company More</span>
              ) : (
                <span className="-mt-[2px]"> জাহাজ কোম্পানি মোড়</span>
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
                    eng: "Pouro bazar",
                    ban: "পৌর বাজার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Pouro bazar</span>
              ) : (
                <span className="-mt-[2px]"> পৌর বাজার</span>
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

export default RangPopularAreaEng;
