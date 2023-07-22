import React, { useState, useEffect } from "react";
import AllPost from "@/components/Home/AllPost/AllPost";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { getAllPosts } from "@/redux/features/AllPosts/AllPostsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Loader from "@/components/Loading/Loader";

function AllAds() {
  const lang = useSelector((state:any) => state.language.language);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("page")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { allPosts, isLoading }: any = useSelector((state: RootState) => state.allPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("page", currentPage.toString());
  }, [currentPage]);
  // ...

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
  for (let i = 1; i <= Math.ceil(allPosts?.length / limit); i++) {
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
         {
          !lang ?  <>{number}</> :  <>{banglaNumber}</>
         }
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
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 pt-5 pb-10 px-6 lg:px-0 bg-white lg:bg-transparent">
          {allPosts?.map((post: any) => (
            <AllPost key={post._id} post={post}></AllPost>
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
  if (pages?.length > maxPageNumberLimit) {
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
          content="QuickVara, ToLet, To-Let, to let, Basa Vara, Vara, Rent, rent,  house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, to-let, tolet, real estate, bikroy"
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
        <meta
          name="title"
          content="QuickVara- See all ads for rent in Bangladesh"
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. We have listed all the ads here for your convenience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, ToLet, To-Let, to let, Basa Vara, Vara, Rent, rent,  house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, to-let, tolet, real estate, bikroy"
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
     {
      isLoading ? <Loader></Loader> :  <section className="lg:w-10/12 mx-auto rounded bg-white lg:bg-transparent">
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
       {
        !lang ? "Previous" : "পূর্ববর্তী"
       }
      </button>
      <span className={minPageNumberLimit < 5 ? "hidden" : "inline"}>
        {pageDecrementBtn}
      </span>
      {renderPagesNumber}
      {pageIncrementBtn}
      <button
        onClick={handleNext}
        disabled={currentPage === pages[pages?.length - 1] ? true : false}
        className={
          currentPage === pages[pages?.length - 1]
            ? "text-gray-400"
            : "text-warning pl-1"
        }
      >
       {
        !lang ? "Next" : "পরবর্তী"
       }
      </button>
    </ul>
    
    </section>
     }
    </>
  );
}

export default AllAds;
