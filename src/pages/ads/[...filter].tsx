import { StateContext } from "@/Context/StateContext/StateContext";
import AllPost from "@/components/Home/AllPost/AllPost";
import FilterAllPosts from "@/components/Home/AllPost/FilterAllPosts";
import React, { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../../image/lf20_jkbuwuhk.json";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

const FilterPosts = () => {
  const { filterValue, cityName, divisionNameEng }: any =
    useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://zsqur.to-leet.com/api/v1/product/filter", {
        params: filterValue,
      })
      .then(function (response) {
        setFilterPost(response?.data?.posts);
      });
    
  }, [filterValue]);
  const lang = localStorage.getItem("lan");
  return (
    <>
    <Head>
    <title>To-Leet - Location - Type</title>
  </Head>
    <section className="w-10/12 mx-auto bg-white my-10 pb-10 px-5 rounded ">
      <div className="flex justify-around pt-10 text-secondary">
        {lang ? (
          <div>
            {cityName?.eng && (
              <h2>
                You have selected{" "}
                <span className="lowercase">{cityName?.eng}</span> city.
              </h2>
            )}
            {divisionNameEng.eng && (
              <h2>
                You have selected{" "}
                <span className="lowercase">{divisionNameEng?.eng}</span>{" "}
                division.
              </h2>
            )}
          </div>
        ) : (
          <div>
            {cityName?.ban && <h2>আপনি {cityName?.ban} শহর নির্বাচন করেছেন।</h2>}
            {divisionNameEng.ban && (
              <h2> আপনি {divisionNameEng?.ban} বিভাগ নির্বাচন করেছেন।</h2>
            )}
          </div>
        )}
      </div>
      <div className="grid gri md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {filterPost?.map((post: any) => (
          <FilterAllPosts key={post._id} post={post}></FilterAllPosts>
        ))}
      </div>

      <div className="flex justify-center">
        {filterPost?.length === 0 && (
          <div>
            <Lottie
              className="h-52 w-52"
              animationData={lotti}
              loop={true}
            ></Lottie>
            {lang ? (
              <h1 className="text-4xl text-center mb-10">No data found.</h1>
            ) : (
              <h1 className="text-2xl -ml-7">এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        )}
      </div>
    </section></>
  );
};
 
export default FilterPosts;
