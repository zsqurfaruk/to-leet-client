/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function FilterAllPosts({ post }: any) {
  const lang = localStorage.getItem("lan");
  const posts = {
    info: "g7j%u*9867&n3$h!5ngo35%g^n8klo%gvb7&bj11fgfgr255rtrt",
     
  };
  return (
    <div>
      <Link
        href={{
          pathname: `/details/${post._id}`,
          query: { post: encodeURIComponent(JSON.stringify(posts)) },
        }}
      >
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={post?.img1} alt="Shoes" className="h-40 w-full" />
          </figure>
          <div className="card-body h-60">
            <h2 className="text-xl font-bold"> {post?.title}</h2>
            <div className="flex justify-between">
              {!lang ? (
                <h2 className="font-semibold"> {post?.type?.eng}</h2>
              ) : (
                <h2 className="font-semibold"> {post?.type?.ban}</h2>
              )}
              <h2>Date: {post?.updatedAt?.slice(0, 10)}</h2>
            </div>
            {/* {post?.university?.eng && (
              <div>
                {!lang ? (
                  <h2 className="">Beside: {post?.university?.eng}</h2>
                ) : (
                  <h2 className=""> {post?.university?.ban} এর পাশে</h2>
                )}
              </div>
            )} */}
            {post?.division?.eng && (
              <div className="flex justify-between">
                {!lang ? (
                  <h2>
                    <span className="font-semibold">District:</span>{" "}
                    {post?.districts?.eng}
                  </h2>
                ) : (
                  <h2>
                    <span className="font-semibold"> জেলা:</span>{" "}
                    {post?.districts?.ban}
                  </h2>
                )}
                {!lang ? (
                  <h2>
                    <span className="font-semibold">Division:</span>{" "}
                    {post?.division?.eng}
                  </h2>
                ) : (
                  <h2>
                    <span className="font-semibold"> বিভাগ:</span>{" "}
                    {post?.division?.ban}
                  </h2>
                )}
              </div>
            )}
            {post?.cityName?.eng && (
              <div className="flex justify-between">
                {!lang ? (
                  <h2>
                    <span className="font-semibold">Area:</span>{" "}
                    {post?.areaName?.eng}
                  </h2>
                ) : (
                  <h2>
                    <span className="font-semibold"> এলাকা:</span>{" "}
                    {post?.areaName?.ban}
                  </h2>
                )}
                {!lang ? (
                  <h2>
                    <span className="font-semibold">City:</span>{" "}
                    {post?.cityName?.eng}
                  </h2>
                ) : (
                  <h2>
                    <span className="font-semibold">শহর:</span>{" "}
                    {post?.cityName?.ban}
                  </h2>
                )}
              </div>
            )}
            

            <div className="flex justify-between">
              {
                post?.bedrooms?.eng && <div>{!lang ? (
                  <h2>Bedrooms: {post?.bedrooms?.eng}</h2>
                ) : (
                  <h2>বেডরুম সংখ্যা : {post?.bedrooms?.ban}</h2>
                )}</div>
              }
              {post?.bedNumber?.eng && (
                <div>
                  {!lang ? (
                    <h2>Bed Number:{post?.bedNumber?.eng}</h2>
                  ) : (
                    <h2> বেড সংখ্যা:{post?.bedNumber?.ban}</h2>
                  )}
                </div>
              )}
              {!lang ? (
                <h2>Bathrooms: {post?.bathrooms?.eng}</h2>
              ) : (
                <h2> বাথরুম সংখ্যা: {post?.bathrooms?.ban}</h2>
              )}
            </div>

            <h2>
              {" "}
              {post?.description?.slice(0, 50)}...
              {!lang ? (
                <span className="text-blue-500">see more</span>
              ) : (
                <span className="text-blue-500 text-xs">আরও দেখুন </span>
              )}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FilterAllPosts;
