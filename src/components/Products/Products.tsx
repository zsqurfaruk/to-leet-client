/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineLocationOn,MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const Products = ({ product }: any) => {
  const lang = useSelector((state:any) => state.language.language);
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
    passHref
  >
    <div className="card card-compact shadow shadow-gray-700 hover:shadow-warning rounded-sm  hover:scale-105 hover:duration-700 bg-white">
      <figure>
        <img
          src={product?.img1}
          alt="Shoes"
          className="h-44 w-full relative"
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
        <div className="-mt-1 absolute top-[145px] right-2 bg-white">
          {product?.available ? (
            <>
              {!lang ? (
                <h5 className="bg-white text-warning p-1 text-center">
                  Booked
                </h5>
              ) : (
                <h5 className="bg-white text-warning p-1 text-center text-[13px]  ">
                  ভাড়া হয়েছে।
                </h5>
              )}
            </>
          ) : (
            <>
              {!lang ? (
                <h5 className="bg-accent text-warning p-1 text-center    ">
                  Available
                </h5>
              ) : (
                <h5 className="bg-accent text-warning p-1 text-center text-[13px]  ">
                  এখনও খালি আছে।
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
        
        {/* {
            product?.university?.eng && <div>
               <h2 className="">Beside: {product?.university?.eng}</h2>
            </div>
          } */}

        <div className="flex justify-between -mt-1">
       {product?.bedrooms?.eng && (
            <div className="flex gap-1">
               <MdOutlineBedroomChild className=" text-warning mt-[2px] w-4 -ml-[2px]"></MdOutlineBedroomChild>
              {!lang ? (
                <h2>Bedroom: {product?.bedrooms?.eng}</h2>
              ) : (
                <h2><span className="text-[13px]">বেডরুম</span>: {product?.bedrooms?.ban}</h2>
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
              {!lang ? (
                <h2>
                  <span
                    className={
                      product?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "inline"
                    }
                  >
                    Total Bed:
                  </span>{" "}
                  {product?.totalBed?.eng}{" "}
                </h2>
              ) : (
                <h2>
                  <span
                    className={
                      product?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "inline text-[13px]"
                    }
                  >
                    মোট বেড:
                  </span>{" "}
                  {product?.totalBed?.ban}{" "}
                </h2>
              )}
            </div>
          )}

          {product?.bedNumber && (
            <div>
              {!lang ? (
                <h2>Empty Bed: {product?.bedNumber?.eng} </h2>
              ) : (
                <h2><span className="text-[13px]">ফাঁকা বেড</span>: {product?.bedNumber?.ban} </h2>
              )}
            </div>
          )}
          {
            product?.bathrooms && <div
            className={
              product?.type?.eng === "Mess-(Male)" ||
              product?.type?.eng === "Mess-(Female)" ||
              product?.type?.eng === "Sublet-(Male)" ||
              product?.type?.eng === "Sublet-(Female)"
                ? "hidden"
                : "flex"
            }
          >
            <FaBath className="h-3 w-4 mt-[2px] text-warning"></FaBath>
            {!lang ? (
              <h2>Bathroom: {product?.bathrooms?.eng}</h2>
            ) : (
              <h2><span className="text-[13px]">বাথরুম</span>: {product?.bathrooms?.ban}</h2>
            )}
          </div>
          }
        </div>
        <div className="flex justify-between -mt-1">
          <div className="flex">
            <TbCurrencyTaka className="w-5 h-[17px] -ml-1  mt-[2px] text-warning"/>
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
                      Per{" "}
                    </span>
                    Seat:
                  </>
                ) : (
                  "Rent:"
                )}{" "}
                {product?.amount} Taka{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                {product?.type?.eng === "Mess-(Male)" ||
                product?.type?.eng === "Mess-(Female)"  ? (
                  <>
                    <span
                      className={
                        product?.totalBed?.eng === "Single room"
                          ? "hidden"
                          : "inline text-[13px]"
                      }
                    >
                      প্রতি
                    </span>{" "}
                    <span className="text-[13px]">সিটঃ</span>
                  </>
                ) : (
                  <span className="text-[13px]">ভাড়াঃ</span> )} {banglaNumber} <span className="text-[13px]">টাকা </span>
              </h2>
            )}
          </div>

          <div>
            {!lang ? (
              <h2> {product?.negotiable && <span>Negotiable</span> }</h2>
            ) : (
              <h2 className="text-[13px]">
             
                {product?.negotiable && <span className="text-[12.8px]">আলোচনা সাপেক্ষে</span> }
              </h2>
            )}
          </div>
        </div>
         <div className="divider -mt-1"></div>
         <div className="flex justify-between -mt-5">
         <div>
         {product?.division?.eng && (
          <div className="flex ">
            <MdOutlineLocationOn className="text-warning h-4 w-5 -ml-1"/>
            {!lang ? (
              <h2>
                <span></span> {product?.districts?.eng}{" "}
              </h2>
            ) : (
              <h2 className="text-[13px]">
                {" "}
                <span></span> {product?.districts?.ban}{" "}
              </h2>
            )}
            {!lang ? (
              <h2>
                <span>, </span> {product?.division?.eng}{" "}
              </h2>
            ) : (
              <h2 className="text-[13px]">
                {" "}
                <span>, </span> {product?.division?.ban}{" "}
              </h2>
            )}
          </div>
        )}
        {product?.cityName?.eng && (
          <div className="flex">
            <MdOutlineLocationOn className="text-warning h-4 w-5 -ml-1"/>{!lang ? (
              <h2>
                  {product?.areaName?.eng.length > 17 ? <span> {product?.areaName?.eng.slice(0,17)}</span> :  <span>{product?.areaName?.eng}</span> }
              </h2>
            ) : (
              <h2 className="text-[13px]">
                {" "}
                {product?.areaName?.ban.length > 18 ? <span> {product?.areaName?.ban.slice(0,18)}</span> :  <span>{product?.areaName?.ban}</span> }
              </h2>
            )}
            {!lang ? (
              <h2>
                {" "}
                <span>, </span> {product?.cityName?.eng}
              </h2>
            ) : (
              <h2 className="text-[13px]">
                {" "}
                <span>, </span> {product?.cityName?.ban}
              </h2>
            )}
          </div>
        )}
         </div>
        <h2>
          {" "}
          {/* {product?.description?.slice(0, 50)}... */}
          {!lang ? (
            <span className="text-warning  hover:border-b hover:border-warning">
              See Details
            </span>
          ) : (
            <span className="text-warning text-xs  hover:border-b hover:border-warning">
              বিস্তারিত দেখুন{" "}
            </span>
          )}
        </h2>
         </div>
      </div>
    </div>
  </Link>
  );
};

export default Products;
