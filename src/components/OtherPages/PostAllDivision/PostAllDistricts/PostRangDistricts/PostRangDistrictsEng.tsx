import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

const PostRangDistrictsEng = () => {
  const { postDistrictsName, setPostDistrictsName,setPostOpenModal }: any = useContext(PostStateContext);
  if (postDistrictsName?.eng) {
    setPostOpenModal(true);
  }
  const lang = useSelector((state:any) => state.language.language); 
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
      <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Dinajpur", ban: "দিনাজপুর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Dinajpur</span>
            ) : (
              <span className="-mt-[2px]">দিনাজপুর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Gaibandha", ban: "গাইবান্ধা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Gaibandha</span>
            ) : (
              <span className="-mt-[2px]">গাইবান্ধা</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Kurigram", ban: "কুড়িগ্রাম" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Kurigram</span>
            ) : (
              <span className="-mt-[2px]">কুড়িগ্রাম</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Lalmonirhat", ban: "লালমনিরহাট" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Lalmonirhat</span>
            ) : (
              <span className="-mt-[2px]">লালমনিরহাট</span>
            )}
          </label>
        </li>
        
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Nilphamari", ban: "নীলফামারী" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Nilphamari</span>
            ) : (
              <span className="-mt-[2px]">নীলফামারী</span>
            )}
          </label>
        </li>
      <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Panchagarh", ban: "পঞ্চগড়" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Panchagarh</span>
            ) : (
              <span className="-mt-[2px]">পঞ্চগড়</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Rangpur", ban: "রংপুর" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Rangpur</span>
            ) : (
              <span className="-mt-[2px]">রংপুর</span>
            )}
          </label>
        </li>
       
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                setPostDistrictsName({ eng: "Thakurgaon", ban: "ঠাকুরগাঁও" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Thakurgaon</span>
            ) : (
              <span className="-mt-[2px]">ঠাকুরগাঁও</span>
            )}
          </label>
        </li>
        

       
        
        
       
      </ul>
    </div>
  );
};

export default PostRangDistrictsEng;
