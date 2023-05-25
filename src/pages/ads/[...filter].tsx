import { StateContext } from "@/Context/StateContext/StateContext";
import AllPost from "@/components/Home/AllPost/AllPost";
import FilterAllPosts from "@/components/Home/AllPost/FilterAllPosts";
import React, { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../../image/lf20_jkbuwuhk.json";
import axios from "axios";
import Head from "next/head";
import Loading from "@/components/Loading/Loading";

const FilterPosts = () => {
  const { filterValue, cityName, divisionNameEng }: any =
    useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
  const [loading , setLoading] = useState(false)
  // useEffect(() => {
  //   axios
  //     .get("https://to-leet-server-farukphero.vercel.app/api/v1/product/filter", {
  //       params: filterValue,
  //     })
  //     .then(function (response) {
  //       setFilterPost(response?.data?.posts);
  //     });
    
  // }, [filterValue]);
  useEffect(() => {
    setLoading(true)
      fetch("http://localhost:5000/api/v1/product/filter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(filterValue),
      })
      .then((res) => res.json())
      .then((data) => {setFilterPost(data?.posts)
      setLoading(false)});
    
  }, [filterValue]);
  const lang = localStorage.getItem("lan");
  return (
    <>
    <Head>
    <title>To-Leet - Location - Type</title>
  </Head>
    
     {
      loading ? <p className="text-center w-full py-40">Loading...</p> : <section className="lg:w-10/12 mx-auto bg-white lg:my-10 pb-10 px-5 rounded ">
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
      {
        loading ? "Loading..." : <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {filterPost?.map((post: any) => (
          <FilterAllPosts key={post._id} post={post}></FilterAllPosts>
        ))}
      </div>
      }

      <div className="flex justify-center">
        {filterPost?.length === 0 && (
          <div>
            <Lottie
              className="h-52 w-52 ml-10"
              animationData={lotti}
              loop={true}
            ></Lottie>
            {lang ? (
              <h1 className="text-4xl text-center mb-10 ml-5">No data found.</h1>
            ) : (
              <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        )}
      </div>
    </section>
     }
    </>
  );
};
 
export default FilterPosts;
