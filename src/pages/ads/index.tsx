import React, { useEffect, useState, useContext } from "react";
import AllPost from "@/components/Home/AllPost/AllPost";
import { GetStaticProps } from "next";
import PrivateRoute from "@/routes/privateRoute";
import Head from "next/head";
import Loading from "@/components/Loading/Loading";
import { APIContext } from "@/Context/ApiContext/ApiContext";

function AllAds() {
  const { counterPosts, allDataLoading }: any = useContext(APIContext);
  return (
    <>
      <Head>
        <title>To Leet - All Ads</title>
      </Head>
      <section className="lg:my-10 lg:w-10/12 mx-auto bg-white px-10 rounded">
        {allDataLoading ? (
          <h2 className=" text-center w-full mt-10 py-24 text-xl">Loading...</h2>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
            {counterPosts?.map((post: any) => (
              <AllPost key={post._id} post={post}></AllPost>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default AllAds;
