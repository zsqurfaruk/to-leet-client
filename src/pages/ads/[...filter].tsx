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

const FilterPosts = () => {
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

  const cityName = useSelector((state: RootState) => state.cityName.cityName);
 
  const filterModalValue = useSelector(
    (state: RootState) => state.filterModalValue.filterModalValue
  );

  const homePopularAreaName = useSelector(
    (state: RootState) => state.homePopularArea.homePopularAreaName
  );
  const divisionNameEng = useSelector(
    (state: RootState) => state.divisionNameEng.divisionNameEng
    );

  const districtsName = useSelector(
    (state: RootState) => state.districtsName.districtsName
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
          setFilterPost(data.posts);
          setHasData(true);
        } else {
          setFilterPost([]);
          setHasData(false);
        }
        setLoading(false);
      });
  }, [queryData]);

  let title = "";

  if (homePopularAreaName && cityName) {
    title = `QuickVara in ${decodeURIComponent(homePopularAreaName?.eng)}, ${decodeURIComponent(cityName?.eng)}`;
  } else if (districtsName && divisionNameEng) {
    title = `QuickVara in ${decodeURIComponent(districtsName?.eng)}, ${decodeURIComponent(divisionNameEng?.eng)}`;
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
            decodeURIComponent(homePopularAreaName?.eng) || decodeURIComponent(districtsName?.eng)
          }, ${decodeURIComponent(cityName?.eng) || decodeURIComponent(divisionNameEng?.eng)}`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content={`QuickVara in ${
            decodeURIComponent(homePopularAreaName?.eng) || decodeURIComponent(districtsName?.eng)
          }, ${decodeURIComponent(cityName?.eng) || decodeURIComponent(divisionNameEng?.eng)}`}
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
            decodeURIComponent(homePopularAreaName?.eng) || decodeURIComponent(districtsName?.eng)
          }, ${decodeURIComponent(cityName?.eng) || decodeURIComponent(divisionNameEng?.eng)}`}
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
          {hasData && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {filterPost?.map((post: any) => (
                <FilterAllPosts key={post._id} post={post} />
              ))}
            </div>
          )}
          <div className="flex justify-center">
            {!hasData && !loading && (
              <div>
                <Lottie
                  className="h-52 w-52 ml-7"
                  animationData={lotti}
                  loop={true}
                />
                {!lang ? (
                  <h1 className="text-4xl text-center mb-10 ml-5">
                    No data found.
                  </h1>
                ) : (
                  <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1>
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
