import React  from "react"; 
import AllPost from "@/components/Home/AllPost/AllPost";
import {  GetStaticProps } from "next";
import privateRoute from "@/routes/privateRoute";
import Head from "next/head";

function AllAds({ product }: any) {

  return (
    <>
      <Head>
        <title>To-Leet - All Ads</title>
      </Head>
      <section className="lg:my-10 lg:w-10/12 mx-auto bg-white px-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
          {product?.map((post: any) => (
            <AllPost key={post._id} post={post}></AllPost>
          ))}
        </div>
      </section>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/product`);
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
