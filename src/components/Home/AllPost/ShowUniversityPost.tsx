/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React,{useContext} from "react";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const ShowUniversityPost = ({ university }: any) => {
  const {lang}:any = useContext(FilterContext)
  const posts = {
    info: "g7j%u*9867&n3$h!5ngo35%g^n8klo%gvb7&bj11fgfgr255rtrt",
  };
  const banglaNumber = university.amount
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
const dateString = university?.updatedAt?.slice(0, 10);
const dateParts = dateString.split("-");
const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
return (
  <Link
    href={{
      pathname: `/details/${university._id}`,
      query: { post: encodeURIComponent(JSON.stringify(posts)) },
    }}
  >
    <div className="card card-compact rounded">
      <figure>
        <img
          src={university?.img1}
          alt="Shoes"
          className="h-32 w-full "
          draggable="false"
        />
      </figure>
      <div className="card-body border-b border-l border-r border-gray-300 rounded-b min-h-44">
        <div className="-mt-2 text-warning">
          {university?.title?.length > 30 ? (
            <h2 className="text-md font-semibold">
              {" "}
              {university?.title.slice(0, 30)}...
            </h2>
          ) : (
            <h2 className="text-md font-semibold"> {university?.title}</h2>
          )}
        </div>
        <div className="-mt-1">
          {university?.available ? (
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
            <h2 className="font-semibold"> {university?.type?.eng} </h2>
          ) : (
            <h2 className="font-semibold"> {university?.type?.ban} </h2>
          )}
          {!lang ? (
            <h2 className="font-semibold">{formattedDate}</h2>
          ) : (
            <h2 className="font-semibold">
              {university?.updatedAt
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
        {university?.division?.eng && (
          <div className="flex justify-between">
            {!lang ? (
              <h2>
                <span>District: </span> {university?.districts?.eng}{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> জেলা:</span> {university?.districts?.ban}{" "}
              </h2>
            )}
            {!lang ? (
              <h2>
                <span>Division: </span> {university?.division?.eng}{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> বিভাগ:</span> {university?.division?.ban}{" "}
              </h2>
            )}
          </div>
        )}
        {university?.cityName?.eng && (
          <div className="flex justify-between -mt-[6px]">
            {!lang ? (
              <h2>
                {" "}
                <span>Area:</span> {university?.areaName?.eng}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> এলাকা:</span> {university?.areaName?.ban}
              </h2>
            )}
            {!lang ? (
              <h2>
                {" "}
                <span>City:</span> {university?.cityName?.eng}
              </h2>
            ) : (
              <h2>
                {" "}
                <span>শহর:</span> {university?.cityName?.ban}
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

          {university?.totalBed && (
            <div
              className={
                university?.type?.eng === "Mess-(Male)" ||
                university?.type?.eng === "Mess-(Female)" ||
                university?.type?.eng === "Sublet-(Male)" ||
                university?.type?.eng === "Sublet-(Female)"
                  ? "flex"
                  : "hidden"
              }
            >
              {!lang ? (
                <h2>
                  <span
                    className={
                      university?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "inline"
                    }
                  >
                    Total Bed:
                  </span>{" "}
                  {university?.totalBed?.eng}{" "}
                </h2>
              ) : (
                <h2>
                  <span
                    className={
                      university?.totalBed?.eng === "Single room"
                        ? "hidden"
                        : "inline"
                    }
                  >
                    মোট বেড:
                  </span>{" "}
                  {university?.totalBed?.ban}{" "}
                </h2>
              )}
            </div>
          )}

          {university?.bedNumber && (
            <div>
              {!lang ? (
                <h2>Empty Bed: {university?.bedNumber?.eng} </h2>
              ) : (
                <h2>ফাঁকা বেড: {university?.bedNumber?.ban} </h2>
              )}
            </div>
          )}
          <div
            className={
              university?.type?.eng === "Mess-(Male)" ||
              university?.type?.eng === "Mess-(Female)" ||
              university?.type?.eng === "Sublet-(Male)" ||
              university?.type?.eng === "Sublet-(Female)"
                ? "hidden"
                : "flex"
            }
          >
            {!lang ? (
              <h2>Bathrooms: {university?.bathrooms?.eng}</h2>
            ) : (
              <h2> বাথরুম সংখ্যা: {university?.bathrooms?.ban}</h2>
            )}
          </div>
        </div>
        <div className="flex justify-between -mt-[6px]">
          <div>
            {!lang ? (
              <h2>
                {university?.type?.eng === "Mess-(Male)" ||
                university?.type?.eng === "Mess-(Female)" ||
                university?.type?.eng === "Sublet-(Male)" ||
                university?.type?.eng === "Sublet-(Female)" ? (
                  <>
                    <span
                      className={
                        university?.totalBed?.eng === "Single room"
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
                {university?.amount} Taka{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                {university?.type?.eng === "Mess-(Male)" ||
                university?.type?.eng === "Mess-(Female)" ||
                university?.type?.eng === "Sublet-(Male)" ||
                university?.type?.eng === "Sublet-(Female)" ? (
                  <>
                    <span
                      className={
                        university?.totalBed?.eng === "Single room"
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
              <h2> {university?.negotiable ? "Negotiable" : "Fixed"} </h2>
            ) : (
              <h2 className="text-[13px]">
                {" "}
                {university?.negotiable ? "আলোচনা সাপেক্ষে" : "ফিক্সড"}
              </h2>
            )}
          </div>
        </div>

        <h2 className="flex justify-end -mt-2 -mb-2">
          {" "}
          {/* {university?.description?.slice(0, 50)}... */}
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

export default ShowUniversityPost;
