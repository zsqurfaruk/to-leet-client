/* eslint-disable react-hooks/rules-of-hooks */
import Products from "@/components/Products/Products";
import { GetServerSideProps } from "next";
import React, { useState, useContext, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import { StateContext } from "@/Context/StateContext/StateContext";
import Head from "next/head";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const ShowAllPost = ({ products,loading }: any) => {
  const {lang }: any = useContext(FilterContext);
  const { setTypeCount,openModalValue }: any = useContext(StateContext);
  setTypeCount(products);
  const [deleteAndFilterPost, setDeleteAndFilterPost] = useState(products);
  const handleDelete = async (id: any) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const res = await fetch(
        `https://zsqur.quickvara.com/api/v1/product/${id}`,
        {
          method: "DELETE",
        }
      );
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

//  console.log(openModalValue.type.eng)
  return (
    <>
      <Head>
        <title>QuickVara - Filter by Rent Type</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with QuickVara's extensive listings for rent. QuickVara is the most secure, easy and quick online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, to-let, toleet, Basa Vara, Vara, Rent, rent, leet, house rent | havenly | haven | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara - Filter by Rent Type | Tolet | Basa Vara | toleet | rent | havenly`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="QuickVara - Filter by Rent Type | Tolet | Basa Vara | toleet | rent | havenly" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with QuickVara's extensive listings for rent. QuickVara is the most secure, easy and quick online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="QuickVara.com" />
        <meta
          name="keyword"
          content="QuickVara, To-Let, To Let, tolet, ToLet, to let, to-let, toleet, Basa Vara, Vara, Rent, rent, leet, house rent| havenly | haven | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Filter by Rent Type | Tolet | Basa Vara | toleet | rent | havenly"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className="lg:my-10 bg-white lg:w-10/12 mx-auto">
        {loading ? (
          <h1 className="text-center w-full mt-10 py-16">Loading...</h1>
        ) : (
          <>
            <div className=" py-10 px-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded">
              {deleteAndFilterPost?.length > 0 &&
                deleteAndFilterPost?.map((product: any) => (
                  <Products
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                  ></Products>
                ))}
            </div>
            {deleteAndFilterPost?.length === 0 && (
              <div className="flex justify-center">
                <div>
                  <Lottie
                    className="h-52 w-52 ml-10"
                    animationData={lotti}
                    loop={true}
                  ></Lottie>
                  {!lang ? (
                    <h1 className="text-4xl text-center mb-10">
                      No data found.
                    </h1>
                  ) : (
                    <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  let loading = true;
  let products = [];

  try {
    const res = await fetch(
      `https://zsqur.quickvara.com/api/v1/product/rentType/${params.destination}`
    );
    products = await res.json();
    loading = false;
  } catch (error) {}

  return {
    props: {
      products,
      loading,
    },
  };
};
export default ShowAllPost;