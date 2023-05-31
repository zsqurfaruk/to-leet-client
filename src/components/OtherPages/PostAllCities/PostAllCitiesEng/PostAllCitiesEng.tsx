import React, { useContext } from "react";
import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";

const PostAllCityEng = () => {
  const { setPostCityNameEng }: any = useContext(PostStateContext);
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4  gap-5 gap-y-3 text-black text-sm md:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => setPostCityNameEng({ eng: "Dhaka", ban: "ঢাকা" })}
              // name="Dhaka"
            />
            {!lang ? (
              <span className="-mt-[2px]"> Dhaka City</span>
            ) : (
              <span className="-mt-[2px]"> ঢাকা শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostCityNameEng({ eng: "Chittagong", ban: "চট্টগ্রাম" })
              }
              // name="Chittagong"
            />
            {!lang ? (
              <span className="-mt-[2px]"> Chittagong City</span>
            ) : (
              <span className="-mt-[2px]"> চট্টগ্রাম শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostCityNameEng({ eng: "Rajshahi", ban: "রাজশাহী" })
              }
              // name="Rajshahi"
            />
            {!lang ? (
              <span className="-mt-[2px]"> Rajshahi City</span>
            ) : (
              <span className="-mt-[2px]"> রাজশাহী শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={(e: any) =>
                setPostCityNameEng({ eng: "Sylhet", ban: "সিলেট" })
              }
              // name="Sylhet"
            />
            {!lang ? (
              <span className="-mt-[2px]"> Sylhet City</span>
            ) : (
              <span className="-mt-[2px]"> সিলেট শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostCityNameEng({ eng: "Barisal", ban: "বরিশাল" })
              }
              // name="Barisal"
            />
            {!lang ? (
              <span className="-mt-[2px]"> Barisal City</span>
            ) : (
              <span className="-mt-[2px]"> বরিশাল শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostCityNameEng({ eng: "Khulna", ban: "খুলনা" })
              }
            
            />
            {!lang ? (
              <span className="-mt-[2px]"> Khulna City</span>
            ) : (
              <span className="-mt-[2px]"> খুলনা শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostCityNameEng({ eng: "Rangpur", ban: "রংপুর" })
              }
             
            />
            {!lang ? (
              <span className="-mt-[2px]"> Rangpur City</span>
            ) : (
              <span className="-mt-[2px]"> রংপুর শহর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostCityNameEng({ eng: "Mymensingh", ban: "ময়মনসিংহ" })
              }
             
            />
            {!lang ? (
              <span className="-mt-[2px]"> Mymensingh City</span>
            ) : (
              <span className="-mt-[2px]"> ময়মনসিংহ শহর</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PostAllCityEng;
