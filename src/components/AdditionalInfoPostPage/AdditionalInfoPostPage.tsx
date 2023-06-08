import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import Cookies from "js-cookie";

const AdditionalInfoPostPage = () => {
  const {
    postCityNameEng,
    modalValue,
    setPostOpenModal,
    setPostCityNameEng,
    getPostPopularAreaName,
    setGetPostPopularAreaName,
    postDistrictsName,
    postDivisionNameEng,
    setPostDivisionNameEng,
  }: any = useContext(PostStateContext);
  const router = useRouter();
  const handlePrevious = () => {
    setGetPostPopularAreaName({});
    setPostCityNameEng({});
    setPostDivisionNameEng({});
    setPostOpenModal(false);
    router.push("/add-post");
  };
  const lang = Cookies.get("lan");
  return (
    <div>
      <div>
        <div className="flex justify-between lg:hidden">
          {!lang ? <h2>Fill In The Details</h2> : <h2>বিস্তারিত তথ্য দিন</h2>}
          <h1 className="cursor-pointer flex" onClick={handlePrevious}>
            <MdOutlineLocationOn className="text-warning h-6 w-6"></MdOutlineLocationOn>
            {!lang ? "Change?" : "পরিবর্তন?"}
          </h1>
        </div>
        <hr className="mt-3 flex lg:hidden" />
        <div className="flex justify-between py-5">
          <h1 className="hidden lg:flex">
            {!lang ? <span>Fill In The Details</span> : <span>বিস্তারিত তথ্য দিন</span>}
          </h1>
          <h1
            className="cursor-pointer hidden lg:flex"
            onClick={handlePrevious}
          >
            <MdOutlineLocationOn className="text-warning h-6 w-6"></MdOutlineLocationOn>
            {!lang ? "Change?" : "পরিবর্তন?"}
          </h1>
          <div>
            {postDistrictsName?.eng ? (
              <div className="flex gap-10 lg:gap-5">
                <>
                  {!lang ? (
                    <span>Division: {postDivisionNameEng?.eng}</span>
                  ) : (
                    <span> বিভাগ: {postDivisionNameEng?.ban}</span>
                  )}
                </>
                <>
                  {!lang ? (
                    <span>District: {postDistrictsName?.eng} </span>
                  ) : (
                    <span>জেলা : {postDistrictsName?.ban} </span>
                  )}
                </>
              </div>
            ) : (
              <div className="flex gap-10 lg:gap-5">
                {!lang ? (
                  <span>City: {postCityNameEng?.eng}</span>
                ) : (
                  <span>শহর: {postCityNameEng?.ban}</span>
                )}
                {!lang ? (
                  <span>Area: {getPostPopularAreaName?.eng} </span>
                ) : (
                  <span> এলাকা: {getPostPopularAreaName?.ban} </span>
                )}
              </div>
            )}
          </div>
          {!lang ? (
            <h1>{modalValue?.eng} For Rent</h1>
          ) : (
            <h1>ধরনঃ {modalValue?.ban}</h1>
          )}
        </div>
        <hr className="text-gray-700" />
        {/* {!lang ? (
            <h1 className="flex justify-end">See our posting rules</h1>
          ) : (
            <h1 className="flex justify-end">পোস্ট করার নিয়মাবলী দেখুনঃ</h1>
          )} */}
      </div>
    </div>
  );
};

export default AdditionalInfoPostPage;
