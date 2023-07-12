import { APIContext } from "@/Context/ApiContext/ApiContext";
import ShowUniversityPost from "@/components/Home/AllPost/ShowUniversityPost";
import React, { useContext } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import Head from "next/head";
import { useSelector } from "react-redux";
import Loader from "@/components/Loading/Loader";

const University = () => {
  const { filterPost, uniLoading }: any = useContext(APIContext);
   const lang = useSelector((state:any) => state.language.language);
  return (
    <>
      <Head>
        <title>QuickVara - Filter by institute</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, to-let, quickvara, toleet, Basa Vara, Vara, Rent, rent, leet, house rent | havenly | haven | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content={`QuickVara - Filter by institute | toleet | havenly | haven | Tolet | Basa Vara | toleet | rent`}
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="QuickVara - Filter by institute | toleet | havenly | haven |Tolet | Basa Vara | toleet | rent" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To-Let, To Let, tolet, ToLet, to let, to-let, quickvara, toleet, Basa Vara, Vara, Rent, rent, leet, house rent| havenly | haven | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Filter by institute | toleet | havenly | haven | Tolet | Basa Vara | toleet | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className=" lg:w-10/12 mx-auto bg-white px-[32px] rounded lg:my-10">
        {uniLoading ? (
          // <h1 className="text-center w-full mt-10 py-20 text-xl">Loading...</h1>
          <Loader></Loader>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
              {filterPost?.map((university: any) => (
                <ShowUniversityPost
                  key={university._id}
                  university={university}
                ></ShowUniversityPost>
              ))}
            </div>
            <div
              className={
                filterPost.length === 0
                  ? "flex justify-center h-96 items-center"
                  : "flex justify-center"
              }
            >
              {filterPost?.length === 0 && (
                <div className="lg:-mt-16">
                  <Lottie
                    className="h-52 w-52 ml-10"
                    animationData={lotti}
                    loop={true}
                  ></Lottie>
                  {!lang ? (
                    <h1 className="text-4xl text-center mb-10">
                      No data found.
                    </h1>
                  ) : (
                    <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1>
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
