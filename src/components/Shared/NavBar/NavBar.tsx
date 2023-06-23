import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StateContext } from "@/Context/StateContext/StateContext";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import style from '../../../styles/banner.module.css'

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const {
    setCityName,
    setDivisionNameEng,
    setDistrictsName,
    setHomePopularAreaName,
    setFilterTypeCity,
    setFilterTypeDivision,
    setOpenModalValue,
    setFilterValue,
    setFilterModalValue,
    setFilterModal,
    handleOpenModalEng,
    setOpenModalEng,
  }: any = useContext(StateContext);
  const {
    setPostCityNameEng,
    setPostDivisionNameEng,
    setPostOpenModal,
    setGetPostPopularAreaName,
    setPostDistrictsName,
    setGetUniversityModalValue,
  }: any = useContext(PostStateContext);
  const {lang, setLang}:any = useContext(FilterContext)
  const [authenticated, setAuthenticated] = useState(false);
  const { push, pathname } = useRouter();

  const cookieValue = Cookies.get('token');
  const token = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    } else if (!token) {
      setAuthenticated(false);
    }
  }, [pathname, token]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logOut = () => {
    setAuthenticated(false);
    Cookies.remove("token");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    Cookies.remove("authentication");
    Cookies.remove("city");
    Cookies.remove("area");
    Cookies.remove("district");
    Cookies.remove("division");
    Cookies.remove("filterMV");
    Cookies.remove("openMV");
    Cookies.remove("next-auth.session-token");
    return push("/signIn");
  };

  const handleLogOut = () => {
    logOut();
  };

  // const [language, setLanguage] = useState(false);

  const handleLanguageChange = () => {
    const newLanguage = !lang;
    setLang(newLanguage);
    localStorage.setItem('lan', JSON.stringify(newLanguage));
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lan');
    if (storedLanguage) {
      setLang(JSON.parse(storedLanguage));
    }
  }, [setLang]);
  // const lang = localStorage.getItem("lan");
  const handleHome = () => {
    setCityName({});
    setDivisionNameEng({}),
      setDistrictsName({}),
      setHomePopularAreaName({}),
      setOpenModalValue({});
    handleOpenModalEng();
    setOpenModalEng(false);
    setFilterModalValue({});
    setFilterModal(false);
    setFilterValue({});
    setFilterTypeCity(false);
    setFilterTypeDivision(false);
    setPostCityNameEng({}),
      setGetPostPopularAreaName({}),
      setPostDivisionNameEng({}),
      setPostOpenModal(false);
    setPostDistrictsName({});
    setGetUniversityModalValue({});
    Cookies.remove("city");
    Cookies.remove("area");
    Cookies.remove("district");
    Cookies.remove("division");
    Cookies.remove("filterMV");
    Cookies.remove("openMV");
  };

  const email = Cookies.get("authentication");
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="flex justify-center lg:ml-0 lg:block">
        <Link href="/add-post">
          <div className="navbar-end">
            {/* <Link href="/SignUp">  */}
            <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
              onClick={() => setOpenNav(false)}
            >
              {!lang ? (
                <Button className="w-[148px] lg:w-[212px] -ml-[34px] lg:ml-36 text-primary -my-2 py-2 lg:text-[15px] bg-transparent border border-accent  font-normal lg:font-semibold rounded">
                  Post your ads
                </Button>
              ) : (
                <>
                  <Button className="w-[162px] lg:w-[212px] -ml-6 lg:ml-36 text-primary -my-2 py-2 lg:text-[15px] bg-transparent border border-accent font-normal lg:font-semibold rounded hidden lg:flex">
                    আপনার বিজ্ঞাপন দিন
                  </Button>
                  <Button className="w-[164px] lg:w-[212px] -ml-[22px] lg:ml-36 text-primary -my-2 py-2  lg:text-[13px] bg-transparent border border-accent font-normal lg:font-semibold rounded flex lg:hidden">
                  আপনার বিজ্ঞাপন দিন
                  </Button>
                </>
              )}
            </Typography>
          </div>
        </Link>
      </li>
      <li className="flex justify-center lg:block">
        {!authenticated && !email ? (
          <Typography
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            ripple="false"
            onClick={() => setOpenNav(false)}
          >
            <Link href="/signIn">
              <span
                onClick={() => setOpenNav(false)}
                className="text-primary hidden lg:flex"
              >
                {!lang ? <span>SignIn</span> : <span>সাইন ইন</span>}
              </span>
            </Link>
          </Typography>
        ) : (
          <Typography
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            ripple={"false"}
            onClick={() => setOpenNav(false)}
          >
            <Link href="/dashboard">
              <span
                onClick={() => setOpenNav(false)}
                className="text-primary mt-1"
              >
                {!lang ? (
                  <span className="border border-accent px-12 -ml-9 lg:px-2 lg:ml-0 pt-[5px] pb-[6px] rounded">
                    {" "}
                    Account
                  </span>
                ) : (
                  <span className="border border-accent px-[50px] -ml-[22px] lg:px-2 lg:ml-0 pt-[5px] pb-[6px] rounded">
                    অ্যাকাউন্ট
                  </span>
                )}
              </span>
            </Link>
          </Typography>
        )}
      </li>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 bg-warning bg-opacity-100 h-max min-w-full rounded-none py-2 px-1 md:px-0 lg:px-8 lg:py-4 border-none text-primary shadow-sm">
        <div className="flex items-center justify-between text-blue-gray-900 px-2 w-11/12 md:w-10/12 lg:w-11/12 lg:px-8 mx-auto">
          <div className={`flex ${style.gapStyle} gap-9 lg:gap-12`}>
            <Link className="flex md:gap-2" onClick={handleHome} href={"/"}>
              {/* <Image
                className="h-7 mt-[7px] w-12 rounded"
                src={logo}
                alt={""}
              ></Image> */}
              {/* // text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-700 to-primary */}
              <Typography className={`mr-4 cursor-pointer text-4xl font-semibold md:font-extrabold text-primary ${style.navNameStyle}`}>
                To-Leet
              </Typography>
            </Link>
            <div className="mt-1 mb-1 hidden lg:flex ">
              {!lang ? (
                <Link
                  href="/ads"
                  className="font-semibold border border-success text-primary  rounded cursor-pointer px-2 py-[3px]"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="font-semibold border border-success  text-primary  rounded cursor-pointer px-2 py-[3px]"
                >
                  সকল বিজ্ঞাপন
                </Link>
              )}
            </div>
            <div className="mt-2 mb-1 lg:hidden flex">
              {!lang ? (
                <Link
                  href="/ads"
                  className="text-primary  rounded cursor-pointer border border-success px-2 py-1 text-sm"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="text-primary  rounded cursor-pointer border border-success px-1 pt-[6px] text-xs"
                >
                  সকল বিজ্ঞাপন
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex">
            {!lang ? (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-2 rounded cursor-pointer"
              >
                বাংলা
              </span>
            ) : (
              <span
              onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-2 rounded cursor-pointer"
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
                size="sm"
                className="hidden lg:inline-block text-gray-700 -my-2 bg-accent rounded"
              >
                {!lang ? <span>LogOut</span> : <span>লগআউট</span>}
              </Button>
            ) : (
              <Link href={"/signUp"}>
                <Button
                  size="sm"
                  className="hidden lg:inline-block text-gray-700 -my-2 bg-accent  rounded"
                >
                  {!lang ? <span>SignUp</span> : <span>সাইন আপ</span>}
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
        <Collapse  open={openNav}>
          <div className="mt-10"> {navList}</div>
          <div className="flex justify-center">
            {authenticated ? (
              <div onClick={handleLogOut}>
                {" "}
                {!lang ? (
                  <Button
                    className="text-gray-700 w-[149px] -ml-9 py-2 -my-2 bg-accent rounded"
                    onClick={() => setOpenNav(false)}
                  >
                    LogOut
                  </Button>
                ) : (
                  <Button
                    className="text-gray-700 w-[162px] -ml-[23px] py-2 -my-2 bg-accent rounded"
                    onClick={() => setOpenNav(false)}
                  >
                    লগআউট
                  </Button>
                )}
              </div>
            ) : (
              <Link href={"/signIn"}>
                {!lang ? (
                  <Button
                    size="sm"
                    className="w-[150px] -ml-9 mb-3 text-gray-700 -my-2 bg-accent rounded"
                  >
                    <span onClick={() => setOpenNav(false)}>SignIn</span>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-[163px] -ml-6 rounded mb-3 text-gray-700 -my-2 bg-accent"
                  >
                    <span
                      className="text-[15px]"
                      onClick={() => setOpenNav(false)}
                    >
                      সাইন ইন
                    </span>
                  </Button>
                )}
              </Link>
            )}
          </div>
          <div className="flex justify-center rounded-full md:hidden pt-5 mb-5">
            {!lang ? (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary rounded cursor-pointer shadow-lg shadow-accent px-[53px] -ml-9"
              >
                বাংলা
              </span>
            ) : (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[2px] pb-[1px] text-primary px-[51px] -ml-6 rounded cursor-pointer shadow-lg shadow-accent"
              >
                English
              </span>
            )}
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
