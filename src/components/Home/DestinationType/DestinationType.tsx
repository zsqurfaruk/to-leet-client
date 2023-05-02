/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import image from "../../../image/photo-1560448204-e02f11c3d0e2 (1).avif";
import Image from "next/image";
import style from "../../../styles/banner.module.css";
import Link from "next/link";
import { NameContext } from "@/Context/NamInfo";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";

const DestinationType = () => {
  const { rentName,setRentName }: any = useContext(NameContext);
  const {language}:any = useContext(AuthContext)
 

  return (
    <section className="mb-20">
      {
        language ? 
      <h1
        id={style.bannerTextColor}
        className="text-center text-3xl font-semibold lg:-mt-4"
      >
        What's your need?
      </h1> : <h1  id={style.bannerTextColor}
        className="text-center text-2xl font-semibold lg:-mt-4">আপনার প্রয়োজন অনুযায়ী খুজুন </h1>
      }

      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-6 md:gap5 mt-20 md:mt8">
        <Link
          href={{
            pathname: `/Apartment`
          }}
          onClick={() => setRentName("Apartment")}
        >
          <Card className="bg-gradient-to-r from-blue-gray-700 via-blue-gray-600 to-blue-gray-700 text-primary">
            <CardHeader color="blue" className="relative">
              <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className="h-full w-full"
              ></Image>

              {/* <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                /> */}
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2"
                id={style.bannerTextColor}
              >
                Apartment
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling. At our to-leet
                website, we understand the importance of finding a perfect
                destination that makes you feel happy and comfortable. Let us
                help you find your perfect destination, where you can create
                lifelong memories and make your dreams come true.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>

        <Link
          href={{
            pathname: `/House`
          }}
          onClick={() => setRentName("House")}
        >
          <Card className="bg-gradient-to-r from-blue-gray-700 via-blue-gray-600 to-blue-gray-700 text-primary">
            <CardHeader color="blue" className="relative">
              <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className="h-full w-full"
              ></Image>

              {/* <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                /> */}
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2"
                id={style.bannerTextColor}
              >
                House
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling. At our to-leet
                website, we understand the importance of finding a perfect
                destination that makes you feel happy and comfortable. Let us
                help you find your perfect destination, where you can create
                lifelong memories and make your dreams come true.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>

        <Link
          href={{
            pathname: `/Mess`,
          }}
          onClick={() => setRentName("Mess")}
        >
          <Card className="bg-gradient-to-r from-blue-gray-700 via-blue-gray-600 to-blue-gray-700 text-primary">
            <CardHeader color="blue" className="relative">
              <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className="h-full w-full"
              ></Image>

              {/* <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                /> */}
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2"
                id={style.bannerTextColor}
              >
                Mess
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling. At our to-leet
                website, we understand the importance of finding a perfect
                destination that makes you feel happy and comfortable. Let us
                help you find your perfect destination, where you can create
                lifelong memories and make your dreams come true.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </section>
  );
};

export default DestinationType;
