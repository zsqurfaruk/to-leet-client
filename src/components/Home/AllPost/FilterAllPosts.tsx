/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function FilterAllPosts({ post }: any) {
  return (
    <div>
      <Link
        href={{
          pathname: `/details/${post._id}`,
          query: { post: encodeURIComponent(JSON.stringify(post)) },
        }}
      >
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={post?.img1} alt="Shoes" className="h-40 w-full" />
          </figure>
          <div className="card-body h-60">
            <h2 className="text-xl font-bold"> {post?.title}</h2>
            <h2 className="font-semibold"> {post?.type?.eng}</h2>
            {post?.division?.eng && (
              <div className="flex justify-between">
                <h2>
                  <span className="font-semibold">District:</span>{" "}
                  {post?.districts?.eng}
                </h2>
                <h2>
                  <span className="font-semibold">Division:</span>{" "}
                  {post?.division?.eng}
                </h2>
              </div>
            )}
            {post?.cityName?.eng && (
              <div className="flex justify-between">
                <h2>
                  <span className="font-semibold">Area:</span>{" "}
                  {post?.areaName?.eng}
                </h2>
                <h2>
                  <span className="font-semibold">City:</span>{" "}
                  {post?.cityName?.eng}
                </h2>
              </div>
            )}
            {/* {
              post?.university?.eng && <div>
                 <h2 className="">Beside: {post?.university?.eng}</h2>
              </div>
            } */}

            <div className="flex justify-between">
              <h2>Bedrooms: {post?.bedrooms}</h2>
              <h2>Bathrooms: {post?.bathrooms}</h2>
            </div>
             
            <h2>
              {" "}
              {post.description.slice(0, 50)}...
              <span className="text-blue-500">see more</span>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FilterAllPosts;
