import { APIContext } from "@/Context/ApiContext/ApiContext";
import ShowUniversityPost from "@/components/Home/AllPost/ShowUniversityPost";
import React, { useContext } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import Head from "next/head";
import Cookies from "js-cookie";

const University = () => {
  const { filterPost, uniLoading }: any = useContext(APIContext);

  const lang = Cookies.get("lan");
  return (
    <>
      <Head>
        <title>To Leet - Filter by institute</title>
      </Head>
      <section className="lg:w-10/12 mx-auto bg-white px-5 rounded lg:my-10">
        {uniLoading ? (
          <h1 className="text-center w-full mt-10 py-20 text-xl">Loading...</h1>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
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
