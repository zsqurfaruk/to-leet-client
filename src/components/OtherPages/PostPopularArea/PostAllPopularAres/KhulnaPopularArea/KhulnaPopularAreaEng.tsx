import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const KhulnaPopularAreaEng = () => {
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
                    eng: "Khulna Sadar",
                    ban: "খুলনা সদর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Khulna Sadar</span>
              ) : (
                <span className="-mt-[2px]">খুলনা সদর</span>
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
                    eng: "Daulatpur",
                    ban: "দৌলতপুর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Daulatpur</span>
              ) : (
                <span className="-mt-[2px]"> দৌলতপুর</span>
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
                    eng: "Khalishpur",
                    ban: "খালিশপুর",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Khalishpur</span>
              ) : (
                <span className="-mt-[2px]"> খালিশপুর</span>
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
                    eng: "Sonadanga",
                    ban: "সোনাডাংগা",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Sonadanga</span>
              ) : (
                <span className="-mt-[2px]"> সোনাডাংগা</span>
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
                    eng: "Boyra Bazar",
                    ban: "বয়রা বাজার",
                  })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Boyra Bazar</span>
              ) : (
                <span className="-mt-[2px]"> বয়রা বাজার</span>
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

export default KhulnaPopularAreaEng;
