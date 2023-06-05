/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import Cookies from 'js-cookie';

const DashboardPost = ({ post }: any) => {
  const [updateReload, setUpdateReload] = useState(false);
  const lang = Cookies.get("lan");
  const { reload, setReload }: any = useContext(APIContext);

  const handleUpdate = async () => {
    const res = await fetch(
      `http://localhost:5000/api/v1/product/update/available/${post._id}`,
      {
        method: "PATCH",
        headers: {
          authorization: `bearer ${Cookies.get("token")}`,
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
          className="h-52 lg:w-60 w-full rounded-lg"
        />

        <div className="-ml-6 lg:ml-0 mt-5 mb-0 lg:mt-0">
          {post?.available || updateReload ? (
            <button className="ml-4 -py-2 px-2 rounded-lg text-secondary font-semibold">
              {!lang ? "Booked" : "ভাড়া হয়েছে।"}
            </button>
          ) : (
            <p className="ml-6 mb-3 ">
              {!lang
                ? "If it is rented then click on the booked button."
                : "ভাড়া হয়ে গেলে পাশের বাটনে ক্লিক করুন।"}{" "}
              <button
                className="text-white px-3 ml-2 rounded-lg font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
                onClick={handleUpdate}
              >
                {!lang ? "Booked" : "ভাড়া হয়েছে।"}
              </button>
            </p>
          )}

          <div className="md:flex justify-between -mt-5 lg:-mt-0">
            <div>
              <CardBody className="lg:-mt-6">
                <div className="md:flex md:gap-56">
                  {!lang ? (
                    <Typography
                      variant="h6"
                      className="uppercase text-secondary"
                    >
                      {post?.type?.eng}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h6"
                      className="uppercase text-secondary"
                    >
                      {post?.type?.ban}
                    </Typography>
                  )}
                  <Typography variant="h6" className="text-secondary md:hidden">
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

                    {post?.bedNumber?.eng && (
                      <div>
                        {!lang ? (
                          <h2>Bed numbers: {post?.bedNumber?.eng}</h2>
                        ) : (
                          <h2> বেড সংখ্যাঃ {post?.bedNumber?.ban}</h2>
                        )}
                      </div>
                    )}

                    {!lang ? (
                      <h2 className="md:hidden">
                        Bathrooms: {post?.bathrooms?.eng}
                      </h2>
                    ) : (
                      <h2 className="md:hidden">
                        বাথরুমঃ {post?.bathrooms?.ban}
                      </h2>
                    )}
                  </div>

                  <div className="md:flex md:gap-[135px]">
                    {!lang ? (
                      <h2>Rent : {post?.amount} taka (Monthly)</h2>
                    ) : (
                      <h2> ভাড়াঃ {post?.amount} টাকা (মাসিক)</h2>
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
                      <h2 className="md:hidden">
                        {!lang ? (
                          <span> City: {post?.cityName?.eng}</span>
                        ) : (
                          <span> শহরঃ {post?.cityName?.ban}</span>
                        )}
                      </h2>
                    </div>
                  )}
                  {post?.division?.eng && (
                    <div className="md:flex md:gap-40">
                      {!lang ? (
                        <h2>District: {post?.districts?.eng}</h2>
                      ) : (
                        <h2> জেলাঃ {post?.districts?.ban}</h2>
                      )}
                      <h2 className="md:hidden">
                        {!lang ? (
                          <span> Division: {post?.division?.eng}</span>
                        ) : (
                          <span> বিভাগঃ {post?.division?.ban}</span>
                        )}
                      </h2>
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
                  {/* <Typography variant="h6" className="uppercase mb-2 text-secondary">
            {post?.type?.eng}
          </Typography> */}
                  <Typography variant="h6" className="text-secondary">
                    Date: {post?.updatedAt?.slice(0, 10)}
                  </Typography>
                </div>
                {post?.university?.ban && (
                  <h2 className="invisible">
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
                  </h2>
                )}

                <Typography color="gray" className="font-normal ">
                  <div className="md:flex md:gap-56">
                    {/* <h2>Bedrooms: {post?.bedrooms}</h2> */}
                    {!lang ? (
                      <h2>Bathrooms: {post?.bathrooms?.eng}</h2>
                    ) : (
                      <h2> বাথরুমঃ {post?.bathrooms?.ban}</h2>
                    )}
                  </div>

                  <div className="md:flex md:gap-[135px]">
                    {/* <h2>Rent : {post?.amount} taka (Monthly)</h2> */}
                    {!lang ? (
                      <h1>
                        {" "}
                        {post?.negotiable === true && <h2> Negotiable</h2>}
                      </h1>
                    ) : (
                      <h1>
                        {" "}
                        {post?.negotiable === true && <h2> আলোচনা সাপেক্ষে</h2>}
                      </h1>
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
        <h2> {post?.description}</h2>
        <Typography className="border border-accent py-1 px-2 rounded-md">
          {!lang ? "Contact number:" : "মোবাইল নাম্বারঃ"} {post?.phone}
        </Typography>
      </div>
    </section>
  );
};

export default DashboardPost;
