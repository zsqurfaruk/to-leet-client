import { StateContext } from "@/Context/StateContext/StateContext";
import FilterAllPosts from "@/components/Home/AllPost/FilterAllPosts";
import React, { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../../image/lf20_jkbuwuhk.json";
import Cookies from 'js-cookie';
import Head from "next/head";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const FilterPosts = () => {
  const { filterValue, cityName, divisionNameEng }: any =
    useContext(StateContext);
    const {lang}:any = useContext(FilterContext)
  const [filterPost, setFilterPost] = useState([]);
  const [loading , setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
      fetch("https://zsqur.quickvara.com/api/v1/product/filter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(filterValue),
      })
      .then((res) => res.json())
      .then((data) => {setFilterPost(data?.posts)
      setLoading(false)});
    
  }, [filterValue]);

  const title = `QuickVara in ${filterValue?.homePopularAreaName?.eng || filterValue?.districtsName?.eng}, ${filterValue?.cityName?.eng || filterValue?.divisionNameEng?.eng}`;
  document.title = title;
  return (
    <>
    <Head>
    <title>{ document.title = title || "The Ultimate Rental Solution"}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Here you can find a hassle-free rental solution according to your needs. Our company aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, to-let, tolet, Basa Vara, Vara, Rent, To Let, To-Let, toleet, leet, house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara in ${filterValue?.homePopularAreaName?.eng}, ${filterValue?.cityName?.eng}`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={`QuickVara in ${filterValue?.homePopularAreaName?.eng}, ${filterValue?.cityName?.eng}`} />
        <meta name="keywords" />
        <meta
          name="description"
          content="Here you can find a hassle-free rental solution according to your needs. Our company aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, to-let, tolet, Basa Vara, Vara, Rent, To Let, To-Let, toleet, leet, house rent, flat rent in dhaka, flat rent, flat rent dhaka, apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara in ${filterValue?.homePopularAreaName?.eng}, ${filterValue?.cityName?.eng}`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
  </Head>
    
     {
      loading ? <h2 className="text-center w-full py-40">Loading...</h2> : <section className="lg:w-10/12 mx-auto bg-white lg:my-10 pb-10 px-10 rounded ">
      <div className="flex justify-around py-5 text-warning ">
        {!lang ? (
          <div>
            {cityName?.eng && (
              <h2>
                You have selected{" "}
                <span className="lowercase">{cityName?.eng}</span> city.
              </h2>
            )}
            {divisionNameEng.eng && (
              <h2>
                You have selected{" "}
                <span className="lowercase">{divisionNameEng?.eng}</span>{" "}
                division.
              </h2>
            )}
          </div>
        ) : (
          <div>
            {cityName?.ban && <h2>আপনি {cityName?.ban} শহর নির্বাচন করেছেন।</h2>}
            {divisionNameEng.ban && (
              <h2> আপনি {divisionNameEng?.ban} বিভাগ নির্বাচন করেছেন।</h2>
            )}
          </div>
        )}
      </div>
      {
        loading ? "Loading..." : <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {filterPost?.map((post: any) => (
          <FilterAllPosts key={post._id} post={post}></FilterAllPosts>
        ))}
      </div>
      }

      <div className="flex justify-center">
        {filterPost?.length === 0 && (
          <div>
            <Lottie
              className="h-52 w-52 ml-10"
              animationData={lotti}
              loop={true}
            ></Lottie>
            {!lang ? (
              <h1 className="text-4xl text-center mb-10 ml-5">No data found.</h1>
            ) : (
              <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        )}
      </div>
    </section>
     }
    </>
  );
};
 
export default FilterPosts;
