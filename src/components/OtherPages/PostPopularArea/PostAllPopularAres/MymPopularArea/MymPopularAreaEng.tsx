import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const MymPopularAreaEng = () => {
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
                    eng: "Ganginar par",
                    ban: "গাঙ্গিনার পাড়",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Ganginar par</span>
              ) : (
                <span className="-mt-[2px]"> গাঙ্গিনার পাড়</span>
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
                    eng: "Chorpara",
                    ban: "চরপাড়া",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Chorpara</span>
              ) : (
                <span className="-mt-[2px]"> চরপাড়া</span>
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
                    eng: "Valuka",
                    ban: "ভালুকা",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Valuka</span>
              ) : (
                <span className="-mt-[2px]"> ভালুকা</span>
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
                    eng: "Town Hall",
                    ban: "টাউন হল",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Town Hall</span>
              ) : (
                <span className="-mt-[2px]"> টাউন হল</span>
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
                    eng: "Muktagacha",
                    ban: "মুক্তাগাছা",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Muktagacha</span>
              ) : (
                <span className="-mt-[2px]"> মুক্তাগাছা</span>
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

export default MymPopularAreaEng;
