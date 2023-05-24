/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import privateRoute from "@/routes/privateRoute";
import Head from "next/head";

const ProductDetails = ({ product }: any) => {
  const { img1, img2, img3, img4, img5, amount } = product;

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
  const lang = localStorage.getItem("lan");
  return (
    <>
      <Head>
        <title>To-Leet - Details </title>
      </Head>
      <section className="w-full lg:w-10/12 mx-auto lg:my-20">
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
          <div className="-ml-6 lg:ml-0">
            <div className="md:flex justify-between">
              <div>
                <CardBody className="lg:-mt-6">
                  <div className="md:flex md:gap-40">
                    {lang ? (
                      <Typography
                        variant="h6"
                        className="uppercase text-secondary"
                      >
                        {product?.type?.eng}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h6"
                        className="uppercase text-secondary"
                      >
                        {product?.type?.ban}
                      </Typography>
                    )}
                    <Typography
                      variant="h6"
                      className="text-secondary md:hidden"
                    >
                      Date: {product?.updatedAt?.slice(0, 10)}
                    </Typography>
                  </div>
                  {product?.university?.eng && (
                    <>
                      {lang ? (
                        <h2>
                          <span className="font-semibold">Beside:</span>{" "}
                          {product?.university?.eng}
                        </h2>
                      ) : (
                        <h2>
                          <span className="font-semibold"> </span>{" "}
                          {product?.university?.ban} এর পাশে
                        </h2>
                      )}
                    </>
                  )}
                  <Typography color="gray" className="font-normal ">
                    <div className="md:flex md:gap-56">
                      {product?.bedrooms?.eng && (
                        <div>
                          {lang ? (
                            <h2>Bedrooms: {product?.bedrooms?.eng}</h2>
                          ) : (
                            <h2> বেডরুমঃ {product?.bedrooms?.ban}</h2>
                          )}
                        </div>
                      )}

                      {product?.bedNumber?.eng && (
                        <div>
                          {lang ? (
                            <h2>Bed numbers: {product?.bedNumber?.eng}</h2>
                          ) : (
                            <h2> বেড সংখ্যাঃ {product?.bedNumber?.ban}</h2>
                          )}
                        </div>
                      )}

                      {lang ? (
                        <h2 className="md:hidden">
                          Bathrooms: {product?.bathrooms?.eng}
                        </h2>
                      ) : (
                        <h2 className="md:hidden">
                          বাথরুমঃ {product?.bathrooms?.ban}
                        </h2>
                      )}
                    </div>

                    <div className="md:flex md:gap-[135px]">
                      {lang ? (
                        <h2>Rent : {product?.amount} taka (Monthly)</h2>
                      ) : (
                        <h2> ভাড়াঃ {product?.amount} টাকা (মাসিক)</h2>
                      )}
                      {product?.negotiable === true && (
                        <h2 className="md:hidden">
                          {" "}
                          {lang ? "Negotiable" : "আলোচনা সাপেক্ষে"}{" "}
                        </h2>
                      )}
                    </div>

                    {product?.cityName?.eng && (
                      <div className="md:flex md:gap-[183px]">
                        {lang ? (
                          <h2>Area: {product?.areaName?.eng}</h2>
                        ) : (
                          <h2>এলাকাঃ {product?.areaName?.ban}</h2>
                        )}
                        <h2 className="md:hidden">
                          {lang ? (
                            <span> City: {product?.cityName?.eng}</span>
                          ) : (
                            <span> শহরঃ {product?.cityName?.ban}</span>
                          )}
                        </h2>
                      </div>
                    )}
                    {product?.division?.eng && (
                      <div className="md:flex md:gap-40">
                        {lang ? (
                          <h2>District: {product?.districts?.eng}</h2>
                        ) : (
                          <h2> জেলাঃ {product?.districts?.ban}</h2>
                        )}
                        <h2 className="md:hidden">
                          {lang ? (
                            <span> Division: {product?.division?.eng}</span>
                          ) : (
                            <span> বিভাগঃ {product?.division?.ban}</span>
                          )}
                        </h2>
                      </div>
                    )}
                    <div className="md:flex md:gap-[135px]">
                      {lang ? (
                        <h2> Wifi facilities: {product?.wifiEng}</h2>
                      ) : (
                        <h2> ওয়াইফাই সুবিধাঃ {product?.wifiBan}</h2>
                      )}
                    </div>
                    {lang ? (
                      <h2>Detail address: {product?.address}</h2>
                    ) : (
                      <h2> বিস্তারিত ঠিকানাঃ {product?.address}</h2>
                    )}
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
                      Date: {product?.updatedAt?.slice(0, 10)}
                    </Typography>
                  </div>
                  {product?.university?.ban && (
                    <h2 className="invisible">
                      {lang ? (
                        <>
                          {" "}
                          <span className="font-semibold">Beside:</span>
                          <span> {product?.university?.eng}</span>
                        </>
                      ) : (
                        <>
                          {" "}
                          <span className="font-semibold"> </span>
                          <span> {product?.university?.ban} এর পাশে।</span>
                        </>
                      )}
                    </h2>
                  )}

                  <Typography color="gray" className="font-normal ">
                    <div className="md:flex md:gap-56">
                      {/* <h2>Bedrooms: {post?.bedrooms}</h2> */}
                      {lang ? (
                        <h2>Bathrooms: {product?.bathrooms?.eng}</h2>
                      ) : (
                        <h2> বাথরুমঃ {product?.bathrooms?.ban}</h2>
                      )}
                    </div>

                    <div className="md:flex md:gap-[135px]">
                      {/* <h2>Rent : {post?.amount} taka (Monthly)</h2> */}
                      {lang ? (
                        <h1>
                          {" "}
                          {product?.negotiable === true && <h2> Negotiable</h2>}
                        </h1>
                      ) : (
                        <h1>
                          {" "}
                          {product?.negotiable === true && (
                            <h2> আলোচনা সাপেক্ষে</h2>
                          )}
                        </h1>
                      )}
                    </div>

                    {product?.cityName?.eng && (
                      <div className="md:flex md:gap-[183px]">
                        {/* <h2>Area: {post?.areaName?.eng}</h2> */}
                        {lang ? (
                          <h2>City: {product?.cityName?.eng}</h2>
                        ) : (
                          <h2> শহরঃ {product?.cityName?.ban}</h2>
                        )}
                      </div>
                    )}
                    {product?.division?.eng && (
                      <div className="md:flex md:gap-40">
                        {/* <h2>District: {post?.districts?.eng}</h2> */}
                        {lang ? (
                          <h2 className="">
                            Division: {product?.division?.eng}
                          </h2>
                        ) : (
                          <h2 className=""> বিভাগঃ {product?.division?.ban}</h2>
                        )}
                      </div>
                    )}
                  </Typography>
                </CardBody>
              </div>
            </div>
            <div className="ml-6 lg:ml-8">
              <Typography variant="h5" color="blue-gray" className="my-2">
                {product?.title}
              </Typography>
              <h2> {product?.description}</h2>
              <Typography className="border border-accent py-1 px-2 rounded-md">
                {lang ? "Contact number:" : "মোবাইল নাম্বারঃ"} {product?.phone}
              </Typography>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/product`);
  const data = await res.json();

  const paths = data?.map((post: any) => {
    return {
      params: {
        productId: `${post?._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,  
  };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
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
