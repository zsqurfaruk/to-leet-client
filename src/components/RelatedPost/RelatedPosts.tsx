/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";
import Slider from "react-slick";
import { useFilteredPosts } from "../API/Api";

const RelatedPosts = ({ type, areaName, cityName, id , division, district}: any) => {
  const lang = useSelector((state:any) => state.language.language);
  // const [getValue, setGetValue] = useState([]);
  const filterValue = {
    filterModalValue: type,
    homePopularAreaName: areaName,
    cityName: cityName,
    districtsName:district,
    divisionNameEng:division
  };
const limit = 10; // Set the desired data limit
const { data: getValue } = useFilteredPosts(limit, filterValue, id);
// useEffect(() => {
//     fetch(`http://localhost:5000/api/v1/product/filter?limit=${limit}`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       // authorization: `bearer ${Cookies.get("token")}`,
//     },
//     body: JSON.stringify(filterValue),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       const decryptedData = decryptFunction(data?.posts);
//       const parsedData = JSON.parse(decryptedData);
      
//       const result = parsedData?.filter((post: any) => {
//       return post._id !== id;
//       });
   
//       if (result !== getValue) {
//         setGetValue(result);
//       }
//     });
  
// }, [ ]);

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 4000,
  centerPadding: "50px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "50px",
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        centerPadding: "50px",
      },
    },
  ],
};
  return (
    <div
      className={
        getValue?.length > 0
          ? "lg:w-10/12 mx-auto bg-white mb-10 px-6 py-5 lg:-mt-10  shadow-none rounded-xl"
          : ""
      }
    >
      {getValue?.length > 0 && (
        <div className="border-b-2 border-warning mb-2 pb-1 text-warning font-semibold">
          {!lang ? (
            <h1 className="text-lg">Similar Ads:</h1>
          ) : (
            <h1>অনুরূপ বিজ্ঞাপনসমূহঃ</h1>
          )}
        </div>
      )}

      <div className="gap-5 py-10 ">
       <Slider {...settings}>
       {getValue?.map((post: any) => (
          <Post key={post._id} post={post}></Post>
        ))}
       </Slider>
      </div>
    </div>
  );
};

export default RelatedPosts;
