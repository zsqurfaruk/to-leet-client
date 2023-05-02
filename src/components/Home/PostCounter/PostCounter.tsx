import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext } from "react";
import CountUp from "react-countup";

function PostCounter() {
  const { counterPosts }: any = useContext(APIContext);
  return (
    <div className="bg-accent bg-opacity-10 text-accent"> 
      <h1 className=" text-3xl font-semibold py-10 flex justify-center">Posts</h1>
      <div className="  bg-opacity-70 text-3xl font-semibold pb-10 flex justify-center">
        <CountUp end={counterPosts.length} duration={10} />
      </div>
    </div>
  );
}
export default PostCounter;
