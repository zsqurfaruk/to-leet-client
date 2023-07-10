import React, { useContext } from "react";
import PrivateRoute from "@/routes/privateRoute";
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
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

const AddPost = () => {
 
  const {
    postCityNameEng,
    setPostCityNameEng,
    setPostDivisionNameEng,
    postDivisionNameEng,
  }: any = useContext(PostStateContext);
  // const {lang}:any = useContext(FilterContext)
 
  const handlePrevious = () => {
    setPostCityNameEng({});
    setPostDivisionNameEng({})
  };
  const lang = useSelector((state:any) => state.language.language);
  return (
   <>
    <Head>
        <title>QuickVara - Add Post</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, to-let, quickvara, toleet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Add Post | toleet | Tolet | Basa Vara | quickvara | house rent | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="QuickVara - Add Post | toleet | Property Tolet | Basa Vara | quickvara | house rent | rent" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. quickvara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To-Let, To Let, tolet, ToLet, to let, to-let, quickvara, toleet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Add Post | toleet | Property Tolet | Basa Vara | quickvara | house rent | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
    <section>
      <PostAreaModalEng></PostAreaModalEng>
      <div className="lg:w-10/12 md:w-10/12 md:mx-auto bg-white p-5 lg:p-14 lg:my-16 rounded">
       {
        !postDivisionNameEng?.eng &&  <div className="lg:w-10/12 mx-auto">
        {postCityNameEng?.eng && (
         <div>
          {
            !lang ? <h1 className="text-center mb-5  text-xl lg:text-2xl border-b-2 border-warning lg:w-5/12 mx-auto"> You have selected <span className="lowercase text-warning">{postCityNameEng?.eng}</span> city.</h1>: <h1 className="text-center mb-5  lg:text-xl border-b-2 border-warning lg:w-5/12 mx-auto"> আপনি <span className="lowercase text-warning">{postCityNameEng?.ban}</span> শহর নির্বাচন করেছেন।</h1>
          }
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
        <div className={postCityNameEng?.eng ? "pb-6 lg:pb-0" : ""}>
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
       }
        {
          !postCityNameEng?.eng && <div className={postDivisionNameEng?.eng ? "mt-2 lg:w-10/12 mx-auto" : "mt-20 lg:w-10/12 mx-auto"} >
          {postDivisionNameEng?.eng && (
           <div>
            {
            !lang ? <h1 className="text-center mb-5 lg:mb-10 text-xl lg:text-2xl border-b-2 border-warning lg:w-6/12 mx-auto"> You have selected <span className="lowercase text-warning">{postDivisionNameEng?.eng}</span> division.</h1>: <h1 className="text-center mb-5 lg:mb-10 lg:text-xl border-b-2 border-warning lg:w-6/12 mx-auto"> আপনি <span className="lowercase text-warning">{postDivisionNameEng?.ban}</span> বিভাগ নির্বাচন করেছেন।</h1>
          }
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
        }
      </div>
    </section></>
  );
};

export default PrivateRoute(AddPost);
