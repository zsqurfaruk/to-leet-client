/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import DashboardPost from "@/components/Home/AllPost/DashboardPost";
import PrivateRoute from "@/routes/privateRoute";
import Head from "next/head";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const Dashboard = () => {
  const {lang}:any = useContext(FilterContext)
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const email = Cookies.get("authentication");
  const [personalPost, setPersonalPost] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const cookieValue = Cookies.get('token');
  const token = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
  useEffect(() => {
    setLoading(true);
    fetch(`https://zsqur.to-leet.com/api/v1/product/user/email/${email}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPersonalPost(data);
        setLoading(false);
      });
  }, [email, token]);

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

  
  return (
    <>
      <Head>
        <title>To-Leet - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with To-Leet's extensive listings for rent. To-Leet is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="to-leet.com" />
        <meta
          name="keyword"
          content="To Let, To-Let, to let, to-let, to leet, toleet, To-Leet, To Leet, To Leet, Basa Vara, Vara, Rent, rent, leet, house rent | havenly | haven | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://to-leet.com/" />
        <meta
          property="og:title"
          content="To-Leet - Dashboard | toleet | havenly | haven | Tolet | Basa Vara | toleet | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="to-leet.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="To-Leet - Dashboard | toleet | havenly | haven |Tolet | Basa Vara | toleet | rent" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with To-Leet's extensive listings for rent. To-Leet is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="to-leet.com" />
        <meta
          name="keyword"
          content="To-Let, To Let, tolet, ToLet, to let, to-let, to leet, toleet, To-Leet, To Leet, To Leet, Basa Vara, Vara, Rent, rent, leet, house rent| havenly | haven | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://to-leet.com/" />
        <meta
          property="og:title"
          content="To-Leet - Dashboard | toleet | havenly | haven | Tolet | Basa Vara | toleet | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="to-leet.com" />
      </Head>
      <div className="lg:flex gap-10 w-full lg:w-10/12 mx-auto bg-white p-5 md:p-10  md:scale-100">
        <div className="basis-1/5  pb-5 mb-5">
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
            <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-5">
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
