/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import DashboardPost from "@/components/Home/AllPost/DashboardPost";
import PrivateRoute from "@/routes/privateRoute";
import Head from "next/head";
import Cookies from "js-cookie";

const Dashboard = () => {
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const email = Cookies.get("authentication");
  const [personalPost, setPersonalPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://zsqur.to-leet.com/api/v1/product/user/email/${email}`, {
      headers: {
        authorization: `bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPersonalPost(data);
        setLoading(false);
      });
  }, [email]);

  let getNumber;
  let checkAuthentication;
  if (email) {
    if (!isNaN(parseInt(email))) {
      // setNumber(inputValue)
      getNumber = email;
    } else if (email.includes("@") && email.includes(".")) {
      checkAuthentication = email;
    }
  }

  const lang = Cookies.get("lan");
  return (
    <>
      <Head>
        <title>To Leet - Dashboard</title>
      </Head>
      <div className="lg:flex gap-10 w-full lg:w-10/12 mx-auto bg-white p-5 md:p-10  md:scale-100">
        <div className="basis-1/4  pb-5 mb-5">
          <h2>
            {firstName} {lastName}
          </h2>
          {getNumber && <h2>+{getNumber}</h2>}
          {checkAuthentication && <h2>{checkAuthentication}</h2>}
          <hr className="mt-5 bg-accent h-[2px] rounded" />
        </div>
        {loading ? (
          <h1 className="text-center w-full mt-10">Loading...</h1>
        ) : (
          <>
            {" "}
            <div>
              {personalPost?.map((post: any) => (
                <DashboardPost key={post._id} post={post}></DashboardPost>
              ))}
            </div>
            {personalPost?.length < 1 && (
              <div className="flex justify-center ml-7 lg:ml-24">
                <div>
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
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default PrivateRoute(Dashboard);
