/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { GetServerSideProps } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import privateRoute from "@/routes/privateRoute";

const ProductDetails = ({ product }: any) => {
  const { img1, img2, img3, img4, img5, amount } = product;
 console.log(product)
  const images = [
    { id: 0, value: img1 },
    { id: 1, value: img2 },
    { id: 2, value: img3 },
    { id: 3, value: img4 },
    { id: 4, value: img5 },
  ];

  const [slideImage, setSlideImage] = useState(images[0]);

  const handleImageChange = (index: any) => {
    const slider = images[index];
    setSlideImage(slider);
  };
  const post = {
    info: "g7j%u*9867&n3$h!5ngo35%g^n8klo%gvb7&bj",
    image: img1,
    amount: amount,
  };

  return (
    <section className="w-full lg:w-10/12 mx-auto my-20">
      <Card className="lg:flex-row w-full p-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="lg:w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <div>
            <PhotoProvider>
              <PhotoView src={slideImage?.value}>
                <img
                  src={slideImage?.value}
                  alt=""
                  className="h-96 w-full rounded-lg"
                />
              </PhotoView>
            </PhotoProvider>
            <div className="flex gap-2 md:gap-5 mx-auto my-7">
              {images?.map((img, i) => (
                <div key={img.id}>
                  {img?.value && (
                    <img
                      src={img?.value}
                      onClick={() => handleImageChange(i)}
                      alt=""
                      className="lg:h-20 h-16 w-14 lg:w-32 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardBody className="-ml-5 lg:ml-0">
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            {" "}
            {product?.type?.eng}
          </Typography>
          {product?.university?.eng && (
            <h2>
              <span className="font-semibold">Beside:</span>{" "}
              {product?.university?.eng}
            </h2>
          )}
          <Typography color="gray" className="font-normal mb-8">
            <h2 className="text-2xl font-bold"> </h2>
            <h2 className="font-semibold"></h2>

            <h2>Bedrooms: {product?.bedrooms}</h2>
            <h2>Bathrooms: {product?.bathrooms}</h2>
            {product?.houseSize && <h2>HouseSize: {product?.houseSize}</h2>}

            <div className="md:flex md:gap-32">
              <h2>Rent : {product?.amount} taka (Monthly)</h2>
              {product?.negotiable === true && <h2> Negotiable</h2>}
            </div>

            {product?.cityName?.eng && (
              <div className="md:flex md:gap-40">
                <h2>Area: {product?.areaName?.eng}</h2>
                <h2>City: {product?.cityName?.eng}</h2>
              </div>
            )}
            {product?.division?.eng && (
              <div className="md:flex md:gap-40">
                <h2>District: {product?.districts?.eng}</h2>
                <h2 className="">Division: {product?.division?.eng}</h2>
              </div>
            )}
            <h2>Detail address: {product?.address}</h2>
            {/* <h2> {post?.rentType}</h2> */}
            <h2> {product?.email}</h2>
            <Typography variant="h4" color="blue-gray" className="my-2">
              {product?.title}
            </Typography>
            <h2> {product?.description}</h2>
          </Typography>
          <Typography className="border border-accent py-1 px-2 rounded-md">
            Contact number: {product?.phone}
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/product/${params.productId}`
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product: data,
    },
  };
};

export default privateRoute(ProductDetails);
