/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineLocationOn} from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { StateContext } from "@/Context/StateContext/StateContext";

function Post({ post }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const { setChangedDetailsPic }: any = useContext(StateContext);
  const lang = useSelector((state: any) => state.language.language);
  const posts = {
    info: "d67nmjk*9867&n3$h!5ngo35%g^n8klo%gvb7&bj11fgfgr255rtrt",
  };
  const banglaNumber = post.amount
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
  const dateString = post?.updatedAt?.slice(0, 10);
  const dateParts = dateString.split("-");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  return (
    <Link
    href={{
      pathname: `/details/${post._id}`,
      query: { post: encodeURIComponent(JSON.stringify(posts)) },
    }}
    onClick={()=>setChangedDetailsPic(false)}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    passHref
  >
    <div className="card card-compact shadow shadow-gray-800 hover:shadow-warning rounded-sm bg-white">
      <figure>
        <img
          src={post?.img1}
          alt="Room"
          className={isHovered ? "h-[12rem] w-full relative scale-125 ease-in-out duration-700" : "h-[12rem] w-full  ease-in-out duration-700"}
          draggable="false"
        />
      </figure>
      <div className="card-body min-h-44">
        <div className="-mt-2 text-warning">
          {post?.title?.length > 30 ? (
            <h2 className="font-semibold">
              {" "}
              {post?.title.slice(0, 30)}...
            </h2>
          ) : (
            <h2 className="font-semibold"> {post?.title}</h2>
          )}
        </div>
        <div className="-mt-1 absolute top-[145px] right-2">
          {post?.available ? (
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
            <h2 className="font-semibold"> {post?.type?.eng} </h2>
          ) : (
            <h2 className="font-semibold"> {post?.type?.ban} </h2>
          )}
          {!lang ? (
            <h2 className="font-semibold">{formattedDate}</h2>
          ) : (
            <h2 className="font-semibold text-sm md:text-[13px]">
              {post?.updatedAt
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
        <div className="divider -my-1 -mt-2"></div>
        <div className="flex justify-between -mt-1">
          {post?.bedrooms?.eng && (
            <div className="flex gap-1">
              <BiBed className="text-warning mt-[2px] w-4 -ml-[2px]" />
              {!lang ? (
                <h2>Bedroom: {post?.bedrooms?.eng}</h2>
              ) : (
                <h2>
                  <span className="text-sm md:text-[13px]">বেডরুম</span>:{" "}
                  {post?.bedrooms?.ban}
                </h2>
              )}
            </div>
          )}

          {post?.totalBed && (
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
              <BiBed
                className={
                  post?.totalBed?.eng === "Single room"
                    ? "inline text-warning mt-[2px] w-4  mr-1"
                    : "hidden"
                }
              />
              {!lang ? (
                <h2 className="flex">
                  <span
                    className={
                      post?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "flex"
                    }
                  >
                    <BiBed
                      className={ post?.bedrooms?.eng ? "hidden" :
                          "text-warning mt-[2px] w-4 mr-[2px]"}
                    /> Total Bed:
                  </span> <span className="pl-1">{post?.totalBed?.eng} </span>
                </h2>
              ) : (
                <h2 className="flex">
                  <span
                    className={
                      post?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "flex text-sm md:text-[13px]"
                    }
                  >
                      <BiBed
                      className={post?.bedrooms?.eng ? "hidden" :
                          "text-warning mt-[2px] w-4 mr-[2px]"}
                    /> মোট বেড:</span> <span className={post?.totalBed?.eng === "Single room" ? "text-sm md:text-[13px] pl-1" : "text-sm pl-1"}>  {post?.totalBed?.ban} </span>
                </h2>
              )}
            </div>
          )}

          {post?.bedNumber && (
            <div className="flex">
              <BiBed
                className={
                  post?.bedrooms?.eng
                    ? "hidden"
                    : "inline  text-warning mt-[2px] w-4  mr-1"
                }
              />
              {!lang ? (
                <h2>Empty Bed: {post?.bedNumber?.eng} </h2>
              ) : (
                <h2>
                  <span className="text-sm md:text-[13px]">ফাঁকা বেড</span>:{" "}
                  {post?.bedNumber?.ban}{" "}
                </h2>
              )}
            </div>
          )}
          {post?.bathrooms && (
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
              <FaBath className="h-3 w-4 mt-[2px] text-warning mr-1"></FaBath>
              {!lang ? (
                <h2>Bathroom: {post?.bathrooms?.eng}</h2>
              ) : (
                <h2>
                  <span className="text-sm md:text-[13.8px]">বাথরুম</span>: {post?.bathrooms?.ban}
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
                {post?.type?.eng === "Mess-(Male)" ||
                post?.type?.eng === "Mess-(Female)" ? (
                  <>
                    <span
                      className={
                        post?.totalBed?.eng === "Single room"
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
                <span className="pl-1">{post?.amount} Taka </span>
              </h2>
            ) : (
              <h2>
                {post?.type?.eng === "Mess-(Male)" ||
                post?.type?.eng === "Mess-(Female)" ? (
                  <>
                    <span
                      className={
                        post?.totalBed?.eng === "Single room"
                          ? "hidden"
                          : "inline text-sm md:text-[13px]"
                      }
                    >
                      প্রতি
                    </span> 
                    <span className="text-sm md:text-[13px]">সিটঃ</span>
                  </>
                ) : (
                  <span className="text-sm md:text-[13px]">ভাড়াঃ </span>
                )} {banglaNumber} <span className="text-sm md:text-[13px]">টাকা </span>
              </h2>
            )}
          </div>

          <div>
            {!lang ? (
              <h2> {post?.negotiable && <span>Negotiable</span>}</h2>
            ) : (
              <h2 className="text-sm md:text-[13px]">
                {post?.negotiable && (
                  <span className="text-[13.8px] md:text-[12.8px]">আলোচনা সাপেক্ষে</span>
                )}
              </h2>
            )}
          </div>
        </div>
        <div className="divider -mt-1"></div>
        <div className="flex justify-between -mt-5">
          <div>
            {post?.division?.eng && (
              <div className="flex ">
                <MdOutlineLocationOn className="text-warning h-4 w-5 -ml-1" />
                {!lang ? (
                  <h2>
                    <span></span> {post?.districts?.eng}{" "}
                  </h2>
                ) : (
                  <h2 className="text-sm md:text-[13px]">
                    <span></span> {post?.districts?.ban}{" "}
                  </h2>
                )}
                {!lang ? (
                  <h2>
                    <span>, </span> {post?.division?.eng}{" "}
                  </h2>
                ) : (
                  <h2 className="text-sm md:text-[13px]">
                    <span>, </span> {post?.division?.ban}{" "}
                  </h2>
                )}
              </div>
            )}
            {post?.cityName?.eng && (
              <div className="flex">
                <MdOutlineLocationOn className="text-warning h-4 w-5 -ml-1" />
                {!lang ? (
                  <h2>
                    {post?.areaName?.eng.length > 17 ? (
                      <span> {post?.areaName?.eng.slice(0, 17)}</span>
                    ) : (
                      <span>{post?.areaName?.eng}</span>
                    )}
                  </h2>
                ) : (
                  <h2 className="text-sm md:text-[13px]">
                    {post?.areaName?.ban.length > 18 ? (
                      <span> {post?.areaName?.ban.slice(0, 18)}</span>
                    ) : (
                      <span>{post?.areaName?.ban}</span>
                    )}
                  </h2>
                )}
                {!lang ? (
                  <h2>
                    <span>, </span> {post?.cityName?.eng}
                  </h2>
                ) : (
                  <h2 className="text-sm md:text-[13px]">
                    <span>, </span> {post?.cityName?.ban}
                  </h2>
                )}
              </div>
            )}
          </div>
          <h2 className="border border-warning px-1 rounded-sm">
            {!lang ? (
              <span className="text-warning ">
               Details
              </span>
            ) : (
              <span className="text-warning text-xs">
                বিস্তারিত  
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  </Link>
  );
}

export default Post;
