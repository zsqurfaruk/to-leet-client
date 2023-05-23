import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { cityOptionEng } from "@/components/Home/AllPost/FilterCityEng";
import { cityOptionBan } from "@/components/Home/AllPost/FilterCityDataBan";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import AllPost from "@/components/Home/AllPost/AllPost";
import { StateContext } from "@/Context/StateContext/StateContext";
import { GetServerSideProps, GetStaticProps } from "next";
import privateRoute from "@/routes/privateRoute";
import Head from "next/head";

function AllAds({ product }: any) {

  const lang = localStorage.getItem("lan");
  return (
    <>
      <Head>
        <title>To-Leet - All Ads</title>
      </Head>
      <section className="w-10/12 mx-auto bg-white px-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
          {product?.map((post: any) => (
            <AllPost key={post._id} post={post}></AllPost>
          ))}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://zsqur.to-leet.com/api/v1/product`);
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
export default privateRoute(AllAds);
