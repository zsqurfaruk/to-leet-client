import ShowUniversityPost from "@/components/Home/AllPost/ShowUniversityPost";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loading/Loader";
import { AppDispatch, RootState } from "@/redux/app/store";
import { useRouter } from "next/router";
import { setOpenModalValue } from "@/redux/features/UniversitySlice/UniversitySlice";
import { fetchAndFilterUniversityData } from "@/redux/features/UniversityFilter/UniversityFilerSlice";

const University = () => {
  const lang = useSelector((state: any) => state.language.language);
  const { filterPost, isLoading } = useSelector(
    (state: RootState) => state.university
  );
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");

  useEffect(() => {
    const openModalValue = { eng: decodeURIComponent(refreshParams[2]) };
    dispatch(setOpenModalValue(openModalValue));
    dispatch(fetchAndFilterUniversityData())
      .then(() => {})
      .catch(() => {});
  }, []);
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5 pb-10">
              {filterPost.length > 0 &&
                filterPost?.map((university: any) => (
                  <ShowUniversityPost
                    key={university._id}
                    university={university}
                  ></ShowUniversityPost>
                ))}
            </div>
            <div
              className={
                filterPost?.length === 0 && !isLoading
                  ? "flex justify-center h-96 items-center"
                  : "flex justify-center"
              }
            >
              {filterPost?.length === 0 && !isLoading && (
                <div className ="-mt-20">
                  {!lang ? (
                     <><Lottie
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
                    <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1></>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default University;
