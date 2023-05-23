import { APIContext } from "@/Context/ApiContext/ApiContext";
import ShowUniversityPost from "@/components/Home/AllPost/ShowUniversityPost";
import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import Head from "next/head";

const University = () => {
  // console.log(university)
  const { filterPost }: any = useContext(APIContext);
  //     const [filterPost, setFilterPost] = useState([]);
  //   // const router = useRouter();
  //   const handleFilterUniversity = () => {
  //     fetch(`https://zsqur.to-leet.com/api/v1/product`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         const result = data?.filter(
  //           (post: any) => console.log(post)
  //         );
  //         setFilterPost(result);
  //         // router.push("/university");
  //         // setLoading(false);
  //         // setUsersWithoutPresent(result);
  //       });
  //   };
  //   console.log(openModalValue)
  const lang = localStorage.getItem("lan")
  return (
    <>
    <Head>
    <title>To-Leet - Filter by institute</title>
  </Head>
    <section className="w-10/12 mx-auto bg-white px-5 rounded my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {filterPost?.map((university: any) => (
        <ShowUniversityPost
          key={university._id}
          university={university}
        ></ShowUniversityPost>
      ))}
      </div>
        <div className={filterPost.length === 0 ? "flex justify-center h-screen items-center" : "flex justify-center"}>
        {filterPost?.length === 0 && (
          <div className="lg:-mt-16">
            <Lottie
              className="h-52 w-52"
              animationData={lotti}
              loop={true}
            ></Lottie>
            {lang ? (
              <h1 className="text-4xl text-center mb-10">No data found.</h1>
            ) : (
              <h1 className="text-2xl -ml-7">এখনো কোন পোস্ট করা হয়নি।</h1>
            )}
          </div>
        )}
      </div>
    </section></>
  );
};

export default University;
