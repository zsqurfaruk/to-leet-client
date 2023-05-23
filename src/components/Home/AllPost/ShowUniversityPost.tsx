/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ShowUniversityPost = ({ university }: any) => {
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <div>
        <Link
          href={{
            pathname: `/details/${university._id}`,
            query: {
              university: encodeURIComponent(JSON.stringify(university)),
            },
          }}
        >
          <div className="card card-compact bg-base-100 shadow-xl mt-10">
            <figure>
              <img src={university?.img1} alt="Shoes" className="h-40 w-full" />
            </figure>
            <div className="card-body h-60">
              <h2 className="text-xl font-bold"> {university?.title}</h2>
              <div className="flex justify-between">
                {lang ? (
                  <h2 className="font-semibold"> {university?.type?.eng}</h2>
                ) : (
                  <h2 className="font-semibold"> {university?.type?.ban}</h2>
                )}
                <h2>Date: {university?.updatedAt?.slice(0, 10)}</h2>
              </div>
              {university?.division?.eng && (
                <div className="flex justify-between">
                  {lang ? (
                    <h2>
                      <span className="font-semibold">District:</span>{" "}
                      {university?.districts?.eng}
                    </h2>
                  ) : (
                    <h2>
                      <span className="font-semibold"> জেলা:</span>{" "}
                      {university?.districts?.ban}
                    </h2>
                  )}
                  {lang ? (
                    <h2>
                      <span className="font-semibold">Division:</span>{" "}
                      {university?.division?.eng}
                    </h2>
                  ) : (
                    <h2>
                      <span className="font-semibold"> বিভাগ:</span>{" "}
                      {university?.division?.ban}
                    </h2>
                  )}
                </div>
              )}
              {university?.cityName?.eng && (
                <div className="flex justify-between">
                  {lang ? (
                    <h2>
                      <span className="font-semibold">Area:</span>{" "}
                      {university?.areaName?.eng}
                    </h2>
                  ) : (
                    <h2>
                      <span className="font-semibold"> এলাকা:</span>{" "}
                      {university?.areaName?.ban}
                    </h2>
                  )}
                  {lang ? (
                    <h2>
                      <span className="font-semibold">City:</span>{" "}
                      {university?.cityName?.eng}
                    </h2>
                  ) : (
                    <h2>
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

              <div className="flex justify-between">
                {
                  university?.bedrooms?.eng && <div>{lang ? (
                    <h2>Bedrooms: {university?.bedrooms?.eng}</h2>
                  ) : (
                    <h2>বেডরুম সংখ্যা : {university?.bedrooms?.ban}</h2>
                  )}</div>
                }
                {university?.bedNumber && (
                <div>
                  {lang ? (
                    <h2>Bed Number:{university?.bedNumber?.eng}</h2>
                  ) : (
                    <h2> বেড সংখ্যা:{university?.bedNumber?.ban}</h2>
                  )}
                </div>
              )}
                {lang ? (
                  <h2>Bathrooms: {university?.bathrooms?.eng}</h2>
                ) : (
                  <h2> বাথরুম সংখ্যা: {university?.bathrooms?.ban}</h2>
                )}
              </div>

              <h2>
                {" "}
                {university?.description?.slice(0, 50)}...
                {lang ? (
                  <span className="text-blue-500">see more</span>
                ) : (
                  <span className="text-blue-500 text-xs">আরও দেখুন </span>
                )}
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShowUniversityPost;
