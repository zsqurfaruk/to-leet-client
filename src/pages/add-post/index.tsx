import React, { useContext } from "react";
import privateRoute from "@/routes/privateRoute";
import PostAllCityEng from "@/components/OtherPages/PostAllCities/PostAllCitiesEng/PostAllCitiesEng";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import PostAllDivisionEng from "@/components/OtherPages/PostAllDivision/PostAllDivisionEng/PostAllDivisionEng";
import PostAreaModalEng from "@/components/Home/Banner/Modal/PostAreaModalEng";
import DhaPopularArea from "@/components/OtherPages/PostPopularArea/DhaPopularArea/DhaPopularArea";
import RajPopularAreaEng from "@/components/OtherPages/PostPopularArea/RajPopularArea/RajPopularAreaEng";
import ChittPopularAreaEng from "@/components/OtherPages/PostPopularArea/ChittPopularArea/ChittPopularAreaEng";
import BariPopularAreaEng from "@/components/OtherPages/PostPopularArea/BariPopularArea/BariPopularAreaEng";
import KhulnaPopularAreaEng from "@/components/OtherPages/PostPopularArea/KhulnaPopularArea/KhulnaPopularAreaEng";
import RangPopularAreaEng from "@/components/OtherPages/PostPopularArea/RangPopularArea/RangPopularAreaEng";
import MymPopularAreaEng from "@/components/OtherPages/PostPopularArea/MymPopularArea/MymPopularAreaEng";
import SylPopularAreaEng from "@/components/OtherPages/PostPopularArea/SylPopularArea/SylPopularAreaEng";
import PostDhaDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostDhaDistricts/PostDhaDistrictsEng";
import PostRajDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostRajDistricts/PostRajDistrictsEng";
import PostSylDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostSylDistricts/PostSylDistrictsEng";
import PostChittDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostChittDistricts/PostChittDistrictsEng";
import PostBariDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostBariDistricts/PostBariDistrictsEng";
import PostKhulnaDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostKhulnaDistricts/PostKhulnaDistrictsEng";
import PostRangDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostRangDistricts/PostRangDistrictsEng";
import PostMymDistrictsEng from "@/components/OtherPages/PostAllDivision/PostAllDistricts/PostMymDistricts/PostMymDistrictsEng";
import Head from "next/head";
import Cookies from 'js-cookie';

const AddPost = () => {
 
  const {
    postCityNameEng,
    setPostCityNameEng,
    setPostDivisionNameEng,
    postDivisionNameEng,
  }: any = useContext(PostStateContext);

 
  const handlePrevious = () => {
    setPostCityNameEng({});
    setPostDivisionNameEng({})
  };
  const lang = Cookies.get("lan");
  return (
   <>
    <Head>
        <title>To Leet - Add Post</title>
      </Head>
    <section>
      <PostAreaModalEng></PostAreaModalEng>
      <div className="lg:w-10/12 md:w-10/12 md:mx-auto bg-white p-5 lg:p-14 lg:my-16 rounded">
        <div className="lg:w-10/12 mx-auto">
        {postCityNameEng?.eng && (
         <div>
           <h1
            onClick={handlePrevious}
            className="text-warning text-sm mb-5 cursor-pointer hover:underline"
          >
            {!lang ? "Change city?" : "শহর পরিবর্তন?"}
          </h1>
          <h1  className="text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
            {
              !lang ? <span>Popular areas of {postCityNameEng.eng}:</span>: <span className="text-xl">{postCityNameEng?.ban} এর জনপ্রিয় এলাকাসমূহঃ</span>
            }
          </h1>
         </div>
        )}
        <div className={postCityNameEng?.eng && "hidden"}>
          {!lang ? (
            <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
              Select your city.
            </h1>
          ) : (
            <h1 className="text-xl mb-5 border-l-4 border-b-4 border-warning text-gray-700 pl-2">
              শহর নির্বাচন করুন।
            </h1>
          )}
        </div>
        <div>
          <div>
            {!postCityNameEng?.eng && <PostAllCityEng></PostAllCityEng>}
          </div>
          
          {postCityNameEng?.eng === "Dhaka" && (
            <DhaPopularArea></DhaPopularArea>
          )}
          {postCityNameEng?.eng === "Rajshahi" && (
            <RajPopularAreaEng></RajPopularAreaEng>
          )}
          {postCityNameEng?.eng === "Sylhet" && (
            <SylPopularAreaEng></SylPopularAreaEng>
          )}
          {postCityNameEng?.eng === "Chittagong" && (
            <ChittPopularAreaEng></ChittPopularAreaEng>
          )}
          {postCityNameEng?.eng === "Barisal" && (
            <BariPopularAreaEng></BariPopularAreaEng>
          )}
          {postCityNameEng?.eng === "Khulna" && (
            <KhulnaPopularAreaEng></KhulnaPopularAreaEng>
          )}
          {postCityNameEng?.eng === "Rangpur" && (
            <RangPopularAreaEng></RangPopularAreaEng>
          )}
          {postCityNameEng?.eng === "Mymensingh" && (
            <MymPopularAreaEng></MymPopularAreaEng>
          )}
        </div>
        </div>
        <div className="mt-20 lg:w-10/12 mx-auto" >
        {postDivisionNameEng?.eng && (
         <div>
           <h1
            onClick={handlePrevious}
            className="text-warning text-sm mb-5 cursor-pointer hover:underline"
          >
            {!lang ? "Change division?" : "বিভাগ পরিবর্তন?"}
          </h1>
          <h1  className="text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
            {
              !lang ? <span>Districts of {postDivisionNameEng.eng}:</span>: <span className="text-xl">{postDivisionNameEng?.ban} এর জেলাসমুহঃ</span>
            }
          </h1>
         </div>
        )}
          <div
            className={postDivisionNameEng?.eng && "hidden"}
          >
            {!lang ? (
              <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
                Select your Division.
              </h1>
            ) : (
              <h1 className="text-xl mb-5 border-l-4 border-b-4 border-warning text-gray-700 pl-2">
                বিভাগ নির্বাচন করুন।
              </h1>
            )}
          </div>
          <div className="lg:m-4">
            <div 
            // className={lang && postDivisionNameBan && "hidden"}
            >
              {!postDivisionNameEng?.eng && (
                <PostAllDivisionEng></PostAllDivisionEng>
              )}
            </div>
            <div className="lg:-ml-4">
            {postDivisionNameEng?.eng === "Dhaka" && (
             <PostDhaDistrictsEng></PostDhaDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Rajshahi" && (
             <PostRajDistrictsEng></PostRajDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Sylhet" && (
             <PostSylDistrictsEng></PostSylDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Chittagong" && (
             <PostChittDistrictsEng></PostChittDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Barisal" && (
            <PostBariDistrictsEng></PostBariDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Khulna" && (
             <PostKhulnaDistrictsEng></PostKhulnaDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Rangpur" && (
             <PostRangDistrictsEng></PostRangDistrictsEng>
          )}
          {postDivisionNameEng?.eng === "Mymensingh" && (
             <PostMymDistrictsEng></PostMymDistrictsEng>
          )}
            </div>
            
          </div>
         
        </div>
      </div>
    </section></>
  );
};

export default privateRoute(AddPost);
