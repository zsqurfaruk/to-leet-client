/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

const Products = ({ product }: any) => {
  // const {lang}:any = useContext(FilterContext)
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
    <div className="card card-compact rounded">
      <figure>
        <img
          src={product?.img1}
          alt="Shoes"
          className="h-32 w-full "
          draggable="false"
        />
      </figure>
      <div className="card-body border-b border-l border-r border-gray-300 rounded-b min-h-44">
        <div className="-mt-2 text-warning">
          {product?.title?.length > 30 ? (
            <h2 className="text-md font-semibold">
              {" "}
              {product?.title.slice(0, 30)}...
            </h2>
          ) : (
            <h2 className="text-md font-semibold"> {product?.title}</h2>
          )}
        </div>
        <div className="-mt-1">
          {product?.available ? (
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
            <h2 className="font-semibold"> {product?.type?.eng} </h2>
          ) : (
            <h2 className="font-semibold"> {product?.type?.ban} </h2>
          )}
          {!lang ? (
            <h2 className="font-semibold">{formattedDate}</h2>
          ) : (
            <h2 className="font-semibold">
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
        {product?.division?.eng && (
          <div className="flex justify-between">
            {!lang ? (
              <h2>
                <span>District: </span> {product?.districts?.eng}{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> জেলা:</span> {product?.districts?.ban}{" "}
              </h2>
            )}
            {!lang ? (
              <h2>
                <span>Division: </span> {product?.division?.eng}{" "}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> বিভাগ:</span> {product?.division?.ban}{" "}
              </h2>
            )}
          </div>
        )}
        {product?.cityName?.eng && (
          <div className="flex justify-between -mt-[6px]">
            {!lang ? (
              <h2>
                {" "}
                <span>Area:</span> {product?.areaName?.eng}
              </h2>
            ) : (
              <h2>
                {" "}
                <span> এলাকা:</span> {product?.areaName?.ban}
              </h2>
            )}
            {!lang ? (
              <h2>
                {" "}
                <span>City:</span> {product?.cityName?.eng}
              </h2>
            ) : (
              <h2>
                {" "}
                <span>শহর:</span> {product?.cityName?.ban}
              </h2>
            )}
          </div>
        )}
        {/* {
            product?.university?.eng && <div>
               <h2 className="">Beside: {product?.university?.eng}</h2>
            </div>
          } */}

        <div className="flex justify-between -mt-[6px]">
          {product?.bedrooms?.eng && (
            <div>
              {!lang ? (
                <h2>Bedroom: {product?.bedrooms?.eng}</h2>
              ) : (
                <h2>বেডরুম সংখ্যা : {product?.bedrooms?.ban}</h2>
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
                        : "inline"
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
                <h2>ফাঁকা বেড: {product?.bedNumber?.ban} </h2>
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
            {!lang ? (
              <h2>Bathroom: {product?.bathrooms?.eng}</h2>
            ) : (
              <h2> বাথরুম সংখ্যা: {product?.bathrooms?.ban}</h2>
            )}
          </div>
          }
        </div>
        <div className="flex justify-between -mt-[6px]">
          <div>
            {!lang ? (
              <h2>
                {product?.type?.eng === "Mess-(Male)" ||
                product?.type?.eng === "Mess-(Female)"  ? (
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
                product?.type?.eng === "Mess-(Female)" ? (
                  <>
                    <span
                      className={
                        product?.totalBed?.eng === "Single room"
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
              <h2> {product?.negotiable ? "Negotiable" : "Fixed"} </h2>
            ) : (
              <h2 className="text-[13px]">
                {" "}
                {product?.negotiable ? "আলোচনা সাপেক্ষে" : "ফিক্সড"}
              </h2>
            )}
          </div>
        </div>

        <h2 className="flex justify-end -mt-2 -mb-2">
          {" "}
          {/* {product?.description?.slice(0, 50)}... */}
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

export default Products;
