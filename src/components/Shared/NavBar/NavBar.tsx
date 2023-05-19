import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StateContext } from "@/Context/StateContext/StateContext";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const {
    setLanguage,
    language,
    setCityName,
    setDivisionNameEng,
    setDistrictsName,
    setHomePopularAreaName,
    setFilterTypeCity,
    setFilterTypeDivision,
    setOpenModalValue,
    setFilterValue,
    setFilterModalValue,
    setFilterModal
  }: any = useContext(StateContext);
  const {
    setPostCityNameEng,
    setPostDivisionNameEng,
    setPostOpenModal,
    setGetPostPopularAreaName,
    setPostDistrictsName,
    setGetUniversityModalValue
  }: any = useContext(PostStateContext);
  const [authenticated, setAuthenticated] = useState(false);
  const { push, pathname } = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    } else if (!token) {
      setAuthenticated(false);
    }
  }, [pathname]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logOut = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    return push("/signIn");
  };

  const handleLogOut = () => {
    logOut();
  };

  const handleLanguage = () => {
    setLanguage(!language);
    if (language) {
      localStorage.setItem("lan", language);
    } else {
      localStorage.removeItem("lan");
    }
  };
  const lang = localStorage.getItem("lan");

  const handleHome = () => {
    setCityName({});
    setDivisionNameEng({}),
      setDistrictsName({}),
      setHomePopularAreaName({}),
      setOpenModalValue({});
      setFilterModalValue({})
      setFilterModal(false)
    setFilterValue({});
    setFilterTypeCity(false);
    setFilterTypeDivision(false);
    setPostCityNameEng({}),
      setGetPostPopularAreaName({}),
      setPostDivisionNameEng({}),
      setPostOpenModal(false);
    setPostDistrictsName({});
    setGetUniversityModalValue({})
  };

  const email = localStorage.getItem("email");
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        {!authenticated && !email ? (
          <div className="navbar-end">
            {/* <Link href="/SignUp">  */}
            <Link href="/signIn">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                onClick={() => setOpenNav(false)}
              >
                {lang ? (
                  <Button className="w-[212px] text-gray-700 -my-2 py-1 text-[16px] bg-gradient-to-r from-success via-accent to-success">
                    Post your ads
                  </Button>
                ) : (
                  <Button className="w-[212px] text-gray-700 -my-2 py-1 text-[16px] bg-gradient-to-r from-success via-accent to-success">
                    আপনার বিজ্ঞাপন দিন
                  </Button>
                )}
              </Typography>
              {/* </Link> */}
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            {/* <Link href="/SignUp">  */}
            <Link href="/add-post">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                onClick={() => setOpenNav(false)}
              >
                {lang ? (
                  <Button className="w-[212px] text-gray-700 -my-2 py-1 text-[16px] bg-gradient-to-r from-success via-accent to-success">
                    Post your ads
                  </Button>
                ) : (
                  <Button className="w-[212px] text-gray-700 -my-2 py-1 text-[16px] bg-gradient-to-r from-success via-accent to-success">
                    আপনার বিজ্ঞাপন দিন
                  </Button>
                )}
              </Typography>
              {/* </Link> */}
            </Link>
          </div>
        )}
      </li>
      <li>
        {!authenticated && email ? 
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            ripple={false}
            onClick={() => setOpenNav(false)}
          >
            <Link href="/signIn">
              <li onClick={() => setOpenNav(false)} className=" text-primary">
                {lang ? <span>SignIn</span> : <span>সাইন ইন</span>}
              </li>
            </Link>
          </Typography> : <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            ripple={false}
            onClick={() => setOpenNav(false)}
          >
            <Link href="/dashboard">
              <li onClick={() => setOpenNav(false)} className=" text-primary">
                {lang ? <span className="border border-accent px-2 py-1 rounded-lg"> Account</span> : <span className="border border-accent px-2 py-1 rounded-lg">অ্যাকাউন্ট</span>}
              </li>
            </Link>
          </Typography>
        }
      </li>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-75 h-max min-w-full rounded-none py-2 px-1 md:px-0 lg:px-8 lg:py-4 border-none text-primary shadow-sm">
        <div className="flex items-center justify-between text-blue-gray-900 w-10/12  lg:w-11/12 lg:px-8 mx-auto">
          <div className="flex gap-9 lg:gap-12">
            <Link onClick={handleHome} href={"/"}>
              <Typography className="mr-4 cursor-pointer text-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                To-Leet
              </Typography>
            </Link>
            <div className="mt-3 hidden lg:flex">
              {lang ? (
                <Link
                  href="/ads"
                  className="font-semibold border border-success text-primary  rounded-lg cursor-pointer px-2 py-1"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="font-semibold border border-success  text-primary  rounded-lg cursor-pointer px-2 py-1"
                >
                  সকল বিজ্ঞাপন
                </Link>
              )}
            </div>
            <div className="mt-2 mb-1 lg:hidden flex">
              {lang ? (
                <Link
                  href="/ads"
                  className="text-primary  rounded-lg cursor-pointer border border-success px-2 py-1 text-sm"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="text-primary  rounded-lg cursor-pointer border border-success px-1 pt-[6px] text-xs"
                >
                  সকল বিজ্ঞাপন
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex">
            {lang ? (
              <span
                onClick={handleLanguage}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-2 rounded-lg cursor-pointer"
              >
                বাংলা
              </span>
            ) : (
              <span
                onClick={handleLanguage}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-2 rounded-lg cursor-pointer"
              >
                English
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {authenticated ? (
              <Button
                onClick={handleLogOut}
                // variant="gradient"
                size="sm"
                className="hidden lg:inline-block text-gray-700 -my-2 bg-gradient-to-r from-success via-accent to-success"
              >
                {lang ? <span>LogOut</span> : <span>লগআউট</span>}
              </Button>
            ) : (
              <Link href={"/signUp"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block text-gray-700 -my-2 bg-gradient-to-r from-success via-accent to-success"
                >
                  {lang ? <span>SignUp</span> : <span>সাইন আপ</span>}
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="mt-3 font-semibold ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  text-primary"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="mt-10"> {navList}</div>
          {authenticated ? (
            <Button
              className="text-gray-700 -my-2 bg-gradient-to-r from-success via-accent to-success"
              onClick={handleLogOut}
              variant="gradient"
              size="sm"
            >
              {" "}
              {lang ? (
                <span onClick={() => setOpenNav(false)}>LogOut</span>
              ) : (
                <span onClick={() => setOpenNav(false)}>লগআউট</span>
              )}
            </Button>
          ) : (
            <Link href={"/signUp"}>
              <Button
                variant="gradient"
                size="sm"
                className="w-full rounded-full mb-3 text-gray-700 -my-2 bg-gradient-to-r from-success via-accent to-success"
              >
                {lang ? (
                  <span onClick={() => setOpenNav(false)}>SignUp</span>
                ) : (
                  <span>সাইন আপ</span>
                )}
              </Button>
            </Link>
          )}
          <div className="flex justify-center rounded-full md:hidden pt-10 mb-5">
            {lang ? (
              <span
                onClick={handleLanguage}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-2 rounded-lg cursor-pointer shadow-lg shadow-accent"
              >
                বাংলা
              </span>
            ) : (
              <span
                onClick={handleLanguage}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-2 rounded-lg cursor-pointer shadow-lg shadow-accent"
              >
                English
              </span>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
}

