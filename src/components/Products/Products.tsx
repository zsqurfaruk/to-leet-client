/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Cookies from "js-cookie";

const Products = ({ product }: any) => {
  const post =
    "4l5gJNnHjXPcI5jCtff8vWW8vR#4oaWbB0TKs204^%$ACcaBTpXPwH00LczlXf8vWWCtCfds";
  const lang = Cookies.get("lan");
  return (
    <div>
      <Link
        href={{
          pathname: `/details/${product._id}`,
          query: { post: encodeURIComponent(JSON.stringify(post)) },
        }}
      >
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={product?.img1} alt="Shoes" className="h-36 w-full" />
          </figure>
          <div className="card-body h-64 py-2">
            <h2 className="text-lg font-bold"> {product?.title}</h2>
            {product?.available ? (
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
                <h2 className="font-semibold"> {product?.type?.eng} </h2>
              ) : (
                <h2 className="font-semibold"> {product?.type?.ban} </h2>
              )}

              <h2 className="font-semibold">
                {product?.updatedAt?.slice(0, 10)}
              </h2>
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
                    <h2>Bedrooms: {product?.bedrooms?.eng}</h2>
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
                    <h2>Total Bed: {product?.totalBed?.eng} </h2>
                  ) : (
                    <h2>মোট বেড: {product?.totalBed?.ban} </h2>
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
                {!lang ? (
                  <h2>Bathrooms: {product?.bathrooms?.eng}</h2>
                ) : (
                  <h2> বাথরুম সংখ্যা: {product?.bathrooms?.ban}</h2>
                )}
              </div>
            </div>
            <div className="flex justify-between -mt-[6px]">
              <div>
                {!lang ? (
                  <h2>
                    {product?.type?.eng === "Mess-(Male)" ||
                    product?.type?.eng === "Mess-(Female)" ||
                    product?.type?.eng === "Sublet-(Male)" ||
                    product?.type?.eng === "Sublet-(Female)"
                      ? "Per seat:"
                      : "Amount"}{" "}
                    {product?.amount} Taka{" "}
                  </h2>
                ) : (
                  <h2>
                    {" "}
                    {product?.type?.eng === "Mess-(Male)" ||
                    product?.type?.eng === "Mess-(Female)" ||
                    product?.type?.eng === "Sublet-(Male)" ||
                    product?.type?.eng === "Sublet-(Female)"
                      ? "প্রতি সিটঃ"
                      : "ভাড়াঃ"}{" "}
                    {product?.amount} টাকা{" "}
                  </h2>
                )}
              </div>

              {product?.negotiable && (
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
              )}
            </div>

            <h2>
              {" "}
              {product?.description?.slice(0, 50)}...
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
};

export default Products;
