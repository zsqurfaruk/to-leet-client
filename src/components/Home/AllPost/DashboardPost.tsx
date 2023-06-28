/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const DashboardPost = ({ post }: any) => {
  const [updateReload, setUpdateReload] = useState(false);
  const {lang}:any = useContext(FilterContext)
  const { reload, setReload }: any = useContext(APIContext);

  const cookieValue = Cookies.get("token");
  const token = cookieValue
    ? JSON.parse(decodeURIComponent(cookieValue))
    : null;
  const handleUpdate = async () => {
    const res = await fetch(
      `https://zsqur.to-leet.com/api/v1/product/update/available/${post._id}`,
      {
        method: "PATCH",
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    const result = await res.json();
    if (result?.message === "success") {
      setUpdateReload(true);
      setReload(!reload);
      toast.success("আপডেট দেওয়ার জন্য ধন্যবাদ।");
    }
  };
  const posts = {
    info: "g7j%u*9867&n3$h!5ngo35%g^n8klo%gvb7&bj11fgfgr255rtrt",
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
  >
    <div className="card card-compact rounded">
      <figure>
        <img
          src={post?.img1}
          alt="Shoes"
          className="h-32 w-full "
          draggable="false"
        />
      </figure>
      <div className="card-body border-b border-l border-r border-gray-300 rounded-b min-h-44">
        <div className="-mt-2 text-warning">
          {post?.title?.length > 30 ? (
            <h2 className="text-md font-semibold">
              {" "}
              {post?.title.slice(0, 30)}...
            </h2>
          ) : (
            <h2 className="text-md font-semibold"> {post?.title}</h2>
          )}
        </div>
        <div className="-mt-1">
          {post?.available ? (
            <>
              {!lang ? (
                <h5 className="border-warning border-2 text-center rounded ">
                  Booked
                </h5>
              ) : (
                <h5 className="border-warning border-2 text-center rounded  text-[13px] pt-[2px]">
                  ভাড়া হয়েছে।
                </h5>
              )}
            </>
          ) : (
            <>
              {!lang ? (
                <h5 className="border-accent border-2 text-center rounded font-semibold">
                  Available
                </h5>
              ) : (
                <h5 className="border-accent border-2 text-center rounded text-[13px] pt-[2px] font-semibold">
                  এখনও খালি আছে।
                </h5>
              )}
            </>
          )}
        </div>
        <div className="flex justify-between">
          {!lang ? (
            <h2 className="font-semibold"> {post?.type?.eng} </h2>
          ) : (
            <h2 className="font-semibold"> {post?.type?.ban} </h2>
          )}
          {!lang ? (
            <h2 className="font-semibold">{formattedDate}</h2>
          ) : (
            <h2 className="font-semibold">
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
        {post?.division?.eng && (
          <div className="flex justify-between">
            {!lang ? (
              <h2>
                <span>District: </span> {post?.districts?.eng}{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> জেলা:</span> {post?.districts?.ban}{" "}
              </h2>
            )}
            {!lang ? (
              <h2>
                <span>Division: </span> {post?.division?.eng}{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> বিভাগ:</span> {post?.division?.ban}{" "}
              </h2>
            )}
          </div>
        )}
        {post?.cityName?.eng && (
          <div className="flex justify-between -mt-[6px]">
            {!lang ? (
              <h2>
                {" "}
                <span>Area:</span> {post?.areaName?.eng}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> এলাকা:</span> {post?.areaName?.ban}
              </h2>
            )}
            {!lang ? (
              <h2>
                {" "}
                <span>City:</span> {post?.cityName?.eng}
              </h2>
            ) : (
              <h2>
                {" "}
                <span>শহর:</span> {post?.cityName?.ban}
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
                <h2>Bedroom: {post?.bedrooms?.eng}</h2>
              ) : (
                <h2>বেডরুম সংখ্যা : {post?.bedrooms?.ban}</h2>
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
              {!lang ? (
                <h2>
                  <span
                    className={
                      post?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "inline"
                    }
                  >
                    Total Bed:
                  </span>{" "}
                  {post?.totalBed?.eng}{" "}
                </h2>
              ) : (
                <h2>
                  <span
                    className={
                      post?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "inline"
                    }
                  >
                    মোট বেড:
                  </span>{" "}
                  {post?.totalBed?.ban}{" "}
                </h2>
              )}
            </div>
          )}

          {post?.bedNumber && (
            <div>
              {!lang ? (
                <h2>Empty Bed: {post?.bedNumber?.eng} </h2>
              ) : (
                <h2>ফাঁকা বেড: {post?.bedNumber?.ban} </h2>
              )}
            </div>
          )}
          {
            post?.bathrooms && <div
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
              <h2>Bathroom: {post?.bathrooms?.eng}</h2>
            ) : (
              <h2> বাথরুম সংখ্যা: {post?.bathrooms?.ban}</h2>
            )}
          </div>
          }
        </div>
        <div className="flex justify-between -mt-[6px]">
          <div>
            {!lang ? (
              <h2>
                {post?.type?.eng === "Mess-(Male)" ||
                post?.type?.eng === "Mess-(Female)" ||
                post?.type?.eng === "Sublet-(Male)" ||
                post?.type?.eng === "Sublet-(Female)" ? (
                  <>
                    <span
                      className={
                        post?.totalBed?.eng === "Single room"
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
                {post?.amount} Taka{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                {post?.type?.eng === "Mess-(Male)" ||
                post?.type?.eng === "Mess-(Female)" ||
                post?.type?.eng === "Sublet-(Male)" ||
                post?.type?.eng === "Sublet-(Female)" ? (
                  <>
                    <span
                      className={
                        post?.totalBed?.eng === "Single room"
                          ? "hidden"
                          : "inline"
                      }
                    >
                      প্রতি
                    </span>{" "}
                    সিটঃ
                  </>
                ) : (
                  "ভাড়াঃ" )} {banglaNumber} টাকা 
              </h2>
            )}
          </div>

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
        </div>

        <h2 className="flex justify-end -mt-2 -mb-2">
          {" "}
          {/* {post?.description?.slice(0, 50)}... */}
          {!lang ? (
            <span className="text-warning  border-b border-warning">
              See Details
            </span>
          ) : (
            <span className="text-warning text-xs border-b border-warning">
              বিস্তারিত দেখুন{" "}
            </span>
          )}
        </h2>
      </div>
    </div>
  </Link>
  );
};

export default DashboardPost;
