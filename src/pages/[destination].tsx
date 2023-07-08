/* eslint-disable react-hooks/rules-of-hooks */
import Products from "@/components/Products/Products";
import { GetServerSideProps } from "next";
import React, { useState, useContext, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import { StateContext } from "@/Context/StateContext/StateContext";
import Head from "next/head";
import { useSelector } from "react-redux";

const ShowAllPost = ({ products, loading }: any) => {
  const lang = useSelector((state:any) => state.language.language);
  const { setTypeCount, destinationType }: any = useContext(StateContext);
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

  const [limit, setLimit] = useState(20);
  // const currentPage = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("page")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("page", currentPage.toString());
  }, [currentPage]);
  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("page")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  // ...

  const handleClick = (e: any) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("page", pageNumber.toString());
  };
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(deleteAndFilterPost.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-warning text-primary px-2 rounded cursor-pointer"
              : "cursor-pointer text-warning"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;
  const currentItems = deleteAndFilterPost.slice(startIndex, lastIndex);

  const renderData = (deleteAndFilterPost: any) => {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          {deleteAndFilterPost?.length > 0 &&
            deleteAndFilterPost?.map((product: any) => (
              <Products
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              ></Products>
            ))}
        </div>
      </>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("page", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("page", newPage.toString());

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-warning pl-1"
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-warning pr-1"
      >
        &hellip;
      </li>
    );
  }

  let title = "";
  if (destinationType) {
    title = `QuickVara - ${destinationType}`;
  }

  document.title = title;
  return (
    <>
      <Head>
        <title>{title || "Filter by Rent Type"}</title>
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
        <meta
          name="title"
          content="QuickVara - Filter by Rent Type | Tolet | Basa Vara | toleet | rent | havenly"
        />
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
     {
      loading ? <h1 className="text-center w-full mt-10 py-16">Loading...</h1> :  <section className="lg:my-5 lg:w-10/12 mx-auto bg-white px-[32px] rounded">
      {renderData(currentItems)}
      {deleteAndFilterPost?.length > 20 && (
        <ul
          className={
            minPageNumberLimit < 5
              ? "flex justify-center gap-3 md:gap-4 pb-5"
              : "flex justify-center gap-[7px] md:gap-3 pb-5"
          }
        >
          <button
            onClick={handlePrevious}
            disabled={currentPage === pages[0] ? true : false}
            className={
              currentPage === pages[0] ? "text-gray-400" : "text-warning"
            }
          >
            Previous
          </button>
          <span className={minPageNumberLimit < 5 ? "hidden" : "inline"}>
            {pageDecrementBtn}
          </span>
          {renderPagesNumber}
          {pageIncrementBtn}
          <button
            onClick={handleNext}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            className={
              currentPage === pages[pages.length - 1]
                ? "text-gray-400"
                : "text-warning pl-1"
            }
          >
            Next
          </button>
        </ul>
      )}
      {deleteAndFilterPost?.length === 0 && (
        <div className="flex justify-center pb-5">
          <div>
            <Lottie
              className="h-52 w-52 ml-6"
              animationData={lotti}
              loop={true}
            ></Lottie>
            {!lang ? (
              <h1 className="text-4xl text-center mb-10">No data found.</h1>
            ) : (
              <h1 className="text-xl -ml-3">এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        </div>
      )}
    </section>
     }
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
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
