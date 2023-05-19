import { StateContext } from "@/Context/StateContext/StateContext";
import AllPost from "@/components/Home/AllPost/AllPost";
import FilterAllPosts from "@/components/Home/AllPost/FilterAllPosts";
import React, { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../../image/lf20_jkbuwuhk.json";
import axios from "axios";

const FilterPosts = () => {
  const { filterValue, cityName, divisionNameEng, filterModalValue }: any =
    useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
    // useEffect(() => {
    //   fetch(`http://localhost:5000/api/v1/product/filter`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(filterValue),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setFilterPost(data?.posts));
    // }, [filterValue]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/api/v1/product")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const result = data.filter((post:any)=> post.type === filterModalValue)
  //         console.log(result)
  //       });
  //   }, [cityName, filterModalValue, filterValue]);

//   axios
//     .get("http://localhost:5000/api/v1/product/filter", {
//       params: {
//         cityName,
//         divisionNameEng,
//         filterModalValue,
//       },
//     })
//     .then(function (response) {
//       console.log(response.data);
//     });

//   console.log(filterPost);

// const requestOptions = {
//     method: 'GET',
//     // headers: myHeaders,
//     body: "formdata",
//     redirect: 'follow'
//   };
  
//   fetch("http://localhost:5000/api/v1/product/filter", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
  const lang = localStorage.getItem("lan");
  return (
    <section className="w-10/12 mx-auto bg-white my-10 pb-10 px-5 rounded ">
      <div className="flex justify-around pt-10 text-secondary">
        {lang ? (
          <div>
            {cityName.eng && <h2>You select {cityName?.eng} city.</h2>}
            {divisionNameEng.eng && (
              <h2>You select {divisionNameEng.eng} division.</h2>
            )}
          </div>
        ) : (
          <div>
            {cityName.ban && <h2>আপনি {cityName?.ban} শহর নির্বাচন করেছেন।</h2>}
            {divisionNameEng.ban && (
              <h2> আপনি {divisionNameEng.ban} বিভাগ নির্বাচন করেছেন।</h2>
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
        {filterPost.length === 0 && (
          <div>
            <Lottie
              className="h-52 w-52"
              animationData={lotti}
              loop={true}
            ></Lottie>
            {lang ? (
              <h1 className="text-4xl text-center mb-10">No data found.</h1>
            ) : (
              <h1>এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterPosts;
