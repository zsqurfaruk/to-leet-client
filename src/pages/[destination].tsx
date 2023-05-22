/* eslint-disable react-hooks/rules-of-hooks */
import Products from "@/components/Products/Products";
import { GetServerSideProps } from "next";
import React, { useState, useContext } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import { StateContext } from "@/Context/StateContext/StateContext";
import Head from "next/head";
const ShowAllPost = ({ products }: any) => {
  const { setTypeCount }: any = useContext(StateContext);
  setTypeCount(products);
  const [deleteAndFilterPost, setDeleteAndFilterPost] = useState(products);
  const handleDelete = async (id: any) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const res = await fetch(`http://localhost:5000/api/v1/product/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.message === "success") {
        setDeleteAndFilterPost(
          deleteAndFilterPost?.filter(
            (deletedPost: any) => deletedPost._id !== id
          )
        );
      }
    }
  };
 const lang = localStorage.getItem("lan")
  return (
    <>
    <Head>
    <title>To-Leet - Filter by Rent Type</title>
  </Head>
    <section className="my-20">
      <div className="bg-white px-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded">
        {deleteAndFilterPost.length > 0 &&
          deleteAndFilterPost?.map((product: any) => (
            <Products
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></Products>
          ))}
      </div>
      {deleteAndFilterPost.length === 0 && (
        <div className="flex justify-center">
          <div>
            <Lottie  className="h-52 w-52" animationData={lotti} loop={true}></Lottie>
            {lang ? (
              <h1 className="text-4xl text-center mb-10">No data found.</h1>
            ) : (
              <h1>এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        </div>
      )}
    </section></>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/product/rentType/${params.destination}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
export default ShowAllPost;
