import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";

const PostKhulnaDistrictsEng = () => {
  const { postDistrictsName, setPostDistrictsName,setPostOpenModal }: any = useContext(PostStateContext);
  if (postDistrictsName?.eng) {
    setPostOpenModal(true);
  }
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Khulna", ban: "খুলনা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Khulna</span>
            ) : (
              <span className="-mt-[2px]">খুলনা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Bagerhat", ban: "বাগেরহাট" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Bagerhat</span>
            ) : (
              <span className="-mt-[2px]">বাগেরহাট</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Chuadanga", ban: "চুয়াডাঙ্গা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Chuadanga</span>
            ) : (
              <span className="-mt-[2px]">চুয়াডাঙ্গা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Jessore", ban: "যশোর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Jessore</span>
            ) : (
              <span className="-mt-[2px]">যশোর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Jhenaidah", ban: "ঝিনাইদহ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Jhenaidah</span>
            ) : (
              <span className="-mt-[2px]">ঝিনাইদহ</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Kushtia", ban: "কুষ্টিয়া" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Kushtia</span>
            ) : (
              <span className="-mt-[2px]">কুষ্টিয়া</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Magura", ban: "মাগুরা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Magura</span>
            ) : (
              <span className="-mt-[2px]">মাগুরা</span>
            )}
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Meherpur", ban: "মেহেরপুর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Meherpur</span>
            ) : (
              <span className="-mt-[2px]">মেহেরপুর</span>
            )}
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Narail", ban: "নড়াইল" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Narail</span>
            ) : (
              <span className="-mt-[2px]">নড়াইল</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Satkhira", ban: "সাতক্ষীরা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Satkhira</span>
            ) : (
              <span className="-mt-[2px]">সাতক্ষীরা</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PostKhulnaDistrictsEng;
