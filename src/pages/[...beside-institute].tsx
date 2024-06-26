/* eslint-disable react-hooks/exhaustive-deps */
import ShowUniversityPost from "@/components/Home/AllPost/ShowUniversityPost";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loading/Loader";
import { AppDispatch, RootState } from "@/redux/app/store";
import { useRouter } from "next/router";
import { setOpenModalValue } from "@/redux/features/UniversitySlice/UniversitySlice";
import { fetchAndFilterUniversityData } from "@/redux/features/UniversityFilter/UniversityFilerSlice";
import UniversityFilterType from "@/components/Home/AllPost/UniversityFilterType";
 
const University = () => {
  const lang = useSelector((state: any) => state.language.language);
  const [limit, setLimit] = useState(40);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("page")) || 1
  );
  
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const { filterPost, isLoading } = useSelector(
    (state: RootState) => state['qv-uv']
  );


  // const universityTypeFilter = useSelector((state: RootState) => state['qv-utv'].value);

  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  const universityTypeFilter =(refreshParams[3]);
  let universityType: any[]= []
  if(universityTypeFilter){
    universityType = filterPost?.filter((post:any)=> universityTypeFilter === post?.type?.eng)
  }

  const dispatch: AppDispatch = useDispatch();
  // const router = useRouter();
  // const params = router.asPath;
  // const refreshParams = params.split("/");

  useEffect(() => {
    const openModalValue = { eng: decodeURIComponent(refreshParams[2]) };
    dispatch(setOpenModalValue(openModalValue));
    dispatch(fetchAndFilterUniversityData())
      .then(() => {})
      .catch(() => {});
  }, []);

  useEffect(() => {
   if(!universityTypeFilter){
    sessionStorage.setItem("pageU", currentPage.toString());
   }
   else{
    sessionStorage.setItem("pageFT", currentPage.toString());
   }
  }, [currentPage]);
  // ...

  useEffect(() => {
    let storedPage;
    if(!universityTypeFilter){
        storedPage = Number(sessionStorage.getItem("pageU")) || 1;
    }else{
       storedPage = Number(sessionStorage.getItem("pageFT")) || 1;
    }
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
   if(!universityTypeFilter){
    sessionStorage.setItem("pageU", pageNumber.toString());
   }else{
    sessionStorage.setItem("pageFT", pageNumber.toString());
   }
  };
  const pages: number[] = [];
  if(!universityTypeFilter){
    for (let i = 1; i <= Math.ceil(filterPost?.length / limit); i++) {
      pages.push(i);
    }
  }else{
    for (let i = 1; i <= Math.ceil(universityType?.length / limit); i++) {
      pages.push(i);
    }
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
  let currentItems;
  if(!universityTypeFilter){
  currentItems = filterPost?.slice(startIndex, lastIndex);
  }else{
  currentItems = universityType?.slice(startIndex, lastIndex);
  }
 let renderData;
  if(!universityTypeFilter){
   renderData = (filterPost: any ) => {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5 pb-10">
            {filterPost?.length > 0 && !universityTypeFilter &&
              filterPost?.map((university: any) => (
                <ShowUniversityPost
                  key={university._id}
                  university={university}
                ></ShowUniversityPost>
              ))}
               
          </div>
        </>
      );
    };
  }else{
    renderData = (universityType: any ) => {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5 pb-10">
             
              {
                filterPost?.length > 0 && universityTypeFilter !== "Total" && universityTypeFilter && universityType?.map((university:any)=> <ShowUniversityPost 
                key={university._id}
                university={university}>
                </ShowUniversityPost> )
              }
          </div>
        </>
      );
    };
  }


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
        <title>
          QuickVara - Filter by {decodeURIComponent(refreshParams[2])}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, to-let, quickvara, to Basa Vara, Vara, Rent, rent,  house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara - Filter by institute | Tolet | Basa Vara | rent`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="QuickVara - Filter by institute |Tolet | Basa Vara | rent"
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To-Let, To Let, tolet, ToLet, to let, to-let, quickvara, to Basa Vara, Vara, Rent, rent,  house rent  | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Filter by institute | Tolet | Basa Vara | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className=" lg:w-10/12 mx-auto bg-white lg:bg-transparent px-6 lg:px-0 rounded">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <>
          {
            filterPost?.length > 0 && 
            <><UniversityFilterType></UniversityFilterType>
            <div className="divider mb-0 mt-3 hidden lg:flex"></div></>
          }
            {renderData(currentItems)}
           <>
           {
            filterPost?.length > 40 && !universityTypeFilter &&  <div>
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
                disabled={
                  currentPage === pages[pages?.length - 1] ? true : false
                }
                className={
                  currentPage === pages[pages?.length - 1]
                    ? "text-gray-400"
                    : "text-warning pl-1"
                }
              >
                {!lang ? "Next" : "পরবর্তী"}
              </button>
            </ul>
            </div>
           }
           </>
           <>
           {
            universityType?.length > 40 && universityTypeFilter &&  <div>
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
                disabled={
                  currentPage === pages[pages?.length - 1] ? true : false
                }
                className={
                  currentPage === pages[pages?.length - 1]
                    ? "text-gray-400"
                    : "text-warning pl-1"
                }
              >
                {!lang ? "Next" : "পরবর্তী"}
              </button>
            </ul>
            </div>
           }
           </>
            <div
              className={
                filterPost?.length === 0 && !isLoading
                  ? "flex justify-center h-96 items-center"
                  : "flex justify-center"
              }
            >
              {filterPost?.length === 0 && !isLoading && (
                <div className="-mt-20">
                  {!lang ? (
                    <>
                      <Lottie
                        className="h-52 w-52 ml-3"
                        animationData={lotti}
                        loop={true}
                      ></Lottie>
                      <h1 className="text-4xl text-center mb-10">
                        No data found.
                      </h1>
                    </>
                  ) : (
                    <>
                      <Lottie
                        className="h-52 w-52 ml-9"
                        animationData={lotti}
                        loop={true}
                      ></Lottie>
                      <h1 className="text-2xl -ml-5">
                        এখনো কোন পোস্ট করা হয়নি।
                      </h1>
                    </>
                  )}
                </div>
              )}
            </div>
            <>
            <div
              className={
                universityType?.length === 0 && universityTypeFilter && !isLoading
                  ? "flex justify-center h-96 items-center"
                  : "flex justify-center"
              }
            >
              {universityType?.length === 0 && universityTypeFilter && !isLoading && (
                <div className="-mt-20">
                  {!lang ? (
                    <>
                      <Lottie
                        className="h-52 w-52 ml-3"
                        animationData={lotti}
                        loop={true}
                      ></Lottie>
                      <h1 className="text-4xl text-center mb-10">
                        No data found.
                      </h1>
                    </>
                  ) : (
                    <>
                      <Lottie
                        className="h-52 w-52 ml-9"
                        animationData={lotti}
                        loop={true}
                      ></Lottie>
                      <h1 className="text-2xl -ml-5">
                        এখনো কোন পোস্ট করা হয়নি।
                      </h1>
                    </>
                  )}
                </div>
              )}
            </div>
            </>
          </>
        )}
      </section>
    </>
  );
};

export default University;
