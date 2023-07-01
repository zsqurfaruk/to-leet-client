import React, { useState, useContext, useEffect } from "react";
import AllPost from "@/components/Home/AllPost/AllPost";
import Head from "next/head";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { getAllPosts } from "@/redux/features/AllPosts/AllPostsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

function AllAds() {
  // const { counterPosts, loading }: any = useContext(APIContext);
  // const [allDataLoading, setAllDataLoading] = useState(true);
  // const [counterPosts, setcounterPosts] = useState([]);
  // const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState(20);
  // const currentPage = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { allPosts } = useSelector((state: RootState) => state.allPosts);

 useEffect(() => {
  dispatch(getAllPosts());
}, [dispatch]);


  const handleClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
  };
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(allPosts.length / limit); i++) {
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
  const currentItems = allPosts.slice(startIndex, lastIndex);

  const renderData = (allPosts: any) => {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          {allPosts?.map((post: any) => (
            <AllPost key={post._id} post={post}></AllPost>
          ))}
        </div>
      </>
    );
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li>&hellip;</li>;
  }
  let pageDecrementBtn = null;
  if (pages.length > 5) {
    pageDecrementBtn = <li>&hellip;</li>;
  }

  return (
    <>
      <Head>
        <title>QuickVara - All Ads</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. We have listed all the ads here for your convenience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, toleet, Basa Vara, Vara, Rent, rent,  house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, to-let, tolet, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara- See all ads for rent in Bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="QuickVara- See all ads for rent in Bangladesh" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. We have listed all the ads here for your convenience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, toleet, Basa Vara, Vara, Rent, rent,  house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, to-let, tolet, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara- See all ads for rent in Bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className="lg:my-5 lg:w-10/12 mx-auto bg-white px-10 rounded">
      {renderData(currentItems)}
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
      </section>
    </>
  );
}

export default AllAds;
