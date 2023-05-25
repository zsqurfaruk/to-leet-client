import React,{useEffect, useState}  from "react"; 
import AllPost from "@/components/Home/AllPost/AllPost";
import {  GetStaticProps } from "next";
import privateRoute from "@/routes/privateRoute";
import Head from "next/head";
import Loading from "@/components/Loading/Loading";

function AllAds( ) {
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct]= useState([])
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://zsqur.to-leet.com/api/v1/product`)
      .then((res) => res.json())
      .then((data) => {setProduct(data)
        setIsLoading(false)});
  }, []);
  if (isLoading) return <p className="text-center w-full h-full mt-10 py-40">Loading...</p>;
  if (!product) return <p>No data found.</p>;
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


// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`https://zsqur.to-leet.com/api/v1/product`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       product: data,
//     },
//   };
// };
export default privateRoute(AllAds);
