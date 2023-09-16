/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
 

const Footer = () => {
  //footer
  return (
    <div className="relative text-warning">
      <svg
        className="absolute top-0 w-full h-1 "
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
              {/* <Image className="h-7 w-12 mt-2" src={logo} alt=""></Image> */}
              <h1 className="ml-2 text-4xl font-bold tracking-wide">
                <span className="-ml-2 lg:ml-0 cursor-pointer text-warning text-4xl font-extrabold ">
                  QuickVara
                </span>
              </h1>
            </a>
            <h1 className="text-xl lg:ml-2 text-warning">
              The Ultimate Rental Solution
            </h1>
            <div className="mt-4 lg:max-w-sm">
              <div className=" text-warning"></div>
            </div>
          </div>
          <div className="">
            <div>
              <h1 className="font-semibold ">Contact with us.</h1>
              <>
                <span className="font-semibold ">Email:</span>
                <span> quickvara002@gmail.com</span>
              </>
              <ul className="mt-2 space-y-2 text-warning flex gap-5">
                {/* <li>
                  <span className="font-bold ">Phone:</span>{" "}
                 
                  <span> +8801816478478</span>
                </li> */}

                <li>
                  <a
                    href="https://www.facebook.com/QuickVara-107503685729345"
                    className="  "
                  >
                    <FaFacebookF className="mt-2 h-9 w-10"></FaFacebookF>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/96933262/admin/feed/posts/"
                    className=" "
                  >
                    <FaLinkedinIn className="h-10 w-10"></FaLinkedinIn>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href={"https://www.instagram.com/quickvara/?hl=en"}>
                    <FaInstagramSquare className="h-10 w-10"></FaInstagramSquare>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-10 border-t-2 border-warning text-center">
          <p className="text-sm">
            © Copyright 2023 QuickVara All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
