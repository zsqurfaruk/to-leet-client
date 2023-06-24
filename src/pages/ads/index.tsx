import React, { useState, useContext } from "react";
import AllPost from "@/components/Home/AllPost/AllPost";
import Head from "next/head";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import Loading from "@/components/Loading/Loading";

function AllAds() {
  const { counterPosts, loading }: any = useContext(APIContext);
  // const [allDataLoading, setAllDataLoading] = useState(true);
  // const [counterPosts, setcounterPosts] = useState([]);
  // const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState(20);
  // const currentPage = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
  };
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(counterPosts.length / limit); i++) {
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
  const currentItems = counterPosts.slice(startIndex, lastIndex);

  const renderData = (counterPosts: any) => {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          {counterPosts?.map((post: any) => (
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
        <title>To-Leet - All Ads</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with To-Leet's extensive listings for rent. To-Leet is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="to-leet.com" />
        <meta
          name="keyword"
          content="To Let, To-Let, to let, to-let, to leet, toleet, To-Leet, To Leet, To Leet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://to-leet.com/" />
        <meta
          property="og:title"
          content="To-Leet - All Ads | toleet | Tolet | Basa Vara | to leet | house rent |rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="to-leet.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="To-Leet - All Ads | toleet | Property Tolet | Basa Vara | to leet | house rent | rent" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with To-Leet's extensive listings for rent. To-Leet is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="to-leet.com" />
        <meta
          name="keyword"
          content="To-Let, To Let, tolet, ToLet, to let, to-let, to leet, toleet, To-Leet, To Leet, To Leet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://to-leet.com/" />
        <meta
          property="og:title"
          content="To-Leet - All Ads | toleet | Property Tolet | Basa Vara | to leet | house rent | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="to-leet.com" />
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
