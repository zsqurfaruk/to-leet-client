import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { cityOptionEng } from "@/components/Home/AllPost/FilterCityEng";
import { cityOptionBan } from "@/components/Home/AllPost/FilterCityDataBan";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import AllPost from "@/components/Home/AllPost/AllPost";
import { StateContext } from "@/Context/StateContext/StateContext";
import { GetStaticProps } from "next";

function AllAds({product}:any) {
  // const { counterPosts, handleFilter }: any = useContext(APIContext);
  // const { filterValue }: any = useContext(StateContext);
  // const { filterCity, setFilterCity }: any = useContext(FilterContext);

  // if (filterCity?.name === "eng") {
  //   const newName = {
  //     eng: filterCity?.label,
  //     ban: filterCity?.value,
  //   };
  //   setFilterCity(newName);
  // } else if (filterCity?.name === "ban") {
  //   const newName = {
  //     eng: filterCity?.value,
  //     ban: filterCity?.label,
  //   };
  //   setFilterCity(newName);
  // }

  // useEffect(()=>{
  //   fetch('http://localhost:5000/api/v1/product')
  //   .then(res=>res.json())
  //   .then(data=>setCounterPosts(data))
  // },[])

  const lang = localStorage.getItem("lan");
  return (
    <section className="w-10/12 mx-auto bg-white px-10">
      {/* <div className="basis-1/4 lg:border-r-2 border-accent ">
        <div className="pt-10 mr-5">
          <h1>Filter:</h1>
          {lang ? (
            <Select
              placeholder="Search"
              isSearchable
              options={cityOptionEng}
              onChange={setFilterCity}
              className="bg-primary border-none text-sm h-4 text-black font-medium"
            />
          ) : (
            <Select
              placeholder="অনুসন্ধান"
              isSearchable
              options={cityOptionBan}
              onChange={setFilterCity}
              className="bg-primary border-none text-sm h-4 text-black font-medium"
            />
          )}
        </div>
      </div> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {product?.map((post: any) => (
          <AllPost key={post._id} post={post}></AllPost>
        ))}
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/product `);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product: data,
    },
  };
};
export default AllAds;
