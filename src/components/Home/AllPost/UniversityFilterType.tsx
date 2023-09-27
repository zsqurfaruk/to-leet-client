import React, {   useContext, useRef, useState } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { FaFilter } from 'react-icons/fa';
import { encryptTransform } from "@/Encrypt/EncryptionTransform";
import { useRouter } from "next/router";
import Link from "next/link";
import { StateContext } from "@/Context/StateContext/StateContext";
import UniversityTyFilterModal from "../Banner/Modal/UniversityTypeFilterModal/UniversityTypeFilterModal";
 

const UniversityFilterType = () => {
  const {handleUniversityTypeFilterModal, setUniversityTypeFilter, setStoreUniFilterValue}:any = useContext(StateContext)
  const lang = useSelector((state: any) => state.language.language);
  
  // const universityTypeFilter = useSelector((state: RootState) => state['qv-utv'].value);
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
 const encodedName = (refreshParams[2])
 const decodedName = decodeURIComponent(encodedName);


  const CustomPrevArrow = (props: any) => (
    <button {...props} className={""}>
      <GrPrevious className="border border-warning h-10 text-warning"></GrPrevious>
    </button>
  );

  const CustomNextArrow = (props: any) => (
    <button {...props}>
      <GrNext className="border border-warning h-10 text-warning"></GrNext>
    </button>
  );
  
  const handleColorChange = (e: string) => {
    sessionStorage.setItem("qv-utf", encryptTransform(e))
  };

  const { filterPost } = useSelector((state: RootState) => state["qv-uv"]);
  // const activeButtonName = decryptTransform(sessionStorage.getItem("qv-utf"));



 const handleFilterType=(e:any)=>{
  if(e){
    setUniversityTypeFilter(true)
    handleUniversityTypeFilterModal()
    setStoreUniFilterValue(e)
  }
 }


  return (
    <div >
      <>
      <div  className="hidden lg:flex justify-center gap-x-5 mt-5">
        <div   className=" ">
          <Link href={`/beside-institute/${decodedName}`}
            onClick={() => handleColorChange("Total")}
            className={
              refreshParams[3] === undefined
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? (
              <span>Total: {filterPost?.length}</span>
            ) : (
              <span>
                মোটঃ{" "}
                {filterPost?.length > 0 &&
                  filterPost?.length
                    .toString()
                    .replace(/0/g, "০")
                    .replace(/1/g, "১")
                    .replace(/2/g, "২")
                    .replace(/3/g, "৩")
                    .replace(/4/g, "৪")
                    .replace(/5/g, "৫")
                    .replace(/6/g, "৬")
                    .replace(/7/g, "৭")
                    .replace(/8/g, "৮")
                    .replace(/9/g, "৯")}
              </span>
            )}{" "}
          </Link>
        </div>
        <div   >
          <Link href={`/beside-institute/${decodedName}/Bachelor-(Male)`}
            onClick={() => handleColorChange("Bachelor-(Male)")}
            className={
              refreshParams[3] === "Bachelor-(Male)"  
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Bachelor (Male)" : "ব্যাচেলর (ছেলে)"}{" "}
          </Link>
        </div>
        <div   >
          <Link href={`/beside-institute/${decodedName}/Bachelor-(Female`}
            onClick={() => handleColorChange("Bachelor-(Female)")}
            className={
              refreshParams[3] === "Bachelor-(Female" 
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Bachelor (Female)" : "ব্যাচেলর (মেয়ে)"}{" "}
          </Link>
        </div>
        <div >
          <Link href={`/beside-institute/${decodedName}/Mess-(Male)`}
            onClick={() => handleColorChange("Mess-(Male)")}
            className={
              refreshParams[3] === "Mess-(Male)"  
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Mess (Male)" : " মেস (ছেলে)"}{" "}
          </Link>
        </div>
        <div >
          <Link href={`/beside-institute/${decodedName}/Mess-(Female)`}
            onClick={() => handleColorChange("Mess-(Female)")}
            className={
              refreshParams[3] === "Mess-(Female)"  
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px]  border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Mess (Female)" : "মেস (মেয়ে)"}{" "}
          </Link>
        </div>
        <div  >
          <Link href={`/beside-institute/${decodedName}/Sublet-(Male)`}
            onClick={() => handleColorChange("Sublet-(Male)")}
            className={
              refreshParams[3] === "Sublet-(Male)"   
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Sublet (Male)" : "সাবলেট (ছেলে)"}{" "}
          </Link>
        </div>
        <div  >
          <Link href={`/beside-institute/${decodedName}/Sublet-(Female)`}
            onClick={() => handleColorChange("Sublet-(Female)")}
            className={
              refreshParams[3] === "Sublet-(Female)"  
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Sublet (Female)" : "সাবলেট (মেয়ে)"}{" "}
          </Link>
        </div>
        <div >
          <Link href={`/beside-institute/${decodedName}/Family`}
            onClick={() => handleColorChange("Family")}
            className={
              refreshParams[3] === "Family"  
                ? "bg-warning text-primary px-2 py-[2px] border border-warning rounded-sm text-center"
                : "bg-transparent text-gray-800 px-2 py-[2px] border border-warning rounded-sm text-center"
            }
          >
            {" "}
            {!lang ? "Family" : " পরিবার"}
          </Link>
        </div>
      </div>
       {/* dekstop end */}
       
      </>
      <div className="flex lg:hidden pt-4 pb-0">
       <div>
       {
      !lang ? <h1 onClick={()=>handleFilterType("filter")} className="flex gap-x-2 border-b-4 border-warning"><FaFilter className="mt-[4px] h-[13px] w-4 text-warning"/> <span className="text-sm">Filter By Type</span></h1> :<h1 onClick={()=>handleFilterType("filter")} className="flex gap-x-2 border-b-4 border-warning"><FaFilter className="mt-[4px] h-[14px] w-4 text-warning"/>  <span className="text-sm">ফিল্টার করুন</span> </h1>
     }
       </div>
      <UniversityTyFilterModal></UniversityTyFilterModal>
      </div>
    </div>
    
  );
};

export default UniversityFilterType;


