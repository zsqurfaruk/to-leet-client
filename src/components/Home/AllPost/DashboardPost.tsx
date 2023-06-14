/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import Cookies from "js-cookie";

const DashboardPost = ({ post }: any) => {
  const [updateReload, setUpdateReload] = useState(false);
  const lang = Cookies.get("lan");
  const { reload, setReload }: any = useContext(APIContext);

  const cookieValue = Cookies.get('token');
  const token = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
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

  return (
    <section className="w-full mb-10">
      <Card className="lg:flex-row w-full p-5 shadow-none">
        <img
          src={post?.img1}
          alt=""
          className="h-52 lg:w-60 w-full rounded"
          draggable= "false"
        />

        <div className="-ml-6 lg:ml-0 mt-5 mb-0 lg:mt-0">
          {post?.available || updateReload ? (
            <button className="ml-4 -py-2 px-2 rounded text-warning font-semibold">
              {!lang ? "Booked" : "ভাড়া হয়েছে।"}
            </button>
          ) : (
            <div className="ml-6 mb-3 ">
              {!lang
                ? "If it is rented then click on the booked button."
                : "ভাড়া হয়ে গেলে পাশের বাটনে ক্লিক করুন।"}{" "}
              <button
                className="text-primary px-3 ml-2 rounded font-semibold bg-warning"
                onClick={handleUpdate}
              >
                {!lang ? "Booked" : "ভাড়া হয়েছে।"}
              </button>
            </div>
          )}

          <div className="md:flex justify-between -mt-5 lg:-mt-0">
            <div>
              <CardBody className="lg:-mt-6">
                <div className="md:flex md:gap-56">
                  {!lang ? (
                    <Typography variant="h6" className="uppercase text-warning">
                      {post?.type?.eng}
                    </Typography>
                  ) : (
                    <Typography variant="h6" className="uppercase text-warning">
                      {post?.type?.ban}
                    </Typography>
                  )}
                  <Typography variant="h6" className="text-warning md:hidden">
                    Date: {post?.updatedAt?.slice(0, 10)}
                  </Typography>
                </div>
                {post?.university?.eng && (
                  <>
                    {!lang ? (
                      <h2>
                        <span className="font-semibold">Beside:</span>{" "}
                        {post?.university?.eng}
                      </h2>
                    ) : (
                      <h2>
                        <span className="font-semibold"> </span>{" "}
                        {post?.university?.ban} এর পাশে
                      </h2>
                    )}
                  </>
                )}
                <Typography color="gray" className="font-normal ">
                  <div className="md:flex md:gap-56">
                    {post?.bedrooms?.eng && (
                      <div>
                        {!lang ? (
                          <h2>Bedrooms: {post?.bedrooms?.eng}</h2>
                        ) : (
                          <h2> বেডরুমঃ {post?.bedrooms?.ban}</h2>
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
                          <h2>Total Bed: {post?.totalBed?.eng} </h2>
                        ) : (
                          <h2>মোট বেড: {post?.totalBed?.ban} </h2>
                        )}
                      </div>
                    )}

                    {post?.bedNumber && (
                      <div className="md:hidden">
                        {!lang ? (
                          <h2>Empty Bed: {post?.bedNumber?.eng} </h2>
                        ) : (
                          <h2>ফাঁকা বেড: {post?.bedNumber?.ban} </h2>
                        )}
                      </div>
                    )}
                  </div>
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
                      <h2>Bathrooms: {post?.bathrooms?.eng}</h2>
                    ) : (
                      <h2>বাথরুমঃ {post?.bathrooms?.ban}</h2>
                    )}
                  </div>
                  <div className="md:flex md:gap-[135px]">
                    {!lang ? (
                      <h2>
                        {post?.type?.eng === "Mess-(Male)" ||
                        post?.type?.eng === "Mess-(Female)" ||
                        post?.type?.eng === "Sublet-(Male)" ||
                        post?.type?.eng === "Sublet-(Female)"
                          ? "Per seat:"
                          : "Rent:"}{" "}
                        {post?.amount} Taka{" "}
                      </h2>
                    ) : (
                      <h2>
                        {" "}
                        {post?.type?.eng === "Mess-(Male)" ||
                        post?.type?.eng === "Mess-(Female)" ||
                        post?.type?.eng === "Sublet-(Male)" ||
                        post?.type?.eng === "Sublet-(Female)"
                          ? "প্রতি সিটঃ"
                          : "ভাড়াঃ"}{" "}
                        {post?.amount} টাকা{" "}
                      </h2>
                    )}
                    {post?.negotiable === true && (
                      <h2 className="md:hidden">
                        {" "}
                        {!lang ? "Negotiable" : "আলোচনা সাপেক্ষে"}{" "}
                      </h2>
                    )}
                  </div>

                  {post?.cityName?.eng && (
                    <div className="md:flex md:gap-[183px]">
                      {!lang ? (
                        <h2>Area: {post?.areaName?.eng}</h2>
                      ) : (
                        <h2>এলাকাঃ {post?.areaName?.ban}</h2>
                      )}
                      <div className="md:hidden">
                        {!lang ? (
                          <span> City: {post?.cityName?.eng}</span>
                        ) : (
                          <span> শহরঃ {post?.cityName?.ban}</span>
                        )}
                      </div>
                    </div>
                  )}
                  {post?.division?.eng && (
                    <div className="md:flex md:gap-40">
                      {!lang ? (
                        <h2>District: {post?.districts?.eng}</h2>
                      ) : (
                        <h2> জেলাঃ {post?.districts?.ban}</h2>
                      )}
                      <div className="md:hidden">
                        {!lang ? (
                          <span> Division: {post?.division?.eng}</span>
                        ) : (
                          <span> বিভাগঃ {post?.division?.ban}</span>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="md:flex md:gap-[135px]">
                    {!lang ? (
                      <h2> Wifi facilities: {post?.wifiFacility?.eng}</h2>
                    ) : (
                      <h2> ওয়াইফাই সুবিধাঃ {post?.wifiFacility?.ban}</h2>
                    )}
                  </div>
                </Typography>
              </CardBody>
            </div>
            <div className="hidden md:flex">
              <CardBody className="lg:-mt-6">
                <div className="md:flex md:gap-40">
                  {/* <Typography variant="h6" className="uppercase mb-2 text-warning">
            {post?.type?.eng}
          </Typography> */}
                  <Typography variant="h6" className="text-warning">
                    Date: {post?.updatedAt?.slice(0, 10)}
                  </Typography>
                </div>
                {post?.university?.ban && (
                  <div className="invisible">
                    {!lang ? (
                      <>
                        {" "}
                        <span className="font-semibold">Beside:</span>
                        <span> {post?.university?.eng}</span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="font-semibold"> </span>
                        <span> {post?.university?.ban} এর পাশে।</span>
                      </>
                    )}
                  </div>
                )}

                <Typography color="gray" className="font-normal ">
                  <div className="md:flex md:gap-56">
                    {/* <h2>Bedrooms: {post?.bedrooms}</h2> */}
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
                        <h2>বাথরুমঃ {post?.bathrooms?.ban}</h2>
                      )}
                    </div>
                    {post?.bedNumber && (
                      <div>
                        {!lang ? (
                          <h2>Empty Bed: {post?.bedNumber?.eng} </h2>
                        ) : (
                          <h2>ফাঁকা বেড: {post?.bedNumber?.ban} </h2>
                        )}
                      </div>
                    )}
                  </div>
                  <div
                        className={post.totalBed ? "invisible" : "hidden"}
                      >
                        {!lang ? (
                          <h2>Empty Bed: {post?.bedNumber?.eng} </h2>
                        ) : (
                          <h2>ফাঁকা বেড: {post?.bedNumber?.ban} </h2>
                        )}
                      </div>
                  <div className="md:flex md:gap-[135px]">
                    {/* <h2>Rent : {post?.amount} taka (Monthly)</h2> */}
                    {!lang ? (
                      <h2>
                        {" "}
                        {post?.negotiable === true && <span> Negotiable</span>}
                      </h2>
                    ) : (
                      <h2>
                        {" "}
                        {post?.negotiable === true && <span> আলোচনা সাপেক্ষে</span>}
                      </h2>
                    )}
                  </div>

                  {post?.cityName?.eng && (
                    <div className="md:flex md:gap-[183px]">
                      {/* <h2>Area: {post?.areaName?.eng}</h2> */}
                      {!lang ? (
                        <h2>City: {post?.cityName?.eng}</h2>
                      ) : (
                        <h2> শহরঃ {post?.cityName?.ban}</h2>
                      )}
                    </div>
                  )}
                  {post?.division?.eng && (
                    <div className="md:flex md:gap-40">
                      {/* <h2>District: {post?.districts?.eng}</h2> */}
                      {!lang ? (
                        <h2 className="">Division: {post?.division?.eng}</h2>
                      ) : (
                        <h2 className=""> বিভাগঃ {post?.division?.ban}</h2>
                      )}
                    </div>
                  )}
                </Typography>
              </CardBody>
            </div>
          </div>
          <div className="ml-6 lg:ml-6 -mt-6">
            {!lang ? (
              <h2>Detail address: {post?.address}</h2>
            ) : (
              <h2> বিস্তারিত ঠিকানাঃ {post?.address}</h2>
            )}
          </div>
        </div>
      </Card>

      <div className="ml-6 lg:ml-6">
        <Typography variant="h5" color="blue-gray" className="my-2">
          {post?.title}
        </Typography>
        <Typography> {post?.description}</Typography>
        <Typography className="border border-accent py-1 px-2 rounded-md">
          {!lang ? "Contact number:" : "মোবাইল নাম্বারঃ"} +{post?.phone}
        </Typography>
      </div>
    </section>
  );
};

export default DashboardPost;
