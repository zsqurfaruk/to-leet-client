/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineLocationOn, MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const Products = ({ product }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const lang = useSelector((state: any) => state.language.language);
  const post =
    "4l5gJNnHjXPcI5jCtff8vWW8vR#4oaWbB0TKs204^%$ACcaBTpXPwH00LczlXf8vWWCtCfds";

  const banglaNumber = product.amount
    .toString()
    .replace(/0/g, "০")
    .replace(/1/g, "১")
    .replace(/2/g, "২")
    .replace(/3/g, "৩")
    .replace(/4/g, "৪")
    .replace(/5/g, "৫")
    .replace(/6/g, "৬")
    .replace(/7/g, "৭")
    .replace(/8/g, "৮")
    .replace(/9/g, "৯");
  const dateString = product?.updatedAt?.slice(0, 10);
  const dateParts = dateString.split("-");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  return (
    <Link
      href={{
        pathname: `/details/${product._id}`,
        query: { post: encodeURIComponent(JSON.stringify(post)) },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      passHref
    >
      <div className="card card-compact shadow shadow-gray-800 hover:shadow-warning rounded-sm bg-white">
        <figure>
          <img
            src={product?.img1}
            alt="Room"
            className={
              isHovered
                ? "h-[11.5rem] w-full relative scale-125 ease-in-out duration-700"
                : "h-[11.5rem] w-full ease-in-out duration-700"
            }
            draggable="false"
          />
        </figure>
        <div className="card-body min-h-44">
          <div className="-mt-2 text-warning">
            {product?.title?.length > 35 ? (
              <h2 className="text-[13px] font-semibold">
                {" "}
                {product?.title.slice(0, 35)}...
              </h2>
            ) : (
              <h2 className="text-[13px] font-semibold"> {product?.title}</h2>
            )}
          </div>
          <div className="-mt-1 absolute top-[145px] right-2">
            {product?.available ? (
              <>
                {!lang ? (
                  <h5 className="bg-white text-warning p-1 rounded text-center">
                    Booked
                  </h5>
                ) : (
                  <h5 className="bg-white text-warning p-1 rounded text-center text-[12px]">
                    ভাড়া হয়েছে
                  </h5>
                )}
              </>
            ) : (
              <>
                {!lang ? (
                  <h5 className="bg-warning text-white rounded p-1 text-center">
                    Available
                  </h5>
                ) : (
                  <h5 className="bg-warning text-white rounded p-1 text-center text-[12px]">
                    এখনও খালি আছে
                  </h5>
                )}
              </>
            )}
          </div>
          <div className="flex justify-between -mt-1">
            {!lang ? (
              <h2 className="font-semibold"> {product?.type?.eng} </h2>
            ) : (
              <h2 className="font-semibold"> {product?.type?.ban} </h2>
            )}
            {!lang ? (
              <h2 className="font-semibold">{formattedDate}</h2>
            ) : (
              <h2 className="font-semibold text-[13px]">
                {product?.updatedAt
                  ? formattedDate
                      .replace(/0/g, "০")
                      .replace(/1/g, "১")
                      .replace(/2/g, "২")
                      .replace(/3/g, "৩")
                      .replace(/4/g, "৪")
                      .replace(/5/g, "৫")
                      .replace(/6/g, "৬")
                      .replace(/7/g, "৭")
                      .replace(/8/g, "৮")
                      .replace(/9/g, "৯")
                  : ""}
              </h2>
            )}
          </div>

          <div className="flex justify-between -mt-1">
            {product?.bedrooms?.eng && (
              <div className="flex gap-1">
                <MdOutlineBedroomChild className="text-warning mt-[2px] w-4 -ml-[2px]" />
                {!lang ? (
                  <h2>Bedroom: {product?.bedrooms?.eng}</h2>
                ) : (
                  <h2>
                    <span className="text-[13px]">বেডরুম</span>:{" "}
                    {product?.bedrooms?.ban}
                  </h2>
                )}
              </div>
            )}

            {product?.totalBed && (
              <div
                className={
                  product?.type?.eng === "Mess-(Male)" ||
                  product?.type?.eng === "Mess-(Female)" ||
                  product?.type?.eng === "Sublet-(Male)" ||
                  product?.type?.eng === "Sublet-(Female)"
                    ? "flex"
                    : "hidden"
                }
              >
                <MdOutlineBedroomChild
                  className={
                    product?.totalBed?.eng === "Single room"
                      ? "inline text-warning mt-[2px] w-4  mr-1"
                      : "hidden"
                  }
                />
                {!lang ? (
                  <h2 className="flex">
                    <span
                      className={
                        product?.totalBed?.eng === "Single room"
                          ? "hidden"
                          : "flex"
                      }
                    >
                      <MdOutlineBedroomChild
                        className={
                          product?.bedrooms?.eng
                            ? "hidden"
                            : "text-warning mt-[2px] w-4 mr-[2px]"
                        }
                      />{" "}
                      Total Bed:
                    </span>
                    {product?.totalBed?.eng}
                  </h2>
                ) : (
                  <h2 className="flex">
                    <span
                      className={
                        product?.totalBed?.eng === "Single room"
                          ? "hidden"
                          : "flex text-[13px]"
                      }
                    >
                      <MdOutlineBedroomChild
                        className={
                          product?.bedrooms?.eng
                            ? "hidden"
                            : "text-warning mt-[2px] w-4 mr-[2px]"
                        }
                      />{" "}
                      মোট বেড:
                    </span>{" "}
                    <span
                      className={
                        product?.totalBed?.eng === "Single room"
                          ? "text-[13px]"
                          : "text-sm"
                      }
                    >
                      {product?.totalBed?.ban}
                    </span>
                  </h2>
                )}
              </div>
            )}

            {product?.bedNumber && (
              <div className="flex">
                <MdOutlineBedroomChild
                  className={
                    product?.bedrooms?.eng
                      ? "hidden"
                      : "inline  text-warning mt-[2px] w-4  mr-1"
                  }
                />
                {!lang ? (
                  <h2>Empty Bed: {product?.bedNumber?.eng} </h2>
                ) : (
                  <h2>
                    <span className="text-[13px]">ফাঁকা বেড</span>:{" "}
                    {product?.bedNumber?.ban}{" "}
                  </h2>
                )}
              </div>
            )}
            {product?.bathrooms && (
              <div
                className={
                  product?.type?.eng === "Mess-(Male)" ||
                  product?.type?.eng === "Mess-(Female)" ||
                  product?.type?.eng === "Sublet-(Male)" ||
                  product?.type?.eng === "Sublet-(Female)"
                    ? "hidden"
                    : "flex"
                }
              >
                <FaBath className="h-3 w-4 mt-[2px] text-warning mr-1"></FaBath>
                {!lang ? (
                  <h2>Bathroom: {product?.bathrooms?.eng}</h2>
                ) : (
                  <h2>
                    <span className="text-[13px]">বাথরুম</span>:{" "}
                    {product?.bathrooms?.ban}
                  </h2>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between -mt-1">
            <div className="flex">
              <TbCurrencyTaka className="w-5 h-[17.5px] -ml-1  mt-[.5px] text-warning" />
              {!lang ? (
                <h2>
                  {product?.type?.eng === "Mess-(Male)" ||
                  product?.type?.eng === "Mess-(Female)" ? (
                    <>
                      <span
                        className={
                          product?.totalBed?.eng === "Single room"
                            ? "hidden"
                            : "inline"
                        }
                      >
                        Per
                      </span>
                      Seat:
                    </>
                  ) : (
                    "Rent:"
                  )}
                  {product?.amount} Taka
                </h2>
              ) : (
                <h2>
                  {product?.type?.eng === "Mess-(Male)" ||
                  product?.type?.eng === "Mess-(Female)" ? (
                    <>
                      <span
                        className={
                          product?.totalBed?.eng === "Single room"
                            ? "hidden"
                            : "inline text-[13px]"
                        }
                      >
                        প্রতি
                      </span>
                      <span className="text-[13px]">সিটঃ</span>
                    </>
                  ) : (
                    <span className="text-[13px]">ভাড়াঃ</span>
                  )}
                  {banglaNumber} <span className="text-[13px]">টাকা </span>
                </h2>
              )}
            </div>

            <div>
              {!lang ? (
                <h2> {product?.negotiable && <span>Negotiable</span>}</h2>
              ) : (
                <h2 className="text-[13px]">
                  {product?.negotiable && (
                    <span className="text-[12.8px]">আলোচনা সাপেক্ষে</span>
                  )}
                </h2>
              )}
            </div>
          </div>
          <div className="divider -mt-1"></div>
          <div className="flex justify-between -mt-5">
            <div>
              {product?.division?.eng && (
                <div className="flex ">
                  <MdOutlineLocationOn className="text-warning h-4 w-5 -ml-1" />
                  {!lang ? (
                    <h2>
                      <span></span> {product?.districts?.eng}{" "}
                    </h2>
                  ) : (
                    <h2 className="text-[13px]">
                      <span></span> {product?.districts?.ban}{" "}
                    </h2>
                  )}
                  {!lang ? (
                    <h2>
                      <span>, </span> {product?.division?.eng}{" "}
                    </h2>
                  ) : (
                    <h2 className="text-[13px]">
                      <span>, </span> {product?.division?.ban}{" "}
                    </h2>
                  )}
                </div>
              )}
              {product?.cityName?.eng && (
                <div className="flex">
                  <MdOutlineLocationOn className="text-warning h-4 w-5 -ml-1" />
                  {!lang ? (
                    <h2>
                      {product?.areaName?.eng.length > 17 ? (
                        <span> {product?.areaName?.eng.slice(0, 17)}</span>
                      ) : (
                        <span>{product?.areaName?.eng}</span>
                      )}
                    </h2>
                  ) : (
                    <h2 className="text-[13px]">
                      {product?.areaName?.ban.length > 18 ? (
                        <span> {product?.areaName?.ban.slice(0, 18)}</span>
                      ) : (
                        <span>{product?.areaName?.ban}</span>
                      )}
                    </h2>
                  )}
                  {!lang ? (
                    <h2>
                      <span>, </span> {product?.cityName?.eng}
                    </h2>
                  ) : (
                    <h2 className="text-[13px]">
                      <span>, </span> {product?.cityName?.ban}
                    </h2>
                  )}
                </div>
              )}
            </div>
            <h2 className="border border-warning px-1 rounded-sm">
              {!lang ? (
                <span className="text-warning ">Details</span>
              ) : (
                <span className="text-warning text-xs">বিস্তারিত</span>
              )}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
