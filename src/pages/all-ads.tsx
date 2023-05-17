import { APIContext } from "@/Context/ApiContext/ApiContext";
import AllPost from "@/components/Home/AllPost/AllPost";
import React, { useContext } from "react";

function AllAds() {
  const { counterPosts, handleFilter }: any = useContext(APIContext);

  return (
    <div className="lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
       
      {counterPosts.map((post:any) => (
        <AllPost key={post._id} post={post}></AllPost>
      ))}
    </div>
  );
}
export default  AllAds;



