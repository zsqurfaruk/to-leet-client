import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import image from "../../../image/logo.png";

const Header = () => {
  const { user, logOut }: any = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="flex">
      <div className="bg-secondary   w-full">
        <div className="navbar text-white">
          <div className="navbar-start">
            {/* <img src={image} alt="" /> */}
            <Link href="/">
              <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
                className="hidden md:flex"
              ></Image>
            </Link>
            {/* <Image></Image> */}
            <div className="dropdown">
              <label
                htmlFor="nav-drawer"
                tabIndex={0}
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="navbar-center">
            <p className=" normal-case text-white font-bold text-4xl hidden md:flex">
              Havenly
            </p>
          </div>
          {!user ? 
            <div className="navbar-end">
              {/* <Link href="/SignUp">  */}
              <Link href="/signUp">
                <label className="mr-3 bg-primary rounded-2xl text-secondary p-2 px-8 font-medium cursor-pointer hidden md:flex">
                  POST NOW
                </label>
                {/* </Link> */}
              </Link>
            </div> : <div className="navbar-end">
              {/* <Link href="/SignUp">  */}
              <Link href="/productAds">
                <label className="mr-3 bg-primary rounded-2xl text-secondary p-2 px-8 font-medium cursor-pointer hidden md:flex">
                  POST NOW
                </label>
                {/* </Link> */}
              </Link>
            </div>
          }
        </div>
      </div>
      {user ? (
        <button className="bg-accent px-10 py-5 text-white font-medium text-xl" onClick={handleLogOut}>LogOut</button>
      ) : (
        <Link href="/signIn">
          <p className="bg-accent px-10 py-5 text-white font-medium cursor-pointer text-xl">
            SIGNIN
          </p>
        </Link>
      )}
    </nav>
  );
};

export default Header;
