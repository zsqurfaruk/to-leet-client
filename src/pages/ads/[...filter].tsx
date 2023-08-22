/* eslint-disable react-hooks/exhaustive-deps */
import FilterAllPosts from "@/components/Home/AllPost/FilterAllPosts";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../../image/lf20_jkbuwuhk.json";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loading/Loader";
import { RootState } from "@/redux/app/store";
import { useRouter } from "next/router";
import { setCityName } from "@/redux/features/FilterCity/FilterCitySlice";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
import { setFilterModalValue } from "@/redux/features/FilterModalSlice/FilterModalSlice";
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";

const FilterPosts = () => {
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("page")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const [queryData, setQueryData] = useState({});
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setFilterModalValue({
        eng: refreshParams[4],
      })
    );
    dispatch(
      setCityName({
        eng: refreshParams[3],
      })
    );
    dispatch(
      setHomePopularAreaName({
        eng: refreshParams[2],
      })
    );
    const qd = {
      homePopularAreaName: { eng: decodeURIComponent(refreshParams[2]) },
      cityName: { eng: decodeURIComponent(refreshParams[3]) },
      filterModalValue: { eng: decodeURIComponent(refreshParams[4]) },
    };
    setQueryData(qd);
  }, []);

  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasData, setHasData] = useState(true);

  const cityName = useSelector((state: any) => state['qv-cn'].cityName)

  // const filterModalValue = useSelector(
  //   (state: RootState) => state.filterModalValue.filterModalValue
  // );

  const homePopularAreaName = useSelector(
    (state: RootState) => state['qv-hpa'].homePopularAreaName
  );
  const divisionNameEng = useSelector(
    (state: RootState) => state['qv-dn'].divisionNameEng
  );

  const districtsName = useSelector(
    (state: RootState) => state['qv-dsn'].districtsName
  );

  useEffect(() => {
    fetch("https://zsqur.quickvara.com/api/v1/product/filter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(queryData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.posts?.length > 0) {
          const decryptedData = decryptFunction(data?.posts);
          const parsedData = JSON.parse(decryptedData);
          setFilterPost(parsedData);
          setHasData(true);
        } else {
          setFilterPost([]);
          setHasData(false);
        }
        setLoading(false);
      });
  }, [queryData]);

  useEffect(() => {
    sessionStorage.setItem("pageF", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("pageF")) || 1;
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
    sessionStorage.setItem("pageF", pageNumber.toString());
  };
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(filterPost?.length / limit); i++) {
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
  const currentItems = filterPost?.slice(startIndex, lastIndex);

  const renderData = (filterPost: any) => {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterPost?.map((post: any) => (
            <FilterAllPosts key={post._id} post={post} />
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

  let title = "";

  if (homePopularAreaName && cityName) {
    title = `QuickVara in ${decodeURIComponent(
      homePopularAreaName?.eng
    )}, ${decodeURIComponent(cityName?.eng)}`;
  } else if (districtsName && divisionNameEng) {
    title = `QuickVara in ${decodeURIComponent(
      districtsName?.eng
    )}, ${decodeURIComponent(divisionNameEng?.eng)}`;
  }

  document.title = title;
  const lang = useSelector((state: any) => state.language.language);
  return (
    <>
      <Head>
        <title>{(document.title = title || "Filter by Location")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Here you can find a hassle-free rental solution according to your needs. Our company aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, tolet, tolet, Basa Vara, Vara, Rent, To-Let, To-Let, house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara in ${
            decodeURIComponent(homePopularAreaName?.eng) ||
            decodeURIComponent(districtsName?.eng)
          }, ${
            decodeURIComponent(cityName?.eng) ||
            decodeURIComponent(divisionNameEng?.eng)
          }`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content={`QuickVara in ${
            decodeURIComponent(homePopularAreaName?.eng) ||
            decodeURIComponent(districtsName?.eng)
          }, ${
            decodeURIComponent(cityName?.eng) ||
            decodeURIComponent(divisionNameEng?.eng)
          }`}
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Here you can find a hassle-free rental solution according to your needs. Our company aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, tolet, tolet, Basa Vara, Vara, Rent, To-Let, To-Let, house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara in ${
            decodeURIComponent(homePopularAreaName?.eng) ||
            decodeURIComponent(districtsName?.eng)
          }, ${
            decodeURIComponent(cityName?.eng) ||
            decodeURIComponent(divisionNameEng?.eng)
          }`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>

      {loading ? (
        <h2 className="text-center w-full">
          {" "}
          <Loader></Loader>
        </h2>
      ) : (
        <section className="lg:w-10/12 mx-auto bg-white lg:bg-transparent pb-10 px-6 lg:px-0 rounded">
          <div className="flex justify-around py-5 text-warning ">
            {!lang ? (
              <div>
                {cityName?.eng && !divisionNameEng?.eng && (
                  <h2>
                    You have selected{" "}
                    <span className="lowercase">{cityName?.eng}</span> city.
                  </h2>
                )}
                {divisionNameEng?.eng && (
                  <h2>
                    You have selected{" "}
                    <span className="lowercase">{divisionNameEng?.eng}</span>{" "}
                    division.
                  </h2>
                )}
              </div>
            ) : (
              <div className="text-[13.3px]">
                {cityName?.ban && (
                  <h2>আপনি {cityName?.ban} শহর নির্বাচন করেছেন।</h2>
                )}
                {divisionNameEng.ban && (
                  <h2> আপনি {divisionNameEng?.ban} বিভাগ নির্বাচন করেছেন।</h2>
                )}
              </div>
            )}
          </div>
          {renderData(currentItems)}
          {filterPost?.length > 20 && (
            <div>
              <ul
                className={
                  minPageNumberLimit < 5
                    ? "flex justify-center gap-3 md:gap-4 pb-5 pt-10"
                    : "flex justify-center gap-[7px] md:gap-3 pb-5 pt-10"
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
          )}
          <div className="flex justify-center">
            {filterPost.length === 0 && !loading && (
              <div>
                
                {!lang ? (
                 <>
                  <Lottie
                  className="h-52 w-52 ml-7"
                  animationData={lotti}
                  loop={true}
                />
                  <h1 className="text-4xl text-center mb-10 ml-5">
                    No data found.
                  </h1></>
                ) : (
                  <>
                  <Lottie
                  className="h-52 w-52 ml-14 md:7"
                  animationData={lotti}
                  loop={true}
                />
                  <h1 className="text-2xl -ml-">এখনো কোন পোস্ট করা হয়নি।</h1></>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default FilterPosts;
