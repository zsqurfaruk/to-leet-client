import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext } from "react";
import CountUp from "react-countup";

function PostCounter() {
  const { counterPosts, userCounter }: any = useContext(APIContext);
  const lang = localStorage.getItem("lan")
  return (
    <div>
      <hr className="w-10/12 mx-auto"/>
      <div className="flex justify-evenly w-10/12 mx-auto pb-10 mt-10">
        <div className="bg-opacity-70 text-3xl font-semibold bg-gradient-to-r from-success via-accent to-success p-10 rounded">
         {lang ? "Total Ads:" : <span className="text-2xl">সর্বমোট বিজ্ঞাপনঃ </span>} <CountUp end={counterPosts?.length} duration={10} />
        </div>
        <div className="bg-opacity-70 text-3xl font-semibold bg-gradient-to-r from-success via-accent to-success p-10 rounded">
          {lang ?"Total Users:" : <span className="text-2xl">সর্বমোট ব্যবহারকারীঃ </span> } <CountUp end={userCounter?.length} duration={10} />
        </div>
      </div>
      <hr className="w-10/12 mx-auto"/>
    </div>
  );
}
export default PostCounter;
