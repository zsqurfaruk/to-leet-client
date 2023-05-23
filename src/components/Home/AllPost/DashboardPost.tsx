/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";


const DashboardPost = ({ post }: any) => {
  const lang = localStorage.getItem("lan");
  return (
    <div className="my-32">
      <section className="w-full mb-10">
        <Card className="lg:flex-row w-full shadow-none">
          <div>
            <img
              src={post?.img1}
              alt=""
              className="h-52 w-full lg:w-80 rounded-lg shadow-none"
            />
          </div>
          <div className="md:flex justify-between">
            <CardBody className="lg:-mt-6">
              <div className="md:flex md:gap-40">
               {
                lang ?  <Typography variant="h6" className="uppercase text-secondary">
                {post?.type?.eng}
              </Typography>:  <Typography variant="h6" className="uppercase text-secondary">
                  {post?.type?.ban}
                </Typography>
               }
                <Typography variant="h6" className="text-secondary md:hidden">
                  Date: {post?.updatedAt?.slice(0, 10)}
                </Typography>
              </div>
              {post?.university?.eng && (
                <h2>
                 {
                  lang ? <> <span className="font-semibold">Beside:</span>{" "}
                  {post?.university?.eng}</> : <> <span className="font-semibold"></span>{" "}
                  {post?.university?.ban} এর পাশে</>
                 }
                </h2>
              )}
              <Typography color="gray" className="font-normal ">
                <div className="md:flex md:gap-56">
                 {
                  lang ?  <h2>Bedrooms: {post?.bedrooms}</h2>:  <h2>বেডরুমঃ {post?.bedrooms}</h2>
                 }
                 {
                  lang ?  <h2 className="md:hidden">Bathrooms: {post?.bathrooms}</h2>:  <h2 className="md:hidden"> বাথরুমঃ {post?.bathrooms}</h2>
                 }
                </div>
                
                <div className="md:flex md:gap-[135px]">
                 {
                  lang ?  <h2>Rent : {post?.amount} taka (Monthly)</h2> :  <h2>ভাড়াঃ {post?.amount} টাকা (মাসিক)</h2>
                 }
                  {post?.negotiable === true && (
                    <h2 className="md:hidden"> {lang ? "Negotiable": "আলোচনা সাপেক্ষে"}</h2>
                  )}
                </div>

                {post?.cityName?.eng && (
                  <div className="md:flex md:gap-[183px]">
                  {
                    lang ?   <h2>Area: {post?.areaName?.eng}</h2>:   <h2> এলাকাঃ {post?.areaName?.ban}</h2>
                  }
                   {
                    lang ?  <h2 className="md:hidden">City: {post?.cityName?.eng}</h2>:  <h2 className="md:hidden"> শহরঃ {post?.cityName?.ban}</h2>
                   }
                  </div>
                )}
                {post?.division?.eng && (
                  <div className="md:flex md:gap-40">
                   {
                    lang ?  <h2>District: {post?.districts?.eng}</h2>:  <h2>জেলাঃ {post?.districts?.ban}</h2>
                   }
                    <h2 className="md:hidden">
                    {
                      lang ?  <span> Division: {post?.division?.eng}</span>:  <span> বিভাগঃ {post?.division?.ban}</span>
                    }
                    </h2>
                  </div>
                )}
                <div className="md:flex md:gap-[135px]">
                  {
                    lang ?  <h2> Wifi: {post?.wifiEng}</h2> :  <h2> ওয়াইফাইঃ  {post?.wifiBan}</h2>
                  }
                  {/* {post?.unit && (
                    <h2 className="md:hidden">Unit: {post?.unit}</h2>
                  )} */}
                </div>
               {
                lang ?  <h2>Detail address: {post?.address}</h2>:  <h2>বিস্তারিত ঠিকানাঃ {post?.address}</h2>
               }
                
               {
                lang ?  <h2> Email:  {post?.email}</h2> : <h2>ইমেইলঃ  {post?.email}</h2>
               }
              </Typography>
            </CardBody>
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
                   {
                    lang ? <> <span className="font-semibold">Beside:</span>{" "}
                    {post?.university?.eng}</> : <> <span className="font-semibold">Beside:</span>{" "}
                    {post?.university?.eng}</>
                   }
                  </h2>
                )}

                <Typography color="gray" className="font-normal ">
                  <div className="md:flex md:gap-56">
                    {/* <h2>Bedrooms: {post?.bedrooms}</h2> */}
                  {
                    lang ?  <h2>Bathrooms: {post?.bathrooms}</h2>:   <h2> বাথরুমঃ{post?.bathrooms}</h2>
                  }
                  </div>
                  
                  <div className="md:flex md:gap-[135px]">
                    {/* <h2>Rent : {post?.amount} taka (Monthly)</h2> */}
                    {post?.negotiable === true && <h2> {lang ? "Negotiable" :"আলোচনা সাপেক্ষে"}</h2>}
                  </div>

                  {post?.cityName?.eng && (
                    <div className="md:flex md:gap-[183px]">
                      {/* <h2>Area: {post?.areaName?.eng}</h2> */}
                     {
                      lang ?  <h2>City: {post?.cityName?.eng}</h2>:  <h2>শহরঃ {post?.cityName?.ban}</h2>
                     }
                    </div>
                  )}
                  {post?.division?.eng && (
                    <div className="md:flex md:gap-40">
                      {/* <h2>District: {post?.districts?.eng}</h2> */}
                    {
                      lang ?   <h2 className="">Division: {post?.division?.eng}</h2>:   <h2 className="">বিভাগঃ {post?.division?.ban}</h2>
                    }
                    </div>
                  )}
                   
                </Typography>
              </CardBody>
            </div>
          </div>
        </Card>
        <div className="-mt-2 ml-5 lg:ml-0">
          <Typography variant="h4" color="blue-gray" className="my-2">
            {post?.title}
          </Typography>
          <h2 className="lg:w-10/12 mb-1"> {post?.description}</h2>
          <Typography className="border border-accent py-1 px-2 rounded-md">
           {lang ? "Contact number:" : "মোবাইল নাম্বারঃ"} {post?.phone}
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default DashboardPost;
