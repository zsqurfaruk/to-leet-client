/* eslint-disable @next/next/no-img-element */
import { Progress } from "@material-tailwind/react";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lotti from "../image/lf20_jkbuwuhk.json";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import DashboardPost from "@/components/Home/AllPost/DashboardPost";
import privateRoute from "@/routes/privateRoute";
import Head from "next/head";
 

const Dashboard = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const [personalPost, setPersonalPost] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://zsqur.to-leet.com/api/v1/product/user/email/${email}`
    )
      .then((res) => res.json())
      .then((data) => {setPersonalPost(data)
        setLoading(false)});
  }, [email]);
  const lang = localStorage.getItem("lan");
  return (
    <>
      <Head>
        <title>To-Leet - Dashboard</title>
      </Head>
      <div className="lg:flex gap-10 w-full lg:w-10/12 mx-auto bg-white p-5 md:p-10  md:scale-100">
        <div className="basis-1/4  pb-5 mb-5">
          <h2>
            {firstName} {lastName}
          </h2>
          <h2>{email}</h2>
          <hr className="mt-5 bg-accent h-[2px] rounded" />
        </div>
        {
          loading ? <p className="text-center w-full mt-10">Loading...</p> : <> <div>
          {personalPost?.map((post: any) => (
            <DashboardPost key={post._id} post={post}></DashboardPost>
          ))}
        </div>
        {personalPost.length === 0 && (
          <div className="flex justify-center ml-7 lg:ml-24">
            <div>
              <Lottie
                className="h-52 w-52 ml-10"
                animationData={lotti}
                loop={true}
              ></Lottie>
              {!lang ? (
                <h1 className="text-4xl text-center mb-10">No data found.</h1>
              ) : (
                <h1 className="text-2xl -ml-5">এখনো কোন পোস্ট করা হয়নি।</h1>
              )}
            </div>
          </div>
        )}</>
        }
      </div>
    </>
  );
};
export default privateRoute(Dashboard);
