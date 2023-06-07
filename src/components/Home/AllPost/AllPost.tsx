/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";

function AllPost({ post }: any) {
  const lang = Cookies.get("lan");
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
            <img src={post?.img1} alt="Shoes" className="h-36 w-full" />
          </figure>
          <div className="card-body h-64 py-2">
            <h2 className="text-lg font-bold"> {post?.title}</h2>
            {post?.available ? (
              <>
                {!lang ? (
                  <h5 className="border-warning border-2 text-center rounded-full">
                    Booked
                  </h5>
                ) : (
                  <h5 className="border-warning border-2 text-center rounded-full text-sm pt-[2px]">
                    ভাড়া হয়েছে।
                  </h5>
                )}
              </>
            ) : (
              <>
                {!lang ? (
                  <h5 className="border-accent border-2 text-center rounded-full font-semibold">
                    Available
                  </h5>
                ) : (
                  <h5 className="border-accent border-2 text-center rounded-full text-sm pt-[2px] font-semibold">
                    এখনও খালি আছে।
                  </h5>
                )}
              </>
            )}
            <div className="flex justify-between">
              {!lang ? (
                <h2 className="font-semibold"> {post?.type?.eng} </h2>
              ) : (
                <h2 className="font-semibold"> {post?.type?.ban} </h2>
              )}

              <h2 className="font-semibold">
                 {post?.updatedAt?.slice(0, 10)}
              </h2>
            </div>
            {post?.division?.eng && (
              <div className="flex justify-between">
                {!lang ? (
                  <h2>
                    <span  >District: </span>{" "}
                    {post?.districts?.eng}{" "}
                  </h2>
                ) : (
                  <h2>
                    {" "}
                    <span > জেলা:</span>{" "}
                    {post?.districts?.ban}{" "}
                  </h2>
                )}
                {!lang ? (
                  <h2>
                    <span  >Division: </span>{" "}
                    {post?.division?.eng}{" "}
                  </h2>
                ) : (
                  <h2>
                    {" "}
                    <span  > বিভাগ:</span>{" "}
                    {post?.division?.ban}{" "}
                  </h2>
                )}
              </div>
            )}
            {post?.cityName?.eng && (
              <div className="flex justify-between -mt-[6px]">
                {!lang ? (
                  <h2>
                    {" "}
                    <span  >Area:</span>{" "}
                    {post?.areaName?.eng}
                  </h2>
                ) : (
                  <h2>
                    {" "}
                    <span  > এলাকা:</span>{" "}
                    {post?.areaName?.ban}
                  </h2>
                )}
                {!lang ? (
                  <h2>
                    {" "}
                    <span  >City:</span>{" "}
                    {post?.cityName?.eng}
                  </h2>
                ) : (
                  <h2>
                    {" "}
                    <span  >শহর:</span>{" "}
                    {post?.cityName?.ban}
                  </h2>
                )}
              </div>
            )}
            {/* {
              post?.university?.eng && <div>
                 <h2 className="">Beside: {post?.university?.eng}</h2>
              </div>
            } */}

            <div className="flex justify-between -mt-[6px]">
              {post?.bedrooms?.eng && (
                <div>
                  {!lang ? (
                    <h2>Bedrooms: {post?.bedrooms?.eng}</h2>
                  ) : (
                    <h2>বেডরুম সংখ্যা : {post?.bedrooms?.ban}</h2>
                  )}
                </div>
              )}

              { post?.totalBed &&
                <div
                  className={
                    post?.type?.eng === "Mess-(Male)" ||
                    post?.type?.eng === "Mess-(Female)" ||
                    post?.type?.eng === "Sublet-(Male)" ||
                    post?.type?.eng === "Sublet-(Female)"
                      ? "flex"
                      : "hidden"
                  }
                >
                  {!lang ? (
                    <h2>Total Bed: {post?.totalBed?.eng} </h2>
                  ) : (
                    <h2>মোট বেড: {post?.totalBed?.ban} </h2>
                  )}
                </div>
              }

              {post?.bedNumber && (
                <div>
                  {!lang ? (
                    <h2>Empty Bed: {post?.bedNumber?.eng} </h2>
                  ) : (
                    <h2>ফাঁকা বেড: {post?.bedNumber?.ban} </h2>
                  )}
                </div>
              )}
              <div
                className={
                  post?.type?.eng === "Mess-(Male)" ||
                  post?.type?.eng === "Mess-(Female)" ||
                  post?.type?.eng === "Sublet-(Male)" ||
                  post?.type?.eng === "Sublet-(Female)"
                    ? "hidden"
                    : "flex"
                }
              >
                {!lang ? (
                  <h2>Bathrooms: {post?.bathrooms?.eng}</h2>
                ) : (
                  <h2> বাথরুম সংখ্যা: {post?.bathrooms?.ban}</h2>
                )}
              </div>
            </div>
            <div className="flex justify-between -mt-[6px]">
              <div>
              {!lang ? (
                <h2>{
                  post?.type?.eng === "Mess-(Male)" ||
                  post?.type?.eng === "Mess-(Female)" ||
                  post?.type?.eng === "Sublet-(Male)" ||
                  post?.type?.eng === "Sublet-(Female)"
                    ? "Per seat:"
                    : "Amount"
                }  {post?.amount} Taka </h2>
              ) : (
                <h2> {
                  post?.type?.eng === "Mess-(Male)" ||
                  post?.type?.eng === "Mess-(Female)" ||
                  post?.type?.eng === "Sublet-(Male)" ||
                  post?.type?.eng === "Sublet-(Female)"
                    ? "প্রতি সিটঃ"
                    : "ভাড়াঃ"
                }  {post?.amount} টাকা </h2>
              )}
              </div>

              {post?.negotiable && (
                <div>
                  {!lang ? (
                    <h2> {post?.negotiable ? "Negotiable" : "Fixed"} </h2>
                  ) : (
                    <h2 className="text-[13px]">
                      {" "}
                      {post?.negotiable ? "আলোচনা সাপেক্ষে" : "ফিক্সড"}
                    </h2>
                  )}
                </div>
              )}
            </div>

            <h2>
              {" "}
              {post?.description?.slice(0, 50)}...
              {!lang ? (
                <span className="text-warning">see more</span>
              ) : (
                <span className="text-warning text-xs">আরও দেখুন </span>
              )}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AllPost;
