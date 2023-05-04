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
import { FaMale } from "react-icons/fa";
import { BiFemale } from "react-icons/bi";
import { ImManWoman } from "react-icons/im";
import { MdFamilyRestroom, MdOutlineFamilyRestroom,MdOutlineGarage } from "react-icons/md";
import { FcHome, FcShop} from "react-icons/fc";
// import { FcShop} from "react-icons/fc";

const DestinationType = () => {
  const { setRentName }: any = useContext(NameContext);
  const { language }: any = useContext(AuthContext);

  return (
    <section className="mb-20">
      {language ? (
        <h1
          id={style.bannerTextColor}
          className="text-center text-3xl font-semibold lg:-mt-4"
        >
          What's your need?
        </h1>
      ) : (
        <h1
          id={style.bannerTextColor}
          className="text-center text-2xl font-semibold lg:-mt-4"
        >
          আপনার প্রয়োজন অনুযায়ী খুজুন{" "}
        </h1>
      )}

      <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 lg:gap-4 md:gap-2 gap-5 mt-20 md:mt-8">
        <Link
          href={{
            pathname: `/Male-Bachelor`,
          }}
          onClick={() => setRentName("Male Bachelor")}
        >
          <Card className="">
            <div className="flex justify-center mt-2">
              <FaMale className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></FaMale>
            </div>

            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
                // id={style.bannerTextColor}
              >
                Male Bachelor
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>

        <Link
          href={{
            pathname: `/Female-Bachelor`,
          }}
          onClick={() => setRentName("Female Bachelor")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <BiFemale className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></BiFemale>
            </div>

            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Female Bachelor
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>

        <Link
          href={{
            pathname: `/Sublet`,
          }}
          onClick={() => setRentName("Sublet")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <ImManWoman className="h-24 w-24 py-5 px-2 border border-cyan-600 text-cyan-600   rounded-full  "></ImManWoman>
            </div>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Sublet
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>
        <Link
          href={{
            pathname: `/Family`,
          }}
          onClick={() => setRentName("Family")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <MdFamilyRestroom className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></MdFamilyRestroom>
            </div>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Family
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>
        {/* <Link
          href={{
            pathname: `/Family-Female`,
          }}
          onClick={() => setRentName("Family/Female")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <MdOutlineFamilyRestroom className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></MdOutlineFamilyRestroom>
            </div>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Family<br className="flex md:hidden"/>(Female)
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              {/* </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link> */}
        {/* <Link
          href={{
            pathname: `/Family-Female-Male`,
          }}
          onClick={() => setRentName("Family/Female/Male")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <MdOutlineFamilyRestroom className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></MdOutlineFamilyRestroom>
            </div> */}
            {/* <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Family<br className="flex md:hidden"/>(Female/Male)
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              {/* </Typography>
            </CardBody> */}
            {/* <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link> */} 
        <Link
          href={{
            pathname: `/Hostel`,
          }}
          onClick={() => setRentName("Hostel")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <FcHome className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></FcHome>
            </div>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Hostel
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>
        <Link
          href={{
            pathname: `/Office `,
          }}
          onClick={() => setRentName("Office")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <FaMale className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></FaMale>
            </div>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Office 
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* At our to-leet
                website, we understand the importance of finding a perfect
                destination that makes you feel happy and comfortable. Let us
                help you find your perfect destination, where you can create
                lifelong memories and make your dreams come true. */}
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>
        <Link
          href={{
            pathname: `/Shop`,
          }}
          onClick={() => setRentName("Shop")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <FcShop className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></FcShop>
            </div>
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
               Shop
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* At our to-leet
                website, we understand the importance of finding a perfect
                destination that makes you feel happy and comfortable. Let us
                help you find your perfect destination, where you can create
                lifelong memories and make your dreams come true. */}
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
                See All
              </Typography>
            </CardFooter>
          </Card>
        </Link>
        <Link
          href={{
            pathname: `/Garage`,
          }}
          onClick={() => setRentName("Garage")}
        >
          <Card>
            <div className="flex justify-center mt-2">
              <MdOutlineGarage className="h-24 w-24 border border-cyan-600 text-cyan-600 bg-  rounded-full py-2"></MdOutlineGarage>
            </div>
            {/* <CardHeader color="blue" className="relative">
              <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className="h-full w-full"
              ></Image> */}

            {/* <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                /> */}
            {/* </CardHeader> */}
            <CardBody className="text-center">
              <Typography
                variant="h5"
                className="mb-2 text-secondary"
              >
                Garage
              </Typography>
              <Typography className="text-sm text-justify">
                Home is not just a place, it's a feeling.
                {/* We believe that everyone deserves to live in a space that reflects their unique personality and style. */}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between pb-3 pt-2"
            >
              <Typography className="w-full text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-2 rounded-full cursor-pointer text-accent text-lg">
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
