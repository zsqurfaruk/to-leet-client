/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { GetServerSideProps } from "next";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import PrivateRoute from "@/routes/privateRoute";
import Head from "next/head";
import { toast } from "react-hot-toast";
import RelatedPosts from "@/components/RelatedPost/RelatedPosts";
import { useSelector } from "react-redux";
import { MdOutlineLocationOn, MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { BiBed } from "react-icons/bi";
import { StateContext } from "@/Context/StateContext/StateContext";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";

const ProductDetails = ({ product, loading, errorMessage }: any) => {
  const { img1, img2, img3, img4, img5 } = product;
  const lang = useSelector((state: any) => state.language.language);
  const images = [
    { id: 0, value: img1 },
    { id: 1, value: img2 },
    { id: 2, value: img3 },
    { id: 3, value: img4 },
    { id: 4, value: img5 },
  ];
  const { changedDetailsPic, setChangedDetailsPic }: any =
    useContext(StateContext);
  const [slideImage, setSlideImage] = useState(images[0]);
  const [isHovered, setIsHovered] = useState(false);
  const handleImageChange = (index: any) => {
    const slider = images[index];
    setSlideImage(slider);
    setChangedDetailsPic(true);
  };

  const handleCopyLine = (line: any) => {
    navigator.clipboard.writeText(line);
    if (lang) {
      toast.success("কপি করা হয়েছে।");
    } else {
      toast.success("Copied");
    }
  };
  const banglaNumber = product?.amount
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

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <Head>
        <title>QuickVara - {product?.type?.eng} Details </title>
      </Head>
      <section className="w-full lg:w-10/12 mx-auto">
        <Card className="lg:flex-row w-full p-6 shadow-none">
          <CardHeader
            shadow={false}
            floated={false}
            className="lg:w-[46%] shrink-0 m-0 rounded-none"
          >
            <div>
              {!changedDetailsPic ? (
                <PhotoProvider>
                   <PhotoView src={img1}>
                  <img
                    src={img1}
                    alt=""
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={
                      isHovered
                        ? "h-96 w-full rounded scale-110 ease-in-out  duration-700"
                        : "h-96 w-full rounded ease-in-out duration-700"
                    }
                    draggable="false"
                  />
                  </PhotoView>
                </PhotoProvider>
              ) : (
                <PhotoProvider>
                  <PhotoView src={slideImage?.value}>
                    <img
                      src={slideImage?.value}
                      alt=""
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={
                        isHovered
                          ? " h-96 w-full rounded  scale-110  ease-in-out duration-700"
                          : "h-96 w-full rounded  ease-in-out  duration-700"
                      }
                      draggable="false"
                    />
                  </PhotoView>
                </PhotoProvider>
              )}

              <div className="flex gap-2 md:gap-5 mx-auto my-7">
                {images?.map((img, i) => (
                  <div key={img.id}>
                    {img?.value && (
                      <img
                        src={img?.value}
                        onClick={() => handleImageChange(i)}
                        alt=""
                        className="lg:h-20 h-16 w-14 lg:w-32 rounded cursor-pointer"
                        draggable="false"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
          <div className="lg:ml-5 lg:w-[52%]">
            {!lang ? (
              <h1 className="mb-1">Basic Information</h1>
            ) : (
              <h1 className="mb-1"> মৌলিক তথ্য </h1>
            )}
            <div className="divider mt-[6px] mb-[6px]"></div>

            {product?.university?.eng && (
              <div>
                {!lang ? (
                  <h2>Institute: {product?.university?.eng}</h2>
                ) : (
                  <h2> শিক্ষা প্রতিষ্ঠানঃ {product?.university?.ban}</h2>
                )}
              </div>
            )}
            <div className="flex justify-between mt-1">
              {!lang ? (
                <h2 className="font-semibold"> {product?.type?.eng} </h2>
              ) : (
                <h2 className="font-semibold"> {product?.type?.ban} </h2>
              )}
              {!lang ? (
                <h2 className="font-semibold"> {formattedDate} </h2>
              ) : (
                <h2 className="font-semibold ">
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

            <div className="flex justify-between mt-1">
              {product?.bedrooms?.eng && (
                <div className="flex gap-1">
                  <MdOutlineBedroomChild className="text-warning mt-[3.4px] w-4 -ml-[2px]"></MdOutlineBedroomChild>
                  {!lang ? (
                    <h2>Bedroom: {product?.bedrooms?.eng} </h2>
                  ) : (
                    <h2>
                      <span className="text-sm"> বেডরুমঃ</span>{" "}
                      {product?.bedrooms?.ban}
                    </h2>
                  )}
                </div>
              )}

              {product?.bathrooms && (
                <div className="flex">
                  <FaBath className="h-[14px] w-5 mt-1 mr-1 text-warning"></FaBath>
                  {!lang ? (
                    <h2>Bathroom: {product?.bathrooms?.eng}</h2>
                  ) : (
                    <h2>
                      <span className="text-sm">বাথরুমঃ </span>{" "}
                      {product?.bathrooms?.ban}
                    </h2>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-between">
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
                  <BiBed className="h-[16px] w-5 mt-1 mr-1  text-warning" />
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
                      </span>
                      <span> {product?.totalBed?.eng} </span>
                    </h2>
                  ) : (
                    <h2>
                      <span
                        className={
                          product?.totalBed?.eng === "Single room"
                            ? "hidden"
                            : "inline text-sm"
                        }
                      >
                        মোট বেড:
                      </span>
                      <span className="text-sm">{product?.totalBed?.ban}</span>
                    </h2>
                  )}
                </div>
              )}

              {product?.bedNumber && (
                <div className="flex">
                  <BiBed className="h-[16px] w-5 mt-1 mr-1 text-warning" />
                  {!lang ? (
                    <h2>Empty Bed: {product?.bedNumber?.eng} </h2>
                  ) : (
                    <h2>
                      <span className="text-sm">ফাঁকা বেড</span>:{" "}
                      {product?.bedNumber?.ban}{" "}
                    </h2>
                  )}
                </div>
              )}
            </div>
            <div className="divider mt-[6px] mb-[6px]"></div>
            <div>
              <h1 className="flex">
                <MdOutlineLocationOn className="text-warning h-6 w-6"></MdOutlineLocationOn>
                {!lang ? (
                  <span> Location information </span>
                ) : (
                  <span> অবস্থানগত তথ্য </span>
                )}
              </h1>
              <div className="divider mt-[6px] mb-[6px]"></div>
            </div>

            <div>
              {product?.division?.eng && (
                <div className="flex justify-between">
                  <div>
                    {!lang ? (
                      <>
                        <h1>District</h1>
                        <h2>{product?.districts?.eng}</h2>
                      </>
                    ) : (
                      <>
                        <h1 className="text-sm">জেলা</h1>
                        <h2 className="text-sm">{product?.districts?.ban}</h2>
                      </>
                    )}
                  </div>
                  <div>
                    {!lang ? (
                      <>
                        <h1>Division </h1>
                        <h2>{product?.division?.eng}</h2>
                      </>
                    ) : (
                      <>
                        <h1 className="text-sm">বিভাগ</h1>
                        <h2 className="text-sm"> {product?.division?.ban} </h2>
                      </>
                    )}
                  </div>
                </div>
              )}
              {product?.cityName?.eng && (
                <div className="flex justify-between">
                  <div>
                    {!lang ? (
                      <>
                        <h1>Area </h1>
                        <h2>{product?.areaName?.eng}</h2>
                      </>
                    ) : (
                      <>
                        <h1 className="text-sm">এলাকা</h1>
                        <h2 className="text-sm"> {product?.areaName?.ban}</h2>
                      </>
                    )}
                  </div>
                  <div>
                    {!lang ? (
                      <div>
                        <h1>City </h1>
                        <h2>{product?.cityName?.eng}</h2>
                      </div>
                    ) : (
                      <>
                        <h1 className="text-sm"> শহর </h1>
                        <h2 className="text-sm">{product?.cityName?.ban}</h2>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="divider mt-[6px] mb-[6px]"></div>
            <div>
              {!lang ? (
                <h2>
                  Detail address: <br className=" " />{" "}
                  <span className="text-sm">{product?.address}</span>
                </h2>
              ) : (
                <h2 className="text-sm">
                  বিস্তারিত ঠিকানাঃ <br />
                  <span className="text-sm">{product?.address}</span>
                </h2>
              )}
            </div>
            <div className="divider mt-[6px] mb-[6px]"></div>
            <div className="flex justify-between">
              <div className="flex">
                <TbCurrencyTaka className="w-5 h-[17px] -ml-1  mt-[2px] text-warning" />
                {!lang ? (
                  <h2>
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
                          Per </span>
                        Seat:
                      </>
                    ) : (
                      "Rent: "
                    )} {product?.amount} Taka
                  </h2>
                ) : (
                  <h2>
                    {product?.type?.eng === "Mess-(Male)" ||
                    product?.type?.eng === "Mess-(Female)" ? (
                      <>
                        <span
                          className={
                            product?.totalBed?.eng === "Single room"
                              ? "hidden"
                              : "inline text-sm"
                          }
                        >
                          প্রতি
                        </span>
                        <span className="text-sm"> সিটঃ </span>
                      </>
                    ) : (
                      <span className="text-sm">ভাড়াঃ </span>
                    )} {banglaNumber} <span className="text-sm">টাকা </span>
                  </h2>
                )}
              </div>

              <div>
                {!lang ? (
                  <h2> {product?.negotiable && <span>Negotiable</span>}</h2>
                ) : (
                  <h2 className="">
                    {product?.negotiable && (
                      <span className="text-sm">আলোচনা সাপেক্ষে</span>
                    )}
                  </h2>
                )}
              </div>
            </div>
            <div className="divider mt-[6px] mb-[6px]"></div>
            <div className="relative  ">
              <Typography className="border border-accent py-1 px-2 rounded-md mt-2">
                {!lang ? (
                  <Typography>Contact number: +{product?.phone}</Typography>
                ) : (
                  <Typography>
                    মোবাইল নাম্বারঃ +
                    <span>
                      {product?.phone &&
                        product?.phone
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
                          .replace(/9/g, "৯")}
                    </span>
                  </Typography>
                )}
              </Typography>

              <button
                className="absolute top-0 right-0 border-l-2  border-warning bg-accent px-1 py-[5.5px] rounded"
                onClick={() => handleCopyLine("+" + product?.phone)}
              >
                copy
              </button>
            </div>
          </div>
        </Card>
        <div className="bg-white -mt-2 px-7">
          <Typography className="pt-2 text-warning">
            {product?.title}
          </Typography>
          <div className="divider mt-[6px] mb-[6px]"></div>
          {!lang ? (
            <h1>Details Information:</h1>
          ) : (
            <h1>বিস্তারিত তথ্যঃ</h1>
          )}
          <div className="divider mt-[6px] mb-[6px]"></div>
          <h2 className="text-sm mt-1 mb-5 pb-5"> {product?.description}</h2>
        </div>
      </section>
      <br />
      <br />
      <RelatedPosts
        id={product._id}
        type={product.type}
        areaName={product.areaName}
        cityName={product.cityName}
        division={product?.division}
        district={product?.districts}
      ></RelatedPosts>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const token = decryptTransform(context?.req?.cookies?.['qv-tn']);
  const { params } = context;
  let loading = true;
  let errorMessage = "";

  try {
    const res = await fetch(
      `https://zsqur.quickvara.com/api/v1/product/${params?.productId}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    const encryptedData = await res.text(); // Ensure to use 'text()' to get the response as plain text
    const decryptedData = decryptFunction(encryptedData); // Decrypt the data
    const data = JSON.parse(decryptedData); 

    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    loading = false;
    return {
      props: {
        product: data,
        loading: loading,
        errorMessage: null,
      },
    };
  } catch (error) {
    errorMessage = "An error occurred. Please try again later.";

    return {
      props: {
        product: null,
        loading: loading,
        errorMessage: errorMessage,
      },
    };
  }
};

export default PrivateRoute(ProductDetails);
