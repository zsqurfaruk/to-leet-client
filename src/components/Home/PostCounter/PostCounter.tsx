import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext } from "react";
import CountUp from "react-countup";
import Cookies from 'js-cookie';

function PostCounter() {
  const { counterPosts, userCounter }: any = useContext(APIContext);
  const lang = Cookies.get("lan")
  return (
    <div className="bg-warning bg-opacity-90">
      <hr className="w-10/12 mx-auto"/>
      <div className="flex justify-evenly gap-2 w-10/12 mx-auto pb-20 pt-10 mt-10">
        <div className="text-primary border-2 border-accent shadow-md shadow-accent text-xl md:text-3xl md:font-semibold  p-10 rounded">
         {!lang ? <span>Total Ads:</span> : <span className="text-lg md:text-2xl">মোট বিজ্ঞাপনঃ </span>} <CountUp end={counterPosts?.length} duration={10} />
        </div>
        <div className="text-primary text-xl md:text-3xl md:font-semibold  border-2 border-accent shadow-md shadow-accent p-8 md:p-10 rounded">
          {!lang ? <span>Total Users:</span> : <span className="text-lg md:text-2xl">মোট ব্যবহারকারীঃ </span> } <CountUp end={userCounter?.length} duration={10} />
        </div>
      </div>
      <hr className="w-10/12 mx-auto"/>
    </div>
  );
}
export default PostCounter;
