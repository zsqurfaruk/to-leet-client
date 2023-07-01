import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Cookies from 'js-cookie';
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

const PostRajDistrictsEng = () => {
  const { postDistrictsName, setPostDistrictsName,setPostOpenModal }: any = useContext(PostStateContext);
  // const {lang}:any = useContext(FilterContext)
  if (postDistrictsName?.eng) {
    setPostOpenModal(true);
  }
  const lang = useSelector((state:any) => state.language.language); 
  return (
    <div>
      {" "}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        {" "}
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Rajshahi", ban: "রাজশাহী" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Rajshahi</span>
            ) : (
              <span className="-mt-[2px]">রাজশাহী</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Sirajganj", ban: "সিরাজগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Sirajganj</span>
            ) : (
              <span className="-mt-[2px]">সিরাজগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Pabna", ban: "পাবনা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Pabna</span>
            ) : (
              <span className="-mt-[2px]">পাবনা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Bogra", ban: "বগুড়া" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Bogra</span>
            ) : (
              <span className="-mt-[2px]">বগুড়া</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Joypurhat", ban: "জয়পুরহাট" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Joypurhat</span>
            ) : (
              <span className="-mt-[2px]">জয়পুরহাট</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Naogaon", ban: "নওগাঁ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Naogaon</span>
            ) : (
              <span className="-mt-[2px]">নওগাঁ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Natore", ban: "নাটোর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Natore</span>
            ) : (
              <span className="-mt-[2px]">নাটোর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({
                  eng: "Chapainawabganj",
                  ban: "চাঁপাইনবাবগঞ্জ",
                })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Chapainawabganj</span>
            ) : (
              <span className="-mt-[2px]">চাঁপাইনবাবগঞ্জ</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PostRajDistrictsEng;
