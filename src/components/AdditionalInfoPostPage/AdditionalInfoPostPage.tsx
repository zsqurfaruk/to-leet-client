import { PostStateContext } from '@/Context/PostStateContext/PostStateContext';
import { useRouter } from 'next/router';
import React,{useContext} from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import Cookies from 'js-cookie';

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
            {!lang ? <h1>Fill In The Details</h1> : <h1>বিস্তারিত তথ্য দিন</h1>}
            <h1 className="cursor-pointer flex" onClick={handlePrevious}>
              <MdOutlineLocationOn className="text-accent h-6 w-6"></MdOutlineLocationOn>
              {!lang ? "Change?" : "পরিবর্তন?"}
            </h1>
          </div>
          <hr className="mt-3 flex lg:hidden" />
          <div className="flex justify-between py-5">
            <h1 className="hidden lg:flex">
              {" "}
              {!lang ? (
                <h3>Fill In The Details</h3>
              ) : (
                <h3>বিস্তারিত তথ্য দিন</h3>
              )}
            </h1>
            <h1
              className="cursor-pointer hidden lg:flex"
              onClick={handlePrevious}
            >
              <MdOutlineLocationOn className="text-accent h-6 w-6"></MdOutlineLocationOn>
              {!lang ? "Change?" : "পরিবর্তন?"}
            </h1>
            <div>
              {postDistrictsName?.eng ? (
                <div className="flex gap-10 lg:gap-5">
                  <h1>
                    {!lang ? (
                      <span>Division: {postDivisionNameEng?.eng}</span>
                    ) : (
                      <span> বিভাগ: {postDivisionNameEng?.ban}</span>
                    )}
                  </h1>
                  <h1>
                    {!lang ? (
                      <span>District: {postDistrictsName?.eng} </span>
                    ) : (
                      <span>জেলা : {postDistrictsName?.ban} </span>
                    )}
                  </h1>
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
          <hr className="text-black" />
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