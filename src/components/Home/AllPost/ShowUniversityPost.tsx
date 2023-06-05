/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ShowUniversityPost = ({ university }: any) => {
  const lang = Cookies.get("lan");
  const posts = {
    info: "g7j%u*9867&n3$h!5ngo35%g^n8klo%gvb7&bj11fgfgr255rtrt",
     
  };
  return (
    <div>
    <Link
      href={{
        pathname: `/details/${university._id}`,
        query: { post: encodeURIComponent(JSON.stringify(posts)) },
      }}
    >
      <div className="card card-compact bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={university?.img1} alt="Shoes" className="h-36 w-full" />
        </figure>
        <div className="card-body h-64 py-2">
          <h2 className="text-lg font-bold"> {university?.title}</h2>
          {
              university?.available ? <>
              {!lang ? (
              <h5 className="border-secondary border-2 text-center rounded-full">
                Booked
              </h5>
            ) : (
              <h5 className="border-secondary border-2 text-center rounded-full text-sm pt-[2px]">
                 ভাড়া হয়েছে।
              </h5>
            )}</> : <>{!lang ? (
              <h5 className="border-accent border-2 text-center rounded-full font-semibold">
                Available
              </h5>
            ) : (
              <h5 className="border-accent border-2 text-center rounded-full text-sm pt-[2px] font-semibold">
                 এখনও খালি আছে।
              </h5>
            )}</>
            }
          <div className="flex justify-between">
            {!lang ? (
              <h2 className="font-semibold"> {university?.type?.eng} </h2>
            ) : (
              <h2 className="font-semibold"> {university?.type?.ban} </h2>
            )}

            <h2>
              {!lang ? "Date:" : "তারিখঃ"} {university?.updatedAt?.slice(0, 10)}
            </h2>
          </div>
          {university?.division?.eng && (
            <div className="flex justify-between">
              {!lang ? (
                <h2>
                  <span className="font-semibold">District: </span>{" "}
                  {university?.districts?.eng}{" "}
                </h2>
              ) : (
                <h2>
                  {" "}
                  <span className="font-semibold"> জেলা:</span>{" "}
                  {university?.districts?.ban}{" "}
                </h2>
              )}
              {!lang ? (
                <h2>
                  <span className="font-semibold">Division: </span>{" "}
                  {university?.division?.eng}{" "}
                </h2>
              ) : (
                <h2>
                  {" "}
                  <span className="font-semibold"> বিভাগ:</span>{" "}
                  {university?.division?.ban}{" "}
                </h2>
              )}
            </div>
          )}
          {university?.cityName?.eng && (
            <div className="flex justify-between -mt-[6px]">
              {!lang ? (
                <h2>
                  {" "}
                  <span className="font-semibold">Area:</span>{" "}
                  {university?.areaName?.eng}
                </h2>
              ) : (
                <h2>
                  {" "}
                  <span className="font-semibold"> এলাকা:</span>{" "}
                  {university?.areaName?.ban}
                </h2>
              )}
              {!lang ? (
                <h2>
                  {" "}
                  <span className="font-semibold">City:</span>{" "}
                  {university?.cityName?.eng}
                </h2>
              ) : (
                <h2>
                  {" "}
                  <span className="font-semibold">শহর:</span>{" "}
                  {university?.cityName?.ban}
                </h2>
              )}
            </div>
          )}
          {/* {
            university?.university?.eng && <div>
               <h2 className="">Beside: {university?.university?.eng}</h2>
            </div>
          } */}

          <div className="flex justify-between -mt-[6px]">
            {university?.bedrooms?.eng && (
              <div>
                {!lang ? (
                  <h2>Bedrooms: {university?.bedrooms?.eng}</h2>
                ) : (
                  <h2>বেডরুম সংখ্যা : {university?.bedrooms?.ban}</h2>
                )}
              </div>
            )}
            {university?.bedNumber && (
              <div>
                {!lang ? (
                  <h2>Bed Number: {university?.bedNumber?.eng} </h2>
                ) : (
                  <h2> বেড সংখ্যা: {university?.bedNumber?.ban} </h2>
                )}
              </div>
            )}
            {!lang ? (
              <h2>Bathrooms: {university?.bathrooms?.eng}</h2>
            ) : (
              <h2> বাথরুম সংখ্যা: {university?.bathrooms?.ban}</h2>
            )}
          </div>
          <div className="flex justify-between -mt-[6px]">
            
              <div>
                {!lang ? (
                  <h2>Amount: {university?.amount} Taka </h2>
                ) : (
                  <h2> ভাড়াঃ {university?.amount} টাকা </h2>
                )}
              </div>
         
            {university?.negotiable && (
              <div>{!lang ? <h2>Negotiable </h2> : <h2 className="text-[13px]"> আলোচনা সাপেক্ষে</h2>}</div>
            )}
          </div>

          <h2>
            {" "}
            {university?.description?.slice(0, 50)}...
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
};

export default ShowUniversityPost;
