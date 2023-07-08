/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { GetServerSideProps } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PrivateRoute from "@/routes/privateRoute";
import Head from "next/head";
import { toast } from "react-hot-toast";
import RelatedPosts from "@/components/RelatedPost/RelatedPosts";
import { useSelector } from "react-redux";

const ProductDetails = ({ product, loading, errorMessage }: any) => {
  const { img1, img2, img3, img4, img5 } = product;
  // const { lang }: any = useContext(FilterContext);
  const lang = useSelector((state: any) => state.language.language);
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

  const handleCopyLine = (line: any) => {
    navigator.clipboard.writeText(line);
    if (lang) {
      toast.success("কপি করা হয়েছে।");
    } else {
      toast.success("Copied");
    }
  };
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, to-let, quickvara, toleet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Ads Details | toleet | Tolet | Basa Vara | quickvara | house rent | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="QuickVara - Ads Details | toleet | Property Tolet | Basa Vara | quickvara | house rent | rent"
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To-Let, To Let, tolet, ToLet, to let, to-let, quickvara, toleet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Ads Details | toleet | Property Tolet | Basa Vara | quickvara | house rent | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className="w-full lg:w-10/12 mx-auto lg:my-10">
        <Card className="lg:flex-row w-full p-7">
          <CardHeader
            shadow={false}
            floated={false}
            className="lg:w-2/5 shrink-0 m-0 rounded-none"
          >
            <div>
              <PhotoProvider>
                <PhotoView src={slideImage?.value}>
                    <img
                      src={slideImage?.value}
                      alt=""
                      className="h-96 w-full rounded"
                      draggable="false"
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
                        className="lg:h-20 h-16 w-14 lg:w-32 rounded cursor-pointer"
                        draggable="false"
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
                    {!lang ? (
                      <Typography
                        variant="h6"
                        className="uppercase text-warning"
                      >
                        {product?.type?.eng}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h6"
                        className="uppercase text-warning"
                      >
                        {product?.type?.ban}
                      </Typography>
                    )}
                    <Typography variant="h6" className="text-warning md:hidden">
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
                    </Typography>
                  </div>
                  {product?.university?.eng && (
                    <>
                      {!lang ? (
                        <>
                          <span className="font-semibold">Beside: </span>
                          {product?.university?.eng}
                        </>
                      ) : (
                        <>
                          <span className="font-semibold"> </span>
                          {product?.university?.ban} এর পাশে
                        </>
                      )}
                    </>
                  )}
                  <Typography color="gray" className="font-normal">
                    <div className="md:flex md:gap-56">
                      {product?.bedrooms?.eng && (
                        <div>
                          {!lang ? (
                            <h2>Bedroom: {product?.bedrooms?.eng}</h2>
                          ) : (
                            <h2> বেডরুমঃ {product?.bedrooms?.ban}</h2>
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
                              {" "}
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
                              {" "}
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
                        <div className="md:hidden">
                          {!lang ? (
                            <h2>Empty Bed: {product?.bedNumber?.eng} </h2>
                          ) : (
                            <h2>ফাঁকা বেড: {product?.bedNumber?.ban} </h2>
                          )}
                        </div>
                      )}
                    </div>
                    {product?.bathrooms && (
                      <div
                        className={
                          product?.type?.eng === "Mess-(Male)" ||
                          product?.type?.eng === "Mess-(Female)" ||
                          product?.type?.eng === "Sublet-(Male)" ||
                          product?.type?.eng === "Sublet-(Female)"
                            ? "flex"
                            : "md:hidden"
                        }
                      >
                        {!lang ? (
                          <h2>Bathroom: {product?.bathrooms?.eng}</h2>
                        ) : (
                          <h2>বাথরুমঃ {product?.bathrooms?.ban}</h2>
                        )}
                      </div>
                    )}

                    <div className="md:flex md:gap-[135px]">
                      {!lang ? (
                        <h2>Rent : {product?.amount} taka (Monthly)</h2>
                      ) : (
                        <h2> ভাড়াঃ {banglaNumber} টাকা (মাসিক)</h2>
                      )}
                      {product?.negotiable === true && (
                        <h2 className="md:hidden">
                          {" "}
                          {!lang ? "Negotiable" : "আলোচনা সাপেক্ষে"}
                        </h2>
                      )}
                    </div>

                    {product?.cityName?.eng && (
                      <div className="md:flex md:gap-[183px]">
                        {!lang ? (
                          <h2>Area: {product?.areaName?.eng}</h2>
                        ) : (
                          <h2>এলাকাঃ {product?.areaName?.ban}</h2>
                        )}
                        <h2 className="md:hidden">
                          {!lang ? (
                            <span> City: {product?.cityName?.eng}</span>
                          ) : (
                            <span> শহরঃ {product?.cityName?.ban}</span>
                          )}
                        </h2>
                      </div>
                    )}
                    {product?.division?.eng && (
                      <div className="md:flex md:gap-40">
                        {!lang ? (
                          <h2>District: {product?.districts?.eng}</h2>
                        ) : (
                          <h2> জেলাঃ {product?.districts?.ban}</h2>
                        )}
                        <h2 className="md:hidden">
                          {!lang ? (
                            <span> Division: {product?.division?.eng}</span>
                          ) : (
                            <span> বিভাগঃ {product?.division?.ban}</span>
                          )}
                        </h2>
                      </div>
                    )}
                    {product?.wifiFacility && (
                      <div className="md:flex md:gap-[135px]">
                        {!lang ? (
                          <h2>
                            {" "}
                            Wifi facilities: {product?.wifiFacility?.eng}
                          </h2>
                        ) : (
                          <h2> ওয়াইফাই সুবিধাঃ {product?.wifiFacility?.ban}</h2>
                        )}
                      </div>
                    )}
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
                    </Typography>
                  </div>
                  {product?.university?.ban && (
                    <h2 className="invisible">
                      {!lang ? (
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
                      {product?.bathrooms && (
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
                            <h2>Bathroom: {product?.bathrooms?.eng}</h2>
                          ) : (
                            <h2>বাথরুমঃ {product?.bathrooms?.ban}</h2>
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
                    </div>
                    <div className={product.totalBed ? "invisible" : "hidden"}>
                      {!lang ? (
                        <h2>Empty Bed: {product?.bedNumber?.eng} </h2>
                      ) : (
                        <h2>ফাঁকা বেড: {product?.bedNumber?.ban} </h2>
                      )}
                    </div>
                    <h2
                      className={
                        product?.totalBed?.eng === "Single room"
                          ? "invisible"
                          : "hidden"
                      }
                    >
                      Rent : {product?.amount} taka (Monthly)
                    </h2>
                    <div className="md:flex md:gap-[135px]">
                      {!lang ? (
                        <>
                          {" "}
                          {product?.negotiable ? (
                            <h2> Negotiable</h2>
                          ) : (
                            <h2>Fixed</h2>
                          )}
                        </>
                      ) : (
                        <>
                          {" "}
                          {product?.negotiable ? (
                            <h2> আলোচনা সাপেক্ষে</h2>
                          ) : (
                            <h2>ফিক্সড</h2>
                          )}
                        </>
                      )}
                    </div>

                    {product?.cityName?.eng && (
                      <div className="md:flex md:gap-[183px]">
                        {/* <h2>Area: {post?.areaName?.eng}</h2> */}
                        {!lang ? (
                          <h2>City: {product?.cityName?.eng}</h2>
                        ) : (
                          <h2> শহরঃ {product?.cityName?.ban}</h2>
                        )}
                      </div>
                    )}
                    {product?.division?.eng && (
                      <div className="md:flex md:gap-40">
                        {/* <h2>District: {post?.districts?.eng}</h2> */}
                        {!lang ? (
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
            <div>
              <div className="ml-6 lg:ml-6 -mt-5 mb-5">
                {!lang ? (
                  <h2>Detail address: {product?.address}</h2>
                ) : (
                  <h2>
                    {" "}
                    বিস্তারিত ঠিকানাঃ <br className="lg:hidden" />{" "}
                    {product?.address}
                  </h2>
                )}
              </div>
              <div className="ml-6 lg:ml-7">
                <Typography variant="h5" color="blue-gray" className="my-2">
                  {product?.title}
                </Typography>
                <h2> {product?.description}</h2>
                <div className="relative">
                  <Typography className="border border-accent py-1 px-2 rounded-md mt-2">
                    {!lang ? (
                      <Typography>Contact number: +{product?.phone}</Typography>
                    ) : (
                      <Typography>
                        মোবাইল নাম্বারঃ +
                        <span>
                          {product?.phone &&
                            product.phone
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
            </div>
          </div>
        </Card>
      </section>
      <br />
      <RelatedPosts
        id={product._id}
        type={product.type}
        areaName={product.areaName}
        cityName={product.cityName}
        division= {product?.division}
        district={product?.districts}
      ></RelatedPosts>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const cookieValue = context?.req?.cookies?.token;
  const token = cookieValue
    ? JSON.parse(decodeURIComponent(cookieValue))
    : null;
  const { params } = context;

  // Set the loading status to true
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
    const data = await res.json();

    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    // Set the loading status to false once the data is fetched
    loading = false;

    return {
      props: {
        product: data,
        loading: loading,
        errorMessage: null, // Pass the loading status as a prop
      },
    };
  } catch (error) {
    errorMessage = "An error occurred. Please try again later.";

    return {
      props: {
        product: null,
        loading: loading,
        errorMessage: errorMessage, // Pass the loading status as a prop
      },
    };
  }
};

export default PrivateRoute(ProductDetails);
