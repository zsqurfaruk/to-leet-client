/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const DashboardPost = ({ post }: any) => {
  return (
    <section className="w-full mb-10">
      <Card className="lg:flex-row w-full shadow-none">
        <div>
          <img
            src={post?.img1}
            alt=""
            className="h-52 w-full lg:w-80 rounded-lg shadow-none"
          />
        </div>
        <CardBody className="lg:-mt-6">
          <Typography variant="h6" color="blue" className="uppercase mb-2">
            {post?.type?.eng}
          </Typography>
          {post?.university?.eng && (
            <h2>
              <span className="font-semibold">Beside:</span>{" "}
              {post?.university?.eng}
            </h2>
          )}
          <Typography color="gray" className="font-normal ">
            <div className="md:flex md:gap-56">
              <h2>Bedrooms: {post?.bedrooms}</h2>
              <h2>Bathrooms: {post?.bathrooms}</h2>
            </div>
            {post?.houseSize && <h2>HouseSize: {post?.houseSize}</h2>}

            <div className="md:flex md:gap-[135px]">
              <h2>Rent : {post?.amount} taka (Monthly)</h2>
              {post?.negotiable === true && <h2> Negotiable</h2>}
            </div>

            {post?.cityName?.eng && (
              <div className="md:flex md:gap-[183px]">
                <h2>Area: {post?.areaName?.eng}</h2>
                <h2>City: {post?.cityName?.eng}</h2>
              </div>
            )}
            {post?.division?.eng && (
              <div className="md:flex md:gap-40">
                <h2>District: {post?.districts?.eng}</h2>
                <h2 className="">Division: {post?.division?.eng}</h2>
              </div>
            )}
            <h2>Detail address: {post?.address}</h2>
            {/* <h2> {post?.rentType}</h2> */}
            <h2> {post?.email}</h2>
          </Typography>
        </CardBody>
      </Card>
      <div className="-mt-2 ml-5 lg:ml-0">
        <Typography variant="h4" color="blue-gray" className="my-2">
          {post?.title}
        </Typography>
        <h2 className="lg:w-10/12 mb-1"> {post?.description}</h2>
        <Typography className="border border-accent py-1 px-2 rounded-md">
          Contact number: {post?.phone}
        </Typography>
      </div>
    </section>
  );
};

export default DashboardPost;
