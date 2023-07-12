/* eslint-disable react-hooks/rules-of-hooks */
import Products from "@/components/Products/Products";
import { GetServerSideProps } from "next";
import React, { useState, useContext, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import { StateContext } from "@/Context/StateContext/StateContext";
import Head from "next/head";
import { useSelector } from "react-redux";
import { Product } from "../../types";
import Loader from "@/components/Loading/Loader";

interface ShowAllPostProps {
  products: Product[];
}
const ShowAllPost = ({ products }: ShowAllPostProps) => {
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state: any) => state.language.language);
  const { setTypeCount, destinationType }: any = useContext(StateContext);
  setTypeCount(products);
  // const [deleteAndFilterPost, setDeleteAndFilterPost] = useState(products);
  // const handleDelete = async (id: any) => {
  //   const proceed = window.confirm("Are you sure?");
  //   if (proceed) {
  //     const res = await fetch(
  //       `https://zsqur.quickvara.com/api/v1/product/${id}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     const data = await res.json();
  //     if (data.message === "success") {
  //       setDeleteAndFilterPost(
  //         deleteAndFilterPost?.filter(
  //           (deletedPost: any) => deletedPost._id !== id
  //         )
  //       );
  //     }
  //   }
  // };

  const [limit, setLimit] = useState(20);
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

  const handleClick = (e: any) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("page", pageNumber.toString());
  };
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(products?.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number: any) => {
    const banglaNumber = number
      .toString()
      .replace(/0/g, "০")
      .replace(/1/g, "১")
      .replace(/2/g, "২")
      .replace(/3/g, "৩")
      .replace(/4/g, "৪")
      .replace(/5/g, "৫")
      .replace(/6/g, "৬")
      .replace(/7/g, "৭")
      .replace(/8/g, "৮")
      .replace(/9/g, "৯");
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
          {!lang ? <>{number}</> : <>{banglaNumber}</>}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;
  const currentItems = products?.slice(startIndex, lastIndex);

  const renderData = (products: any) => {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          {products?.length > 0 &&
            products?.map((product: any) => (
              <Products
                key={product?._id}
                product={product}
                // handleDelete={handleDelete}
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
  useEffect(() => {
    setLoading(false); // Set loading to false after component mounts
  }, []);

  if (loading) {
    return <Loader></Loader>;
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
      <section className="lg:my-5 lg:w-10/12 mx-auto bg-white px-[32px] rounded">
        {renderData(currentItems)}
        {products?.length > 20 && (
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
              {!lang ? "Previous" : "পূর্ববর্তী"}
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
              {!lang ? "Next" : "পরবর্তী"}
            </button>
          </ul>
        )}
        {products?.length === 0 && (
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  let errorMessage = "";
  try {
    const res = await fetch(
      `https://zsqur.quickvara.com/api/v1/product/rentType/${params.destination}`
    );
    const data = await res.json();

    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    // Set the loading status to false once the data is fetched

    return {
      props: {
        products: data,

        errorMessage: null, // Pass the loading status as a prop
      },
    };
  } catch (error) {
    errorMessage = "An error occurred. Please try again later.";

    return {
      props: {
        products: null,

        errorMessage: errorMessage, // Pass the loading status as a prop
      },
    };
  }
};
export default ShowAllPost;
