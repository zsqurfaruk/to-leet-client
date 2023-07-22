/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const RelatedPosts = ({ type, areaName, cityName, id , division, district}: any) => {
  const lang = useSelector((state:any) => state.language.language);
  const [getValue, setGetValue] = useState([]);
  const filterValue = {
    filterModalValue: type,
    homePopularAreaName: areaName,
    cityName: cityName,
    districtsName:district,
    divisionNameEng:division
  };
const limit = 5; // Set the desired data limit

useEffect(() => {
    fetch(`https://zsqur.quickvara.com/api/v1/product/filter?limit=${limit}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      // authorization: `bearer ${Cookies.get("token")}`,
    },
    body: JSON.stringify(filterValue),
  })
    .then((res) => res.json())
    .then((data) => {
      const result = data?.posts?.filter((post: any) => {
        return post._id !== id;
      });
      if (JSON.stringify(result) !== JSON.stringify(getValue)) {
        setGetValue(result);
      }
    });
  
}, [filterValue]);


  return (
    <div
      className={
        getValue?.length > 0
          ? "lg:w-10/12 mx-auto bg-white mb-10 px-7 py-5 lg:-mt-10  shadow-none rounded-xl"
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

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
        {getValue?.map((post: any) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
