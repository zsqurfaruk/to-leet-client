import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const ChittPopularAreaEng = () => {
  const { getPostPopularAreaName, setGetPostPopularAreaName, setPostOpenModal }: any =
    useContext(PostStateContext);
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
                  setGetPostPopularAreaName({ eng: "Agrabad", ban: "আগ্রাবাদ" })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Agrabad</span>
              ) : (
                <span className="-mt-[2px]"> আগ্রাবাদ</span>
              )}
            </label>{" "}
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Chawkbazar", ban: "চকবাজার" })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Chawkbazar</span>
              ) : (
                <span className="-mt-[2px]"> চকবাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Kotwali", ban: "কোতয়ালী" })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Kotwali</span>
              ) : (
                <span className="-mt-[2px]"> কোতয়ালী</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Halishahar", ban: "হালিশহর" })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Halishahar</span>
              ) : (
                <span className="-mt-[2px]"> হালিশহর</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Nasirabad", ban: "নাসিরাবাদ" })
                }
              />
              {lang ? (
                <span className="-mt-[2px]"> Nasirabad</span>
              ) : (
                <span className="-mt-[2px]"> নাসিরাবাদ</span>
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
              {lang ? (
                <span className="-mt-[2px]"> Select others</span>
              ) : (
                <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              )}
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChittPopularAreaEng;
