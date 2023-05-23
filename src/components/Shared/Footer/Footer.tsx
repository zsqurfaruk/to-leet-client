/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "../../../image/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  //footer
  return (
    <div className="relative bg-gradient-to-r from-gray-700 via-black to-gray-700  text-white ">
      <svg
        className="absolute top-0 w-full h-1  text-success"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto w-10/12">
        <div className="md:flex justify-between mb-3">
          <div>
            <a className="flex">
              <Image className="h-7 w-12 mt-2" src={logo} alt=""></Image>
              {/* <img className="h-10 w-10 rounded-lg" src={logo} alt="" /> */}
              <h1 className="ml-2 text-4xl font-bold tracking-wide text-gray-100 uppercase ">
                <span className="mr-4 cursor-pointer text-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                 To-Leet
                </span>
              </h1>
            </a>
           <h1 className="text-xl lg:ml-2 text-accent">The Ultimate Rental Solution</h1>
            <div className="mt-4 lg:max-w-sm">
              <p className=" text-gray-400">
                
              </p>
            </div>
          </div>
          <div className="">
            
            <div>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>
                  <span className="font-bold ">Phone:</span>{" "}
                  <br className="flex md:hidden" />{" "}
                  <span> +880 1580786205</span>
                </li>
                <li>
                  <span className="font-bold ">Email:</span>
                  <span> farukk6323@gmail.com</span>
                </li>
                <li  className=" ">
                  <a
                    href="https://www.facebook.com/To-Leet-101248609651271"
                    className="flex gap-1"
                  > Facebook
                    <FaFacebookF className="mt-1"></FaFacebookF>
                  </a>
                  {/* <a
                    href="https://www.linkedin.com/in/omarfaruk-238764240/"
                    className="mr-2"
                  >
                    <FaLinkedinIn></FaLinkedinIn>
                  </a> */}
                  {/* <Link href={"#"}>
                    <FaTwitter></FaTwitter>
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-10 border-t border-deep-purple-accent-200 text-center">
          <p className="text-sm text-gray-400">
            © Copyright 2023 To-Leet All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
